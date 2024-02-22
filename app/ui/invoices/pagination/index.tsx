'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from '@/app/lib/utils';
import PaginationArrow from './pagination-arrow';
import PaginationNumber from './pagination-number';

export default function Pagination({ totalPages }: { totalPages: number }) {
  // NOTE: comment in this code when you get to this point in the course

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    /* NOTE: comment in this code when you get to this point in the course */
    <div className="inline-flex gap-2 md:gap-4">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="flex -space-x-px">
        {allPages.map((page, index) => (
          <PaginationNumber
            key={index}
            href={createPageURL(page)}
            isActive={currentPage === page}
            page={page}
          />
        ))}
      </div>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}
