import { useEffect, useState, ChangeEvent } from 'react';
import Layout from '@/pages/Layout';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import useInputValue from '@/hooks/useInputValue';
import { $Contents, $InputWrap, $ButtonWrapper } from '@/pages/Login/Login.styled';
import InputMessage from '@/components/common/InputMessage';
import { debounce } from '@/utils/eventDelay';

const INPUT_DELAY = 300;

const INPUT_ERROR = {
  email: {
    condition: /^[\w-\.]+@/g,
    message: '이메일을 다시 확인해주세요.'
  },
  password: {
    condition: { min: 8 },
    message: '8자리 이상 입력해주세요.'
  }
};

const initialError = {
  email: true,
  password: true
};

type LoginInputNames = keyof typeof initialError;

type Error = {
  [key in LoginInputNames]: boolean;
};

export default function Login() {
  const { inputValue, setInputValue, isRightSize, hasRequiredCharacters } = useInputValue();
  const [inputError, setInputError] = useState<Error>(initialError);

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    });
  };

  const checkUserInputError = () => {
    const newError: Error = { ...inputError };

    if (inputValue.email)
      newError.email = !hasRequiredCharacters('email', INPUT_ERROR.email.condition);
    if (inputValue.password)
      newError.password = !isRightSize('password', INPUT_ERROR.password.condition.min);

    setInputError(newError);
  };

  useEffect(checkUserInputError, [inputValue]);

  const hasInputError = () => {
    const inputNames = Object.keys(inputError) as LoginInputNames[];
    const errorName = inputNames.find((name: LoginInputNames) => inputError[name]);

    return !!errorName;
  };

  return (
    <Layout>
      <$Contents>
        <form>
          <$InputWrap>
            <TextInput
              label="이메일"
              type="email"
              name="email"
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
            {inputValue.email && inputError.email && (
              <InputMessage>{INPUT_ERROR.email.message}</InputMessage>
            )}
          </$InputWrap>
          <$InputWrap>
            <TextInput
              label="비밀번호"
              name="password"
              type="password"
              minLength={INPUT_ERROR.password.condition.min}
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
            {inputValue.password && inputError.password && (
              <InputMessage>{INPUT_ERROR.password.message}</InputMessage>
            )}
          </$InputWrap>
          <$ButtonWrapper>
            <Button type="submit" disabled={hasInputError()}>
              로그인
            </Button>
            <Button type="submit" disabled={hasInputError()}>
              회원가입
            </Button>
          </$ButtonWrapper>
        </form>
      </$Contents>
    </Layout>
  );
}
