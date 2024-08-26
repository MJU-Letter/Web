'use client';
import { NAVIGATION } from '@/constants/navigation';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface profileSettingProps {
  name: string;
  major: string;
  studentId: string;
  instagramId?: string;
  profileImg: StaticImageData | string;
  setInstagramId: (instagramId: string) => void;
  email: string;
}

const ProfileSetting = ({
  name,
  major,
  studentId,
  instagramId,
  profileImg,
  setInstagramId,
  email,
}: profileSettingProps) => {
  const handleInstagramId = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) {
      // 입력값의 길이가 10자를 초과하면
      alert('최대 30자까지만 입력 가능합니다.'); // 경고창을 띄웁니다.
    } else {
      setInstagramId(e.target.value);
    }
  };
  return (
    <div className='flex flex-col justify-center items-center whitespace-nowrap'>
      <h1 className='large-bold text-main-point '>프로필 설정</h1>
      <Image
        className='mt-58 mb-40  border-8 border-white shadow-sm w-134 h-134 rounded-[50%] object-contain'
        src={profileImg}
        alt='profileImg'
      />
      <div className='flex flex-col items-start'>
        <div className='mb-8'>
          <span className='medium-bold text-main-point mr-67'>이름</span>
          <span className='medium-medium text-main-point '>{name}</span>
        </div>

        <div className='flex items-start mb-20'>
          <span className='medium-bold text-main-point mr-36'>학과/학번</span>
          <div>
            <span className='medium-medium mb-8 text-main-point'>
              {major} {studentId}
            </span>
            <h4 className=' text-gray-medium-text-2 text-11'>이름과 학과/학번 수정은 불가능해요.</h4>
          </div>
        </div>

        <div className='flex items-start mb-24'>
          <span className='medium-bold text-main-point mr-24'>인스타그램</span>
          <div>
            <input
              onChange={handleInstagramId}
              placeholder='인스타그램 아이디를 입력하세요.'
              value={instagramId}
              className='pl-4 mb-8 bg-transparent focus:outline-none border-b-1 pb-8 w-210 border-main-point  placeholder:text-gray-medium-text-2 medium-medium text-main-point medium-medium'
            />
            <h4 className='text-gray-medium-text-2 text-11'>인스타그램 ID 입력은 자유예요.</h4>
          </div>
        </div>

        <div className='flex'>
          <span className='medium-bold text-main-point mr-54'>이메일</span>
          <div>
            <span className='medium-medium mb-8 text-main-point'>{email}</span>
            <h4 className='text-gray-medium-text-2 text-11'>가입한 이메일로 알림을 수신해요.</h4>
          </div>
        </div>
      </div>

      <Link href={NAVIGATION.social.main_path}>
        <button className='w-248 h-44 rounded-8 flex items-center justify-center bg-main-point text-white medium-medium mt-44'>
          확인
        </button>
      </Link>
    </div>
  );
};

export default ProfileSetting;
