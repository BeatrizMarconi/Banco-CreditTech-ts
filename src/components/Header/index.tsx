import * as S from "./style";
import Logo from "../../assets/images/logo4.jpeg";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const visibility = false;

  const GoToLogin = () => navigate(`login`);

  const GoToSignUp = () => navigate(`SignUp`);

  return (
    <S.ContainerMain>
      <S.LogoHeader src={Logo} />
      {visibility ? (
        <S.Container>
          <S.ButtonLogin onClick={GoToLogin}>ENTRAR</S.ButtonLogin>
          <S.ButtonSignUp onClick={GoToSignUp}>Cadastrar</S.ButtonSignUp>
        </S.Container>
      ) : (
        <>
          <S.ContainerLinks>
            <S.Link href="/dashboard">Home</S.Link>
            <S.Link href="/extract">Extrato</S.Link>
            <S.Link href="/operations">Transferência</S.Link>
          </S.ContainerLinks>
          <S.Container>
            <S.Balance>
              <h5>Saldo</h5>
              <h6>R$ 1.000,00</h6>
            </S.Balance>
            <S.Customer>
              <h4>Olá, Fulano</h4>
              <FaAngleDown />
            </S.Customer>
          </S.Container>
        </>
      )}
    </S.ContainerMain>
  );
};

export default Header;
