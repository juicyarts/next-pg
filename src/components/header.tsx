import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export default function Header() {
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
          </div>
        </div>
      </div>
    </div>
  );
}
