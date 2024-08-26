'use client';
import React, { useState } from 'react';
import pwEye from '@public/icons/pwEye.png';
import Image from 'next/image';

type Props = {
  label: string;
  placeholder: string;
  isDisabled: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEyeShown: boolean;
};

const PasswordInput = ({ label, placeholder, isDisabled, value, onChange, isEyeShown }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={`flex items-center justify-between w-full whitespace-nowrap ${
        isDisabled ? 'opacity-50 pointer-events-none' : ''
      }`}
    >
      <h1 className={`min-w-52 medium-bold text-main-point mr-12`}>{label}</h1>
      <div className='w-full border-b-1 border-b-main-point flex items-center'>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className='appearance-none bg-inherit focus:outline-none focus:ring-0 placeholder:text-gray-medium-text-2 medium-regular pb-8 px-4 pt-4'
          placeholder={placeholder}
          disabled={isDisabled}
        />
        {isEyeShown && (
          <Image
            src={pwEye}
            alt='Toggle password visibility'
            width={24}
            height={24}
            className='object-contain cursor-pointer'
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
