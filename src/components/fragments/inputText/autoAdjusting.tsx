import React, { useRef, ChangeEvent } from 'react';

interface AutoAdjustingTextInputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}

function AutoAdjustingTextInput({
  className,
  value,
  onChange,
  placeholder,
}: AutoAdjustingTextInputProps) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // Dapatkan nilai input dari event
    const newValue = e.target.value;
    
    // Teruskan nilai input ke fungsi onChange yang diberikan
    onChange(newValue);

    // Sesuaikan tinggi textarea
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
      value={value} // Gunakan nilai yang diteruskan sebagai prop
      onChange={handleInputChange}
      rows={1}
      placeholder={placeholder}
    />
  );
}

export default AutoAdjustingTextInput;
