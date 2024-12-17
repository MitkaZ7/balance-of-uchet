import React from 'react';
import { Form } from '@components/Form/Form';

export const SmallForm = () => {
  return (
    <Form
      inputs={[
        { type: 'text', name: 'name', label: 'Имя' },
        { type: 'phone', name: 'phone', label: 'Телефон' },
        { type: 'email', name: 'email', label: 'Email' },
      ]}
      buttonText="Отправить"
    />
  );
};
