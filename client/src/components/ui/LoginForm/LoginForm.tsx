// component is not used
// will be deleted after creation of refactored version
// AuthForm.tsx is a new version of this component

import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import TextField from "@mui/material/TextField";

import { Context } from "App";

import { ButtonComponent } from "components/ui";

const LoginFormComponent: React.FC = () => {
  // todo: move later
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  if (!store.isAuth) {
    return (
      <div
        style={{
          padding: "30px 0 0 30px",
          margin: "0 auto",
          width: "400px"
        }}>
        <h1 style={{ marginBottom: "10px" }}>Authorize, please</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column"
          }}>
          <TextField
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <ButtonComponent
              color="primary"
              size="medium"
              variant="contained"
              styles={{ width: "56%" }}
              onClick={() => store.login(email, password)}>
              Login
            </ButtonComponent>
            <ButtonComponent
              color="primary"
              size="medium"
              variant="outlined"
              styles={{ width: "40%" }}
              onClick={() => store.registration(email, password)}>
              Register
            </ButtonComponent>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "30px 0 0 30px",
        margin: "0 auto",
        width: "400px"
      }}>
      <h1 style={{ marginBottom: "10px" }}>Authorized: {store.user.email}</h1>
      <h3>
        {store.user.isActivated
          ? "Account is confirmed"
          : "Account is not confirmed. Visit your email"}
      </h3>
      {!store.user.isActivated && (
        <ButtonComponent
          color="primary"
          size="medium"
          variant="text"
          onClick={() => store.resendActivationLink(store.user.email)}>
          Resend verification email
        </ButtonComponent>
      )}
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}>
        <ButtonComponent
          color="primary"
          size="medium"
          variant="contained"
          fullWidth
          onClick={() => store.logout()}>
          Logout
        </ButtonComponent>
      </form>
    </div>
  );
};

export const LoginForm = observer(LoginFormComponent);
