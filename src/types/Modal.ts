export interface modalProps {
  info: string | React.ReactNode;
  noBtn?: {
    info: string;
    handler?: () => void;
  };
  yesBtn?: {
    info: string;
    handler?: () => void;
  };
}

export interface AuthModalProps {
  authStatus: undefined | "proceeding" | "checking" | "failed" | "successed";
  studentInfo?: {
    name: string;
    major: string;
    studentId: string;
  };
}
