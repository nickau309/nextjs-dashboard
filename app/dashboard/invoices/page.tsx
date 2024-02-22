import clsx from 'clsx';
import { Suspense } from 'react';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
import type { Metadata } from 'next';

type PageProps = {
  searchParams: {
    query?: string;
    page?: string;
  };
};

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams.query ?? '';
  const currentPage = Number(searchParams.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <main>
      <h1 className={clsx(lusitana.className, 'text-xl md:text-2xl')}>
        Invoices
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
