'use client';

import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import { isAuthFormDisabled } from '@/recoil/auth';
import React from 'react';
import { useRecoilState } from 'recoil';

const EmailForm = () => {
  const [isAuthFormDisabledState, setIsAuthFormDisabledState] = useRecoilState(isAuthFormDisabled);
  return (
    <>
      <EmailInput
        label={'이메일'}
        placeholder={'이메일을 입력해 주세요'}
        isDisabled={isAuthFormDisabledState}
        value={''}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className='flex items-center justify-end mt-8'>
        <button
          className={`mr-44 w-85 h-28 flex justify-center items-center border-main-point bg-inherit border-1 rounded-8 small-regular ${
            isAuthFormDisabledState ? 'opacity-50' : ''
          }`}
        >
          인증번호 발송
        </button>
        <div className='flex items-center'>
          <input
            className={`mr-8 border-b-1 border-b-main-point w-56 h-34 appearance-none bg-inherit focus:outline-none focus:ring-0  placeholder:text-gray-medium-text-2 medium-regular pb-8 px-4 pt-4 ${
              isAuthFormDisabledState ? 'opacity-50' : ''
            }`}
            type={'text'}
            placeholder='NNNN'
          />
          <button
            className={`w-39 h-28 rounded-8 bg-main-point text-white small-regular  ${
              isAuthFormDisabledState ? 'opacity-50' : ''
            }`}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
