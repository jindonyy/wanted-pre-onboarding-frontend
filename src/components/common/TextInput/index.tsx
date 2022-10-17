import { $TextInputWrap, $TextInput, $Label } from '@/components/common/TextInput/TextInput.styled';

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
};

export default function TextInput({
  label,
  type = 'text',
  placeholder = '',
  ...rest
}: TextInputProps) {
  return (
    <$TextInputWrap>
      {label && <$Label>{label}</$Label>}
      <$TextInput type={type} placeholder={placeholder} {...rest} />
    </$TextInputWrap>
  );
}
