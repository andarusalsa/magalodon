import React, { ChangeEvent } from 'react';
import styles from "./inputText.module.css";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

type TextInputProps = {
  placeholder: string;
  onInputChange: (value: string) => void;
  type?: string;
  value?: string | number;
};

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  onInputChange,
  type = "text",
  value = '',
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={isPasswordVisible ? "text" : type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.placeholder}
      />
      {type === "password" && (
        <span className={styles.icon} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
        </span>
      )}
    </div>
  );
};

export default TextInput;