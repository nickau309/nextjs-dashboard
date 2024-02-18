import { GlobeAltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className={clsx(lusitana.className, 'flex items-center text-white')}>
      <GlobeAltIcon className="size-12 rotate-[15deg]" />
      <p className="text-[44px]/none">Acme</p>
    </div>
  );
}
