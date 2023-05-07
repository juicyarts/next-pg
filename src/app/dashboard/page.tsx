import Layout from '@/components/layout';
import NotificationRules from '@/features/notification-rules/notification-rules';

export default function AppShellDemo() {
  return (
    <Layout>
      {/* @ts-expect-error Async Server Component */}
      <NotificationRules />
    </Layout>
  );
}
