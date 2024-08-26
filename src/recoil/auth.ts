import { atom } from 'recoil';

export const isAuthFormDisabled = atom({
  key: 'isAuthFormDisabled',
  default: false,
});

// const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

// const { persistAtom } = recoilPersist({
//   key: 'authImgUploadState',
//   storage: localStorage,
// });

export interface authImgUploadType {
  status: 'before' | 'after' | 'proceeding' | 'checking' | 'successed' | 'failed';
  imageUrl: string | null;
  error: string | null;
  studentName: string | null;
  studentInfo: string | null;
}

// 이미지 업로드 상태 atom
export const authImgUploadState = atom<authImgUploadType>({
  key: 'authImgUploadState',
  default: {
    status: 'before',
    imageUrl: null,
    error: null,
    studentName: null,
    studentInfo: null,
  },
  // effects_UNSTABLE: [persistAtom],
});
