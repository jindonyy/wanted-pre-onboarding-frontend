import { $Button } from '@/components/common/Button/Button.styled';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <$Button type={type} disabled={disabled} {...rest}>
      {children}
    </$Button>
  );
}
