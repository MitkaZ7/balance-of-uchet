/*
import { Form } from '@components/Form/Form';
import styles from './SmallForm.module.scss'
export const SmallForm = () => {
  return (
    <>
    <Form
      formTitle={'Заказать обратный звонок'}
      inputs={[
        { type: 'text', name: 'name', label: 'Имя' },
        { type: 'phone', name: 'phone', label: 'Телефон' },
        { type: 'email', name: 'email', label: 'Email' },
      ]}
      buttonText="Отправить"
    />
    </>
  );
};
*/
 "use client"
import React from 'react';
import { Form } from '@components/Form/Form';
import styles from './SmallForm.module.scss';
import classNames from 'classnames';

export const SmallForm = () => {
  const handleSubmit = (data: Record<string, string | boolean>) => {
    console.log('SmallForm data:', data);
  };

  return (
    <Form
      formTitle="Заказать обратный звонок"
      inputs={[
        { type: 'text', name: 'name', label: 'Имя' },
        { type: 'phone', name: 'phone', label: 'Телефон' },
        { type: 'email', name: 'email', label: 'Email' },
      ]}
      buttonText="Отправить"
      onSubmit={handleSubmit}
      classNames={{
        form: classNames(styles.form),
        title: classNames(styles['form__title']),
        fieldset: classNames(styles['form__fieldset']),
        label: classNames(styles['form__input-label']),
        input: classNames(styles['form__input']),
        button: classNames(styles['form__submit-button']),
      }}
    />
  );
};
