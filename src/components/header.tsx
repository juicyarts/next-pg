'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="/" title="juicyarts" className="text-2xl">
              next-pg
            </a>
          </div>
        </div>
        <div>
          <div className="ml-4 flex items-center">
            <span className="sr-only">Open user menu</span>
            <OrganizationSwitcher />
            <UserButton />
            <ActionIcon
              variant="outline"
              color={dark ? 'white' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              className="m-2"
            >
              {dark ? <IconSun size="1.1rem" color="#fff" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
