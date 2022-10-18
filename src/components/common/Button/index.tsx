import { $ButtonProp, $Button } from '@/components/common/Button/Button.styled';

interface ButtonProps extends $ButtonProp {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

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
