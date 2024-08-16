'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@public/icons/logo.png';
import loginImg from '@public/icons/loginImg.png';
import Link from 'next/link';
import EmailInput from '@/components/atoms/input/emailInput/EmailInput';

const Main = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className='w-360 min-h-640 flex flex-col items-center justify-center'>
      <Image className='w-228 h-108 object-contain' src={logo} alt='logo' />
      <h1 className='mt-20 mb-116 gangwon-xl text-main-point'>명지인들과 롤링페이퍼로 마음을 나눠요</h1>
      <div>
        <EmailInput
          label={'이메일'}
          placeholder={'이메일을 입력해 주세요'}
          isDisabled={false}
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <Link href={'/login/auth'}>
        <button>
          <h2 className='small-medium text-main-point'>회원가입하기</h2>
        </button>
      </Link>
    </div>
  );
};

export default Main;
