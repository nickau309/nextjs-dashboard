'use client';

import { updateInvoice } from '@/app/lib/actions';
import Form from './form';
import type { CustomerField, InvoiceForm } from '@/app/lib/definitions';

type EditFormProps = {
  customers: CustomerField[];
  invoice: InvoiceForm;
};

export default function EditForm({ customers, invoice }: EditFormProps) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <Form
      action={updateInvoiceWithId}
      customers={customers}
      invoice={invoice}
      submitText="Edit Invoice"
    />
  );
}
