import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteRule } from './rule-actions';
import { NotificationRule } from '@/models/notification-rule.definition';

export default function ExistingRuleRow({ rule }: { rule: NotificationRule }) {
  async function deleteRuleAction() {
    'use server';

    const [, error] = await deleteRule(rule.id);

    if (error) {
      console.error(error);
    }
  }

  return (
    <li className="font-medium border-b-1">
      <form className="grid gap-4 grid-cols-8">
        <div className="px-6 py-4 flex whitespace-nowrap">{rule.id}</div>
        <div className="px-6 py-4 col-span-6 flex items-center whitespace-nowrap">{rule.name}</div>
        <div className="px-6 py-4 flex items-center">
          <button type="submit" formAction={deleteRuleAction} tabIndex={0}>
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </li>
  );
}
