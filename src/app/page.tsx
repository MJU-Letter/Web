import Image from 'next/image';
import logo from '@public/icons/logo.png';
import Link from 'next/link';
import { NAVIGATION } from '@/constants/navigation';
import LoginForm from '@/components/templates/login/LoginForm';

const page = () => {
  return (
    <div className='min-h-640 flex flex-col items-center justify-center px-44'>
      <Image className='w-228 h-108 object-contain' src={logo} alt='logo' />
      <h1 className='mt-20 mb-116 gangwon-xl text-main-point'>명지인들과 롤링페이퍼로 마음을 나눠요</h1>
      <LoginForm />
      <Link className='ml-auto' href={NAVIGATION.auth.default_path}>
        <button>
          <h2 className='small-medium text-main-point'>회원가입하기</h2>
        </button>
      </Link>
      <h3 className='most-small-regular mt-12 ml-auto text-11 text-gray-medium-text-2 text-right'>
        *이메일 및 비밀번호 분실 <br /> mjuletter@gmail.com으로 문의
      </h3>
    </div>
  );
};

export default page;
