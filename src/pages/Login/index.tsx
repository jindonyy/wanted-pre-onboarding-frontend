import { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { $Contents, $Form, $InputWrap, $ButtonWrapper } from '@/pages/Login/Login.styled';
import Layout from '@/pages/Layout';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import useInputValue from '@/hooks/useInputValue';
import { UserAuth, fetchSignInAuth } from '@/api/auth';
import ROUTE_URL from '@/router/routeURL';
import { debounce } from '@/utils/eventDelay';

const INPUT_DELAY = 300;

export default function Login() {
  const { inputValue, setInputValue } = useInputValue();
  const navigate = useNavigate();

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    });
  };

  const onSignIn = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetchSignInAuth(inputValue as UserAuth);
    if (response.statusCode === 401) alert('아이디 및 비밀번호를 다시 확인해주세요.');
    if (response.access_token) {
      localStorage.setItem('accessToken', JSON.stringify(response.access_token));
      navigate(ROUTE_URL.TODO_LIST);
    }
  };

  return (
    <Layout>
      <$Contents>
        <Title>로그인</Title>
        <$Form name="userInfo" onSubmit={onSignIn}>
          <$InputWrap>
            <TextInput
              label="이메일"
              type="email"
              name="email"
              required
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
          </$InputWrap>
          <$InputWrap>
            <TextInput
              label="비밀번호"
              name="password"
              type="password"
              required
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
          </$InputWrap>
          <$ButtonWrapper>
            <Button type="submit" disabled={!inputValue.email && !inputValue.password}>
              로그인
            </Button>
          </$ButtonWrapper>
        </$Form>
      </$Contents>
    </Layout>
  );
}
