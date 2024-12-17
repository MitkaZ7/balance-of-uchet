import React from 'react';

type FormProps = {
  inputs: Array<{ type: string; name: string; label?: string }>;
  buttonText: string;
  additionalElements?: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({ inputs, buttonText, additionalElements }) => {
  return (
    <form>
      {inputs.map((input, index) => (
        <div key={index}>
          {input.label && <label htmlFor={input.name}>{input.label}</label>}
          <input type={input.type} name={input.name} id={input.name} />
        </div>
      ))}
      {additionalElements}
      <button>{buttonText}</button>
    </form>
  );
};




// import React from 'react'

// export const Form = () => {
//   return (
//     <form>
//         <input type="text" name="name"/>
//         <input type="phone" name="phone"/>
//         <input type="email" name="email"/>
//         <button>Отправить</button>
//     </form>
//   )
// }
