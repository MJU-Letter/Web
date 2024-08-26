'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import check from '@public/icons/check.png';
import Image from 'next/image';
import { authImgUploadState, authImgUploadType } from '@/recoil/auth';

const AuthImgUpload = () => {
  const [recoilAuthStatus, setRecoilAuthStatus] = useRecoilState<authImgUploadType>(authImgUploadState);
  const [authStatus, setAuthStatus] = useState(recoilAuthStatus);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    setAuthStatus(recoilAuthStatus);
    console.log('client ', authStatus);
    console.log('recoil', recoilAuthStatus);
  }, [recoilAuthStatus]);

  // 이미지 선택 함수
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const isImage = selectedFile.type.startsWith('image/');
      if (isImage) {
        setFile(selectedFile);
        setRecoilAuthStatus({
          status: 'after',
          imageUrl: URL.createObjectURL(selectedFile),
          error: null,
          studentName: null,
          studentInfo: null,
        });
      } else {
        setFile(null);
        setRecoilAuthStatus({
          status: 'before',
          imageUrl: null,
          error: '이미지 파일이 아닙니다.',
          studentName: null,
          studentInfo: null,
        });
      }
    }
  };

  // 이미지 서버 전송 함수
  const handleUpload = () => {
    if (recoilAuthStatus.status === 'after' && file) {
      setRecoilAuthStatus({
        status: 'proceeding',
        imageUrl: recoilAuthStatus.imageUrl,
        error: null,
        studentName: null,
        studentInfo: null,
      });
    }
    // TODO: 실제 업로드 로직 구현
    setTimeout(() => {
      setRecoilAuthStatus({
        status: 'checking',
        imageUrl: recoilAuthStatus.imageUrl,
        error: null,
        studentName: null,
        studentInfo: null,
      });
    }, 5000);
  };

  return (
    <>
      <div className='flex items-center justify-center mb-32'>
        <label htmlFor='upload-button' className='gangwon-xl-under border-b-1 border-gray-medium-text-2'>
          파일 불러오기
        </label>
        {!(authStatus.status === 'before' || authStatus.status === 'failed') && (
          <div className='transition-all'>
            <Image className='ml-4 w-18 h-18' src={check} alt='check' />
          </div>
        )}
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id='upload-button'
        />
      </div>
      <button
        className={`w-125 h-48 rounded-28 bg-white flex items-center justify-center medium-bold `}
        onClick={handleUpload}
        disabled={authStatus.status === 'before' || authStatus.status === 'failed'}
      >
        업로드
      </button>
    </>
  );
};

export default AuthImgUpload;
