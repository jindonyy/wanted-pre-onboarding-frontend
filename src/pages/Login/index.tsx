import Layout from '@/pages/Layout';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import { $Contents, $InputWrap, $ButtonWrapper } from '@/pages/Login/Login.styled';

export default function Login() {
  return (
    <Layout>
      <$Contents>
        <form>
          <$InputWrap>
            <TextInput label="이메일" type="email" name="email" />
          </$InputWrap>
          <$InputWrap>
            <TextInput label="비밀번호" name="password" type="password" />
          </$InputWrap>
          <$ButtonWrapper>
            <Button type="submit">로그인</Button>
            <Button type="submit">회원가입</Button>
          </$ButtonWrapper>
        </form>
      </$Contents>
    </Layout>
  );
}
