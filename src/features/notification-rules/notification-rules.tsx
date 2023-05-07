import NewRuleRow from './new-rule-row';
import ExistingRuleRow from './existing-rule-row';
import { getRules } from './rule-actions';

export const getNotifcationRules = async () => {
  return await getRules();
};

export default async function NotificationRules() {
  const data = await getNotifcationRules();

  return (
    <div className="container mx-auto">
      <ul>
        <li className="grid gap-4 grid-cols-8 text-left uppercase tracking-wider font-medium text-xs">
          <div className="px-6 py-4 whitespace-nowrap">Id</div>
          <div className="col-span-6 px-6 py-4 whitespace-nowrap">Name</div>
          <div className="px-6 py-4 whitespace-nowrap">Action</div>
        </li>
        <NewRuleRow />
        {data.map((item) => (
          <ExistingRuleRow rule={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
