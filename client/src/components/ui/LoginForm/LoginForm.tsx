import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import { ButtonComponent } from "components/ui";

export const LoginForm: React.FC = () => {
  // todo: move later
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form
      style={{
        padding: "30px 0 0 30px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "400px"
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
          styles={{ width: "56%" }}>
          Login
        </ButtonComponent>
        <ButtonComponent color="primary" size="medium" variant="outlined" styles={{ width: "40%" }}>
          Register
        </ButtonComponent>
      </div>
    </form>
  );
};
