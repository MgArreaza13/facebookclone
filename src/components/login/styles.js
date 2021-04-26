import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  > button {
    width: 300px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-weight: 800;

    &:hover {
      background-color: white;
      color: #2e81f4;
    }
  }
`;

export const LoginLogo = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    object-fit: contain;
    height: 150px;
  }
`;
