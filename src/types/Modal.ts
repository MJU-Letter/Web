import { HTMLAttributes } from "react";

export interface ModalViewProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isOpen: boolean;
  noBtn?: {
    info: string;
    handler: () => void;
  };
  yesBtn?: {
    info: string;
    handler: () => void;
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
