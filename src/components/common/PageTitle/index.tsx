import { $PageTitle } from '@/components/common/PageTitle/PageTitle.styled';

type PageTitleProps = {
  children: React.ReactNode;
};

export default function PageTitle({ children, ...rest }: PageTitleProps) {
  return <$PageTitle {...rest}>{children}</$PageTitle>;
}
