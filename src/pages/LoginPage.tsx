import { Grid, Button } from "@material-ui/core";
import { cfaSignIn } from "capacitor-firebase-auth";
import React from "react";

interface Props {}
// TODO: fix this
export const LoginPage: React.FC<Props> = () => {
  const loginLogic = () => {
    cfaSignIn("google.com").subscribe(() => {
      console.log("Logged In");
    });
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      item
      xs={12}
      style={{ marginTop: 8 * 5 }}
    >
      <Button
        style={{ textTransform: "none" }}
        onClick={loginLogic}
        variant="outlined"
        startIcon={
          <img
            alt=""
            src="/google.svg"
            style={{ height: 24, width: 24, paddingRight: 8 }}
          />
        }
      >
        Sign in with Google
      </Button>
    </Grid>
  );
};
