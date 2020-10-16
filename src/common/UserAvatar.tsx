import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Avatar, IconButton } from "@material-ui/core";
import { Plugins } from "@capacitor/core";
import { cfaSignOut } from "capacitor-firebase-auth";

const { Modals } = Plugins;

interface Props {
  user: firebase.User | undefined;
  auth: firebase.auth.Auth;
}

export const Authentication: React.FC<Props> = ({ user, auth }) => {
  const SignIn = () => {
    return <Avatar />;
  };

  const SignOut = () => {
    if (user) {
      const displayName = user.displayName ? user.displayName : "???";
      const photoURL = user.photoURL ? user.photoURL : "";

      return <Avatar alt={displayName} src={photoURL} />;
    }
  };

  const AuthSignOut = () => {
    // TODO: change to alert dialog by material design below
    Modals.confirm({
      title: "Sign Out",
      message: "Sign out",
    }).then((shouldSignout) => {
      console.log(`Should signout: ${shouldSignout}`);
      if (shouldSignout.value) {
        cfaSignOut().subscribe(() => {
          console.log("Logged Out");
        });
      }
    });
  };

  const AlertSignIn = () => {
    // TODO: change to alert dialog by material design below - dialog
    alert("Sign in");
  };
  return (
    <IconButton
      edge="start"
      size="small"
      onClick={user ? AuthSignOut : AlertSignIn}
    >
      {user ? SignOut() : SignIn()}
    </IconButton>
  );
};
