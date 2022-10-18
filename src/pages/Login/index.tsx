import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { $Contents, $InputWrap, $ButtonWrap } from '@/pages/Login/Login.styled';
import Layout from '@/pages/Layout';
import PageTitle from '@/components/common/PageTitle';
import Button from '@/components/common/Button';
import Link from '@/components/common/Link';
import TextInput from '@/components/common/TextInput';
import useInputValue from '@/hooks/useInputValue';
import { UserAuth, fetchSignInAuth } from '@/api/auth';
import ROUTE_URL from '@/router/routeURL';
import { debounce } from '@/utils/eventDelay';
import { INPUT_DELAY } from '@/constants/time';

const initialValue = {
  email: '',
  password: ''
};

export default function Login() {
  const { inputValue, updateInputValue } = useInputValue(initialValue);
  const navigate = useNavigate();

  const onSignIn = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetchSignInAuth(inputValue as UserAuth);

    if (response.statusCode === 401) alert('아이디 및 비밀번호를 다시 확인해주세요.');
    if (response.access_token) {
      localStorage.setItem('accessToken', JSON.stringify(response.access_token));
      navigate(ROUTE_URL.TODO);
    }
  };

  return (
    <Layout>
      <$Contents>
        <PageTitle>로그인</PageTitle>
        <form name="userInfo" onSubmit={onSignIn}>
          <$InputWrap>
            <TextInput
              label="이메일"
              type="email"
              name="email"
              required
              defaultValue={inputValue.email}
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
          </$InputWrap>
          <$InputWrap>
            <TextInput
              label="비밀번호"
              name="password"
              type="password"
              required
              defaultValue={inputValue.password}
              onChange={debounce(updateInputValue, INPUT_DELAY)}
            />
          </$InputWrap>
          <$ButtonWrap>
            <Button type="submit" disabled={!(inputValue.email && inputValue.password)}>
              로그인
            </Button>
            <Link to="SIGNUP">회원가입하러 가기</Link>
          </$ButtonWrap>
        </form>
      </$Contents>
    </Layout>
  );
}
