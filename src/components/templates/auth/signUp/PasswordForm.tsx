'use client';

import PasswordInput from '@/components/atoms/input/passwordInput/PasswordInput';
import { NAVIGATION } from '@/constants/navigation';
import { isAuthFormDisabled } from '@/recoil/auth';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';

const PasswordForm = () => {
  const [isAuthFormDisabledState, setIsAuthFormDisabledState] = useRecoilState(isAuthFormDisabled);
  return (
    <>
      <PasswordInput
        label={'비밀번호'}
        placeholder={'비밀번호를 입력해 주세요'}
        isDisabled={isAuthFormDisabledState}
        value={''}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        isEyeShown={true}
      />
      <ul className='text-main-point most-small-regular ml-auto w-232 mt-4 mb-20'>
        <li>• 8자 이상</li>
        <li>• 영어 대/소문자 포함</li>
        <li>• 숫자</li>
      </ul>
      <PasswordInput
        label={'재확인'}
        placeholder={'비밀번호를 다시 입력해 주세요'}
        isDisabled={isAuthFormDisabledState}
        value={''}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        isEyeShown={true}
      />
      <Link href={NAVIGATION.auth.mjucard_path}>
        <button className={`w-full h-44 mt-60 rounded-8 bg-main-point ${isAuthFormDisabledState ? 'opacity-50' : ''}`}>
          <h2 className='medium-medium text-white'>다음</h2>
        </button>
      </Link>
    </>
  );
};

export default PasswordForm;
