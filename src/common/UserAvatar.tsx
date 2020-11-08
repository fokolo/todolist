import React, { useState } from "react";
import { Plugins } from "@capacitor/core";
import { cfaSignOut } from "capacitor-firebase-auth";
import { IonAlert, IonAvatar } from "@ionic/react";
import styled from "styled-components";

const { Modals } = Plugins;

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
}

const StyledIonAvatar = styled(IonAvatar)`
  margin: 5px;
`;

export const UserAvatar: React.FC<Props> = ({ getFirebaseConnection }) => {
  const [showAlert, setShowAlert] = useState(false);
  const user = getFirebaseConnection().user;

  const photoURL = user.photoURL ? user.photoURL : "";

  const AuthSignOut = () => {
    cfaSignOut().subscribe(() => {
      console.log("Logged Out");
    });
  };

  return (
    <>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Sign Out"}
        message={"Are you sure you want to sign out?"}
        buttons={[
          {
            text: "Dismiss",
            role: "dismiss",
            cssClass: "secondary",
          },
          {
            text: "Sign Out",
            role: "sign out",
            handler: () => AuthSignOut(),
          },
        ]}
      />
      <StyledIonAvatar onClick={() => setShowAlert(true)}>
        <img src={photoURL} />
      </StyledIonAvatar>
    </>
  );
};
