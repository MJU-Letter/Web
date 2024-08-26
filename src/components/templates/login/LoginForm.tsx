'use client';

import LoginBtn from '@/components/atoms/button/login/LoginBtn';
import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import PasswordInput from '@/components/atoms/input/passwordInput/PasswordInput';
import { useState, ChangeEvent } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <div className='w-272 flex flex-col items-start justify-center'>
      <EmailInput
        label={'이메일'}
        placeholder={'이메일을 입력하세요'}
        isDisabled={false}
        value={email}
        onChange={handleEmailChange}
      />
      <div className='mb-12' />
      <PasswordInput
        label={'비밀번호'}
        placeholder={'비밀번호를 입력해 주세요'}
        isDisabled={false}
        value={password}
        onChange={handlePasswordChange}
        isEyeShown={false}
      />
      <div className='mb-28' />
      <LoginBtn loginHandler={handleLogin} />
    </div>
  );
};

export default LoginForm;
