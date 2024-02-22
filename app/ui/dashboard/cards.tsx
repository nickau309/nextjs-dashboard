import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { fetchCardData } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

type CardProps = {
  title: string;
  value: string | number;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
};

export function Card({ title, value, type }: CardProps) {
  const Icon = iconMap[type];

  return (
    <div className="flex flex-col rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex flex-1 items-center gap-2 p-4">
        {Icon && <Icon className="size-5 shrink-0 text-gray-700" />}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p
        className={clsx(
          lusitana.className,
          'truncate rounded-xl bg-white px-4 py-8 text-center text-2xl',
        )}
      >
        {value}
      </p>
    </div>
  );
}
