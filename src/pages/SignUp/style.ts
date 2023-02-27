import styled from "styled-components";

export const ContainerMain = styled.div`
  background-color: #e7ba91;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  width: 23%;
  min-height: 50%;
  padding: 35px 0 35px 0;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    width: 75%;
  }
`;

export const TextTitleForm = styled.div`
  padding: 20px;
  font-size: 16pt;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  height: 40px;
  border: none;
  border-bottom: 1px dotted;
  outline: 0;
  width: 100%;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 12pt;
`;

export const BoxForm = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Box = styled.div`
  width: 50%;
  :last-child {
    margin-left: 7px;
  }
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 52px;
  background: #d49b6e;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  color: #fff;
  margin: 50px 0 30px 0;
`;

export const Link = styled.a`
  margin-top: 15px;
  font-size: 15px;
  color: #c18352;
`;
