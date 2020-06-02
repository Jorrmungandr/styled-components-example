import React from 'react';
import FormSelect from 'react-select';

import {
  ModalBase,
  ModalContent,
  FormInput,
  FormButton,
  Title,
  colourStyles,
} from './styles';

function Select({
  value,
  setValue,
  options,
  ...props
}) {
  return (
    <FormSelect
      value={value}
      isSearchable={false}
      onChange={setValue}
      options={options}
      styles={colourStyles}
      {...props}
    />
  );
}

function Input({
  value = '',
  setValue = () => { },
  type = 'text',
  ...props
}) {
  return (
    <FormInput
      value={value}
      type={type}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
}

function Button({ type = 'submit', children, ...props }) {
  return (
    <FormButton type={type} {...props}>
      {children}
    </FormButton>
  );
}

function Modal({
  active,
  setActive,
  children,
  handleSubmit,
}) {
  const handleCloseModal = (e) => {
    if (e.target.id === 'shade') setActive(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setActive(false);
    handleSubmit(e);
  };

  return (
    <ModalBase id="shade" active={active} onClick={handleCloseModal}>
      <ModalContent onSubmit={submitHandler}>
        {children}
      </ModalContent>
    </ModalBase>
  );
}

Modal.Title = Title;
Modal.Select = Select;
Modal.Input = Input;
Modal.Button = Button;

export default Modal;
