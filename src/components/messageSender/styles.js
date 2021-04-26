import styled from "styled-components";

export const MessageSenderContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

export const MessageSenderTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;

  > form {
    flex: 1;
    display: flex;
  }

  > form > input {
    outline-width: 0;
    border: none;
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 999px;
    background-color: #eff2f5;
  }

  > form > button {
    display: none;
  }

  > form > .input_post {
    flex: 1;
  }
`;

export const MessageSenderBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MessageSenderOptions = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  color: gray;
  margin: 5px;

  &:hover {
    background-color: #eff2f5;
    border-radius:20px;
  }

  >h3 {
    font-size: medium;
    margin-left: 10px;
  }


`;