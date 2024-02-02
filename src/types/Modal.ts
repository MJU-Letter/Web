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
