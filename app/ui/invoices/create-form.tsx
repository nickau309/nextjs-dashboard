'use client';

import { createInvoice } from '@/app/lib/actions';
import Form from './form';
import type { CustomerField } from '@/app/lib/definitions';

type CreateFormProps = { customers: CustomerField[] };

export default function CreateForm({ customers }: CreateFormProps) {
  return (
    <Form
      action={createInvoice}
      customers={customers}
      submitText="Create Invoice"
    />
  );
}
