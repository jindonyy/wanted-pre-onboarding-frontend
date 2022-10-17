import { $Message } from '@/components/common/InputMessage/InputMessage.styled';

export type InputMessageProps = {
  children: React.ReactNode;
};

function InputMessage({ children }: InputMessageProps) {
  return <$Message>{children}</$Message>;
}

export default InputMessage;
