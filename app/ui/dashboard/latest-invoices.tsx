import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { fetchLatestInvoices } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className={clsx(lusitana.className, 'text-xl md:text-2xl')}>
        Latest Invoices
      </h2>
      <div className="flex flex-1 flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}
        <div className="divide-y bg-white px-6">
          {latestInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold max-md:text-sm">
                    {invoice.name}
                  </p>
                  <p className="text-sm text-gray-500 max-sm:hidden">
                    {invoice.email}
                  </p>
                </div>
              </div>
              <p
                className={clsx(
                  lusitana.className,
                  'truncate font-medium max-md:text-sm',
                )}
              >
                {invoice.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 pb-2 pt-6">
          <ArrowPathIcon className="size-5 text-gray-500" />
          <h3 className="text-sm text-gray-500">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
