'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-12 items-center gap-2 rounded-md',
              link.href === pathname ? 'bg-sky-100' : 'bg-gray-50',
              'p-3 text-sm font-medium',
              link.href === pathname && 'text-blue-600',
              'hover:bg-sky-100 hover:text-blue-600',
              'max-md:flex-1 max-md:justify-center',
              'md:py-2',
            )}
          >
            <LinkIcon className="size-6" />
            <p className="max-md:hidden">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
