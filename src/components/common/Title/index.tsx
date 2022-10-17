import { $Title } from '@/components/common/Title/Title.styled';

type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children, ...rest }: TitleProps) {
  return <$Title {...rest}>{children}</$Title>;
}
