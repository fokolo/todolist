import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Avatar, IconButton } from "@material-ui/core";
import { Plugins } from "@capacitor/core";

const { Modals } = Plugins;

interface Props {
  user: firebase.User | undefined;
  auth: firebase.auth.Auth;
  signInWithGoogle: () => void;
}

export const Authentication: React.FC<Props> = ({
  user,
  auth,
  signInWithGoogle,
}) => {
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
    Modals.confirm({
      title: "Sign Out",
      message: "Sign out",
    }).then((shouldSignout) => {
      if (shouldSignout.value) {
        auth.signOut();
      }
    });
  };

  return (
    <IconButton
      edge="start"
      size="small"
      onClick={user ? AuthSignOut : signInWithGoogle}
    >
      {user ? SignOut() : SignIn()}
    </IconButton>
  );
};
