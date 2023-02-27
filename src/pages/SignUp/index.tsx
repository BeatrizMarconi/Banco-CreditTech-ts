import * as S from "./style";

const SignUp = (): JSX.Element => {
  return (
    <S.ContainerMain>
      <S.ContainerForm>
        <S.TextTitleForm>Cadastre-se</S.TextTitleForm>
        <form>
          <S.Label>Nome</S.Label>
          <S.Input />
          <S.Label>E-mail</S.Label>
          <S.Input />
          <S.BoxForm>
            <S.Box>
              <S.Label>Data de nasc</S.Label>
              <S.Input />
            </S.Box>
            <S.Box>
              <S.Label>CPF</S.Label>
              <S.Input />
            </S.Box>
          </S.BoxForm>
          <S.Label>Telefone</S.Label>
          <S.Input />
          <S.Label>Senha</S.Label>
          <S.Input />
          <S.ButtonLogin>Cadastrar</S.ButtonLogin>
        </form>
        <S.Link href="/login">Já possui uma conta? Acesse </S.Link>
      </S.ContainerForm>
    </S.ContainerMain>
  );
};

export default SignUp;
