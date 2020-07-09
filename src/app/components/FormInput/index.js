import React from 'react';

import styles from './styles.module.scss';

function FormInput({
  className = '',
  disabled = false,
  error = '',
  errorClassName = '',
  inputClassName = '',
  isTextarea = false,
  inputType,
  label = '',
  labelClassName = '',
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder = '',
  readOnly = false,
  touched,
  submitCount,
  value
}) {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  const showError =
    (touched === undefined || touched) && error && (submitCount === undefined || submitCount > 0);
  return (
    <div className={`column ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName} m-bottom-1`}>
          {label}
        </label>
      )}
      <InputComponent
        className={`${inputClassName} ${styles.input} ${showError ? styles.error : ''}`}
        name={name}
        id={name}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
      >
        {isTextarea && value}
      </InputComponent>
      <span className={`${errorClassName} ${styles.errorText} ${showError ? styles.visible : ''}`}>
        {error}
      </span>
    </div>
  );
}

export default FormInput;
