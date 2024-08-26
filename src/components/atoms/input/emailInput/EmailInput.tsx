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
    <div
      className={`flex items-center justify-between w-full whitespace-nowrap ${
        isDisabled ? 'opacity-50 pointer-events-none' : ''
      }`}
    >
      <h1 className={`min-w-52 medium-bold text-main-point mr-12`}>{label}</h1>
      <div className='w-full border-b-1 border-b-main-point flex items-center'>
        <input
          type={'email'}
          value={value}
          onChange={onChange}
          className='appearance-none bg-inherit focus:outline-none focus:ring-0  placeholder:text-gray-medium-text-2 medium-regular pb-8 px-4 pt-4'
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default EmailInput;
