import styled from "styled-components";

export const ContainerMain = styled.div`
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid #2c2c2c14;
`;

export const LogoHeader = styled.img`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: end;
  align-items: center;
  height: 100%;
  padding-right: 20px;
`;

export const ButtonLogin = styled.button`
  width: 100px;
  height: 40px;
  background: #d49b6e;
  cursor: pointer;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  color: #fff;
`;

export const ButtonSignUp = styled(ButtonLogin)`
  background: none;
  color: #d49b6e;
  margin-left: 10px;
`;

export const Balance = styled.div`
  padding-right: 30px;
  border-right: 1px solid #2c2c2c14;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h6 {
    margin-top: 5px;
    font-size: 18px;
  }
`;

export const Customer = styled.div`
  padding-left: 30px;
  display: flex;
  h4 {
    margin-right: 10px;
  }
`;

export const ContainerLinks = styled.div`
  width: 50%;
  padding: 0 20px;
`;

export const Link = styled.a`
  margin-right: 18px;
`;
