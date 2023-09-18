import React, { useState, useRef, ChangeEvent } from 'react';

interface AutoAdjustingTextInputProps {
    className: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  }
function AutoAdjustingTextInput({ 
    className, value, onChange, placeholder }
  : AutoAdjustingTextInputProps) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  };

  return (
    <textarea
      ref={inputRef}
      className={`auto-adjust-textarea ${className}`}
      value={text}
      onChange={handleInputChange}
      rows={1}
      placeholder={placeholder}
    />
  );
}

export default AutoAdjustingTextInput;

