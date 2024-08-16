'use client';
import React from 'react';

type Props = {
  label: string;
  placeholder: string;
  isDisabled: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EmailInput = ({ label, placeholder, isDisabled, value, onChange }: Props) => {
  return (
    <div className={`flex items-center whitespace-nowrap ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <h1 className={`w-232 medium-bold text-main-point mr-25`}>{label}</h1>
      <input
        value={value}
        onChange={onChange}
        className='appearance-none focus:outline-none focus:ring-0 border-b-1 border-b-main-point placeholder:text-gray-medium-text-2 medium-regular pb-8 px-4 pt-4'
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </div>
  );
};

export default EmailInput;
