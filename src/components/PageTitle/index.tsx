import { $PageTitle } from '@/components/PageTitle/PageTitle.styled';

type PageTitleProps = {
  children: React.ReactNode;
};

export default function PageTitle({ children, ...rest }: PageTitleProps) {
  return <$PageTitle {...rest}>{children}</$PageTitle>;
}
