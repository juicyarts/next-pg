import Layout from '@/components/layout';
import Mantine from '@/components/mantine';
import NotificationRules from '@/features/notification-rules/notification-rules';

export default function AppShellDemo() {
  return (
    <Mantine>
      <Layout>
        {/* @ts-expect-error Async Server Component */}
        <NotificationRules />
      </Layout>
    </Mantine>
  );
}
