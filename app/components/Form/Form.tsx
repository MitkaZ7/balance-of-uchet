import React from 'react';
import classNames from 'classnames';

type FormField = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};

type FormProps = {
  inputs: FormField[];
  formTitle: string;
  buttonText: string;
  additionalElements?: React.ReactNode;
  onSubmit: (data: Record<string, string | boolean>) => void;
  classNames?: {
    form?: string;
    title?: string;
    fieldset?: string;
    label?: string;
    input?: string;
    button?: string;
  };
};

export const Form: React.FC<FormProps> = ({
  inputs,
  buttonText,
  additionalElements,
  formTitle,
  onSubmit,
  classNames: customClassNames = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | boolean> = {};
    inputs.forEach((input) => {
      data[input.name] =
        input.type === 'checkbox'
          ? formData.get(input.name) === 'on'
          : (formData.get(input.name) as string);
    });
    onSubmit(data);
  };

  return (
    <form className={classNames(customClassNames.form)} onSubmit={handleSubmit}>
      <h2 className={classNames(customClassNames.title)}>{formTitle}</h2>
      {inputs.map((input, index) => (
        <fieldset className={classNames(customClassNames.fieldset)} key={index}>
          {input.label && (
            <label
              htmlFor={input.name}
              className={classNames(customClassNames.label)}
            >
              {input.label}
            </label>
          )}
          <input
            type={input.type}
            name={input.name}
            id={input.name}
            placeholder={input.placeholder || input.label}
            className={classNames(customClassNames.input)}
          />
        </fieldset>
      ))}
      {additionalElements}
      <button className={classNames(customClassNames.button)}>
        {buttonText}
      </button>
    </form>
  );
};


/*
import styles from './Form.module.scss'


type FormProps = {
  inputs: Array<{ type: string; name: string; label?: string }>;
  formTitle: string;
  buttonText: string;
  additionalElements?: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({ inputs, buttonText, additionalElements, formTitle  }) => {
  return (
    <form className={styles.form}>
      <h2 className={styles.form__title}>{formTitle}</h2>
      {inputs.map((input, index) => (
        <fieldset className={styles['form__fieldset']} key={index}>
          {input.label && <label htmlFor={input.name} className={styles['form__input-label']}>{input.label}</label>}
          <input type={input.type} name={input.name} id={input.name} className={styles['form__input']} placeholder={input.label}/>
        </fieldset>
      ))}
      {additionalElements}
      <button className={styles['form__submit-button']}>{buttonText}</button>
    </form>
  );
};

*/


