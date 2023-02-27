import * as S from "./style";

const Login = (): JSX.Element => {
  return (
    <S.ContainerMain>
      <S.ContainerForm>
        <S.TextTitleForm>Faça seu login</S.TextTitleForm>
        <form>
          <S.Label>E-mail</S.Label>
          <S.Input />
          <S.Label>Senha</S.Label>
          <S.Input />
          <S.ButtonLogin>Continuar</S.ButtonLogin>
        </form>
        <S.Link href="/">Esqueci minha senha</S.Link>
        <S.Link href="/signUp">Ainda não sou cliente </S.Link>
      </S.ContainerForm>
    </S.ContainerMain>
  );
};

export default Login;
