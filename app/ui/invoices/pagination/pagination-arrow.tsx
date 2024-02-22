'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

type PaginationArrowProps = {
  direction: 'left' | 'right';
  href: string;
  isDisabled: boolean;
};

export default function PaginationArrow({
  direction,
  href,
  isDisabled,
}: PaginationArrowProps) {
  const router = useRouter();

  router.prefetch(href);

  const handleClick = () => {
    router.push(href);
  };

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="size-4" />
    ) : (
      <ArrowRightIcon className="size-4" />
    );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'flex size-10 items-center justify-center rounded-md border',
        'enabled:hover:bg-gray-100',
        'disabled:pointer-events-none disabled:text-gray-300',
      )}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
}
