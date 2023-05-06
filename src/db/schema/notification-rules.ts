import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const notificationRules = pgTable('rules', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  owner: text('owner').notNull(),
});
