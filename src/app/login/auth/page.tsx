import Image from 'next/image';
import logo from '@public/icons/logo.png';
import AuthImgUpload from '@/components/organisms/login/AuthImgUpload';
import AuthModal from '@/components/organisms/modal/auth/AuthModal';

const page = () => {
  return (
    <div>
      <AuthModal />
      {/* {authStatus && authStatus !== "successed" && (
        <AuthModal authStatus={authStatus} studentInfo={studentInfo} />
      )} */}
      <div className='w-360 min-h-640 flex flex-col items-center justify-center text-center text-main-point'>
        <Image className='w-204 h-96 object-contain mb-32' src={logo} alt='logoImg' />
        <h1 className='large-bold mb-20'>
          '명지편지'는 명지대학교 학생들을 위한 <br /> 롤링페이퍼 서비스예요.
        </h1>
        <h2 className='medium-regular pb-47 border-b-1 border-gray-dark-text-1 w-264 mb-47'>
          서비스 이용을 위해서는 <br />
          학생카드 인증이 필요해요.
        </h2>
        <h2 className='medium-regular mb-32'>
          1. MSI 학생정보시스템 접속 <br />
          2. 학적/장학 → 학생카드 <br />
          3. 학생카드 캡처 후 업로드 <br />
        </h2>
        <AuthImgUpload />
      </div>
    </div>
  );
};

export default page;
