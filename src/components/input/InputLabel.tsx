import React, { useState, ChangeEvent, FocusEvent, ReactNode } from 'react';
import './InputLabel.css';

interface InputLabelProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validator?: (value: string) => { isValid: boolean; msg?: string };
  name: string;
  error?: string | null;
  resetError?: (event: FocusEvent<HTMLInputElement>) => void;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
}

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  type,
  placeholder,
  required = false,
  onChange,
  value,
  validator = () => ({ isValid: true }),
  name,
  error,
  resetError,
  leftIcon,
  rightIcon
}) => {
  const [validationState, setValidationState] = useState<{ isValid: boolean; msg?: string }>({ isValid: true });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const response = validator(inputValue);
    setValidationState(response);
    onChange(event);
  };

  return (
    <div>
      <label className="input-label">{label}</label>
      <div className="input-container relative">
        {leftIcon && (
          <div className="icon-container left-icon">
            {typeof leftIcon === 'string' ?
              <img src={leftIcon} alt="" className="icon-input" /> :
              leftIcon}
          </div>
        )}
        <input
          onFocus={resetError}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`input-field ${error ? 'error' : ''} ${leftIcon ? 'with-left-icon' : ''}`}
        />
        {rightIcon && (
          <div className="icon-container right-icon">
            {
              typeof rightIcon === 'string' ? <img src={rightIcon} alt="" className="icon-input" /> : rightIcon
            }
          </div>
        )}
      </div>
      {!validationState.isValid && !error && <span className="error-message">{validationState.msg}</span>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputLabel;
