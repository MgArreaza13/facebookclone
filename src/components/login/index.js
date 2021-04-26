import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../stateProvider";
import { LoginContainer, LoginLogo } from "./styles";
function Login() {
  const [state, dispatch] = useStateValue();

  const singIn = () => {
    // signIn
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <LoginContainer>
      <LoginLogo>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
          alt=""
        />

        <img
          src="http://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png"
          alt=""
        />
      </LoginLogo>

      <Button type="submit" onClick={singIn}>
        Sign In
      </Button>
    </LoginContainer>
  );
}

export default Login;
