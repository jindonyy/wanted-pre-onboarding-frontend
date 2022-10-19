import { $TextInputWrap, $TextInput, $Label } from '@/components/TextInput/TextInput.styled';

type TextInputProps = {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
  title?: string;
  onChange?: (args: any) => void;
  defaultValue?: string;
  className?: string;
};

export default function TextInput({
  label,
  type = 'text',
  placeholder = '',
  className,
  ...rest
}: TextInputProps) {
  return (
    <$TextInputWrap className={className}>
      {label && <$Label>{label}</$Label>}
      <$TextInput type={type} placeholder={placeholder} {...rest} />
    </$TextInputWrap>
  );
}
