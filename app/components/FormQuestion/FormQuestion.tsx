import React from 'react';
import { Form } from '@components/Form/Form';

export const FormQuestion = () => {
  return (
    <Form
      inputs={[
        { type: 'text', name: 'name', label: 'Имя' },
        { type: 'phone', name: 'phone', label: 'Телефон' },
        { type: 'email', name: 'email', label: 'Email' },
        { type: 'textarea', name: 'question', label: 'Ваш вопрос' },
      ]}
      buttonText="Отправить"
      additionalElements={
        <div>
          <label>
            <input type="checkbox" name="consent" /> я ознакомлен с 
            <span><a href="">политикой</a></span> 
            конфиденциальности
          </label>
        </div>
      }
    />
  );
};
