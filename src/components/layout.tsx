'use client';

import { useState } from 'react';
import { AppShell, Header, useMantineTheme, Navbar } from '@mantine/core';
import AppHeader from '@/components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header height={{ base: 65 }}>
          <AppHeader />
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
