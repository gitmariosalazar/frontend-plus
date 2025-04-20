import React, { useState, ChangeEvent, FocusEvent, ReactNode } from 'react';
import './InputLabel.css';
import './InputLabel.css'
import Select, { ActionMeta } from 'react-select';

interface Option {
  value: string | number;
  label: string;
  description?: string;
}

interface SelectLabelProps {
  label: string;
  options: Option[];
  placeholder: string;
  required?: boolean;
  onChange: (option: Option | null, actionMeta: ActionMeta<Option>) => void;
  value: Option | null;
  validator?: (value: string) => { isValid: boolean; msg?: string };
  name: string;
  error?: string | null;
  resetError?: (event: FocusEvent<HTMLInputElement>) => void;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
}

const SelectLabel: React.FC<SelectLabelProps> = ({
  label,
  options,
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
const darkSelectTheme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#424242', // Color para hover en las opciones
    primary: '#20525C', // Color principal
    neutral0: '#181E20', // Fondo del dropdown
    neutral80: '#FFFFFF' // Texto
  },
  borderRadius: 4 // Bordes redondeados
});

  return (
    <div>
      <label className="input-label">{label}</label>
      <div className="input-container relative">
        {leftIcon && (
          <div className="icon-container left-icon">
            {typeof leftIcon === 'string' ? <img src={leftIcon} alt="" className="icon-input" /> : leftIcon}
          </div>
        )}
        <Select
          theme={darkSelectTheme}
          options={options}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isClearable={!required}
          className="react-select-container"
          classNamePrefix="react-select"
          name={name}
        />
        {rightIcon && (
          <div className="icon-container right-icon">
            {typeof rightIcon === 'string' ? <img src={rightIcon} alt="" className="icon-input" /> : rightIcon}
          </div>
        )}
      </div>
      {!validationState.isValid && !error && <span className="error-message">{validationState.msg}</span>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default SelectLabel;
