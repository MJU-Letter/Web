import EmailForm from '@/components/templates/auth/signUp/EmailForm';
import PasswordForm from '@/components/templates/auth/signUp/PasswordForm';

const page = () => {
  return (
    <>
      <h1 className='large-bold text-main-point text-center mb-48'>회원가입</h1>
      <EmailForm />
      <div className='mt-28' />
      <PasswordForm />
      <h3 className='flex items-center justify-center most-small-regular text-gray-medium-text-2 text-center whitespace-nowrap mt-8'>
        시작할 경우, 명지편지의 &nbsp;
        <span className='underline'>개인정보 처리방침</span>에 동의하게 됩니다.
      </h3>
    </>
  );
};

export default page;
