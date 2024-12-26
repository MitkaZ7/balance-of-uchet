"use client";
import React from 'react';
import { Form } from '@components/Form/Form';
import styles from './AskUs.module.scss';
import classNames from 'classnames';

export const AskUs = () => {
  const handleSubmit = (data: Record<string, string | boolean>) => {
    console.log(data);
  };

  return (
    <section className={styles['section-ask-us']}>
      <h2 className={styles['section-ask-us__title']}>Остались вопросы? Напишите нам</h2>
      <Form
        buttonText="Отправить"
        inputs={[
          { type: 'text', name: 'name', label: 'Имя' },
          { type: 'phone', name: 'phone', label: 'Телефон' },
          { type: 'email', name: 'email', label: 'Email' },
          { type: 'textarea', name: 'question', label: 'Ваш вопрос' },
          {
            type: 'checkbox',
            name: 'policy-agreement',
            label: 'Я ознакомлен с политикой конфиденциальности',
          },
        ]}
        onSubmit={handleSubmit}
        classNames={{
          form: styles['form'],
          title: styles['form__title'],
          fieldset: styles['form__fieldset'],
          label: styles['form__input-label'],
          input: styles['form__input'],
          labelCheckbox: styles['form__input-label-checkbox'],
          checkboxWrapper: styles['form__checkbox-wrapper'], // Добавлен новый класс
          checkbox: styles['form__input2-checkbox'], // Стили для чекбокса
          textarea: styles['form__textarea'],
          button: styles['form__submit-button'],
        }}
      />
      <div className={styles['section-ask-us__picture']} />
    </section>
  );
};
