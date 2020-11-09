import React, { useState } from "react";
import { cfaSignOut } from "capacitor-firebase-auth";
import { IonAlert, IonAvatar } from "@ionic/react";
import styled from "styled-components";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
}

const StyledIonAvatar = styled(IonAvatar)`
  margin: 5px;
`;

const DEFAULT_AVATAR = "/avatar.svg";

export const UserAvatar: React.FC<Props> = ({ getFirebaseConnection }) => {
  const [showAlert, setShowAlert] = useState(false);
  const user = getFirebaseConnection().user;

  const photoURL = user.photoURL ? user.photoURL : DEFAULT_AVATAR;

  const AuthSignOut = () => {
    cfaSignOut().subscribe(() => {
      console.log("Logged Out");
    });
  };

  const loadAlternateImage = (e: any) => {
    if (e.target.src === photoURL) {
      e.target.src = DEFAULT_AVATAR;
    }
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
        <img
          src={photoURL}
          referrerPolicy="no-referrer"
          alt=""
          onError={loadAlternateImage}
        ></img>
      </StyledIonAvatar>
    </>
  );
};
