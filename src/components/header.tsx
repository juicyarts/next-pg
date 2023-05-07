import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

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
              {dark ? <SunIcon /> : <MoonIcon />}
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
