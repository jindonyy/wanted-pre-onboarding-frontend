import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { $Contents, $Form, $InputWrap, $ButtonWrapper } from '@/pages/SignUp/SignUp.styled';
import Layout from '@/pages/Layout';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import InputMessage from '@/components/common/InputMessage';
import useInputValue from '@/hooks/useInputValue';
import { debounce } from '@/utils/eventDelay';
import { UserAuth, fetchSignUpAuth } from '@/api/auth';
import ROUTE_URL from '@/router/routeURL';

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

export default function SignUp() {
  const { inputValue, setInputValue, isRightSize, hasRequiredCharacters } = useInputValue();
  const [inputError, setInputError] = useState<Error>(initialError);
  const navigate = useNavigate();

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

  const onSignUp = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetchSignUpAuth(inputValue as UserAuth);
    if (response.statusCode === 400) alert(response.message);
    if (response.access_token) {
      localStorage.setItem('accessToken', JSON.stringify(response.access_token));
      navigate(ROUTE_URL.TODO_LIST);
    }
  };

  return (
    <Layout>
      <$Contents>
        <Title>회원가입</Title>
        <$Form name="userInfo" onSubmit={onSignUp}>
          <$InputWrap>
            <TextInput
              label="이메일"
              type="email"
              name="email"
              required
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
              required
              minLength={INPUT_ERROR.password.condition.min}
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
            {inputValue.password && inputError.password && (
              <InputMessage>{INPUT_ERROR.password.message}</InputMessage>
            )}
          </$InputWrap>
          <$ButtonWrapper>
            <Button type="submit" disabled={hasInputError()}>
              회원가입
            </Button>
            <Button type="submit" onClick={() => navigate(ROUTE_URL.LOGIN)}>
              로그인하러 가기
            </Button>
          </$ButtonWrapper>
        </$Form>
      </$Contents>
    </Layout>
  );
}