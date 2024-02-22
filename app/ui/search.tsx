'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import type { ChangeEvent } from 'react';

type SearchProps = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    params.set('page', '1');
    router.replace(`${pathname}?${params}`);
  }, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="relative flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        defaultValue={searchParams.get('query') ?? ''}
        onChange={handleChange}
        placeholder={placeholder}
        className={clsx(
          'peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2',
          'placeholder:text-gray-500',
        )}
      />
      <MagnifyingGlassIcon
        className={clsx(
          'absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-gray-500',
          'peer-focus:text-gray-900',
        )}
      />
    </div>
  );
}
