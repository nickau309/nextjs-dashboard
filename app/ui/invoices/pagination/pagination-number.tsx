'use client';

import clsx from 'clsx';
import Link from 'next/link';

type PaginationNumberProps = {
  href: string;
  isActive: boolean;
  page: number | string;
};

export default function PaginationNumber({
  href,
  isActive,
  page,
}: PaginationNumberProps) {
  const className = clsx(
    'flex size-10 items-center justify-center border text-sm',
    'first:rounded-l-md last:rounded-r-md',
    {
      'border-blue-600 bg-blue-600 text-white': isActive,
      'bg-white': !isActive,
      'hover:bg-gray-100': !isActive && page !== '...',
      'text-gray-300': page === '...',
    },
  );

  if (page === '...') {
    return <div className={className}>{page}</div>;
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={className}
    >
      <span className="sr-only">Page</span> {page}
    </Link>
  );
}
