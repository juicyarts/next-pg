import { createRule } from './rule-actions';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function NewRuleRow() {
  async function action(data: FormData) {
    'use server';

    const [, error] = await createRule(data);
    if (error) {
      console.error(error);
    }
  }

  return (
    <li className="font-medium border-b-1">
      <form action={action} className="grid gap-4 grid-cols-8">
        <div className="px-6 py-4 flex items-center justify-center whitespace-nowrap"></div>
        <div className="col-span-6 px-6 py-4 flex items-center whitespace-nowrap">
          <input
            type="text"
            id="name"
            name="name"
            className="text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Name"
            tabIndex={0}
            required
          />
        </div>
        <div className="px-6 py-4 flex items-center">
          <button type="submit" tabIndex={0}>
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </li>
  );
}
