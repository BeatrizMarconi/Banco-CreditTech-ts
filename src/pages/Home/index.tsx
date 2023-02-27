import Header from "../../components/Header";
import * as S from "./style";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.ContainerMain>
        <S.ImageMain>
          <S.TextHome>
            <h1>CreditTech, o banco do futuro.</h1>
            <h2>
              Nossa missão é promover a melhoria da qualidade de vida, atuando
              em microfinanças como agente de inclusão, desenvolvimento e
              transformação social trazendo para todos uma tecnologia inovadora.
            </h2>
          </S.TextHome>
        </S.ImageMain>
      </S.ContainerMain>
    </>
  );
};

export default Home;
