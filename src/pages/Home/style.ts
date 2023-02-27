import styled from "styled-components";
import mainImage from "../../assets/images/image-main.jpg";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ImageMain = styled.div`
  background: url(${mainImage});
  background-size: cover;
`;

export const TextHome = styled.div`
  color: #fff;
  margin: 100px 0 0 20px;
  width: 50%;

  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 25px;
  }
`;
