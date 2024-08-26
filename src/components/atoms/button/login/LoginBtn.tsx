import React from 'react';

interface loginBtnProps {
  loginHandler: () => void;
}

const LoginBtn = ({ loginHandler }: loginBtnProps) => {
  return (
    <div
      onClick={loginHandler}
      className='w-272 h-44 bg-main-point rounded-8 flex items-center justify-center text-white medium-medium'
    >
      로그인
    </div>
  );
};

export default LoginBtn;
