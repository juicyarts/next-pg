'use server';

import { db } from '@/db/db';
import { notificationRules } from '@/db/schema/notification-rules';
import { and, eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const NotificationRuleSchema = z.object({
  name: z.string().nonempty(),
  owner: z.string().nonempty(),
});

function normalizeFormData(data: FormData) {
  const result: any = {};

  for (const [key, value] of data.entries()) {
    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

export async function decodeToken(token: string) {
  return jwt.decode(token);
}

export async function createRule(data: FormData) {
  const sessionToken = cookies().get('__session');
  if (!sessionToken?.value) return [null, 'no token found'];

  const session = jwt.decode(sessionToken.value);
  if (!session?.sub || typeof session?.sub === 'function') return [null, 'no user found'];

  const normalizedData = normalizeFormData(data);
  const insertValues = { ...normalizedData, owner: session.sub };

  try {
    NotificationRuleSchema.parse(insertValues);

    const result = await db.insert(notificationRules).values(insertValues);
    revalidateTag('notification-rules');
    return [result, null];
  } catch (error: any) {
    console.error('error', error);
    return [null, error.message];
  }
}

export async function getRules() {
  const sessionToken = cookies().get('__session');
  if (!sessionToken?.value) return [];

  const session = jwt.decode(sessionToken.value);
  if (!session?.sub || typeof session?.sub === 'function') return [];

  const rules = await db.select().from(notificationRules).where(eq(notificationRules.owner, session.sub));
  return rules;
}

export async function deleteRule(id: number) {
  const sessionToken = cookies().get('__session');
  if (!sessionToken?.value) return [null, 'no token found'];

  const session = jwt.decode(sessionToken.value);
  if (!session?.sub || typeof session?.sub === 'function') return [null, 'no user found'];

  try {
    const result = await db
      .delete(notificationRules)
      .where(and(eq(notificationRules.id, id), eq(notificationRules.owner, session.sub)));
    revalidateTag('notification-rules');
    return [result, null];
  } catch (error: any) {
    console.error('error', error);
    return [null, error.message];
  }
}
