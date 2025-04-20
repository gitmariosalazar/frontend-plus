import React, { useState } from 'react';
import './InputLabel.css';
import { icons } from '@/assets/assets';

interface InputPasswordProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validator?: (value: string) => { isValid: boolean; msg?: string };
  name: string;
  error?: string | null;
  resetError: () => void;
  leftIcon?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  type = 'password',
  placeholder = '',
  required = false,
  onChange,
  value,
  validator = () => ({ isValid: true }),
  name,
  error,
  resetError,
  leftIcon
}) => {
  const [isValid, setIsValid] = useState<{ isValid: boolean; msg?: string }>({
    isValid: true
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const response = validator(inputValue);
    setIsValid(response);
    onChange(event);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <label className="input-label">{label}</label>
      <div className="input-container relative">
        {leftIcon && (
          <div className="icon-container left-icon">
            <img src={leftIcon} alt="Left Icon" className="icon-input" />
          </div>
        )}
        <input
          onFocus={resetError}
          type={showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`input-field ${error ? 'error' : ''} ${leftIcon ? 'with-left-icon' : ''}`}
        />
        <div className="icon-container-pwd right-icon">
          {showPassword ? (
            <img src={icons.disable_eye} alt="Hide Password" className="icon-input" onClick={handleTogglePassword} />
          ) : (
            <img src={icons.enable_eye} alt="Show Password" className="icon-input" onClick={handleTogglePassword} />
          )}
        </div>
      </div>
      {!isValid.isValid && error === null && <span className="error-message">{isValid.msg}</span>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputPassword;
