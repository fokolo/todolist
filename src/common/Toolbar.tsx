import {
  IonChip,
  IonHeader,
  IonItem,
  IonLabel,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { CoinsIcon } from "../common/SvgIcons";
import styled from "styled-components";
import { UserAvatar } from "../common/UserAvatar";

const StyledIonChip = styled(IonChip)`
  padding-inline-start: 3px;
  --background: #e33371;
  --color: #fff;
`;

const StyledIonLabel = styled(IonLabel)`
  margin-left: 8px;
`;

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
  coins: number;
}

export const Toolbar: React.FC<Props> = ({ getFirebaseConnection, coins }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonItem slot="start" color="primary" lines="none">
          <UserAvatar getFirebaseConnection={getFirebaseConnection} />
        </IonItem>

        <StyledIonChip slot="end">
          <CoinsIcon />
          <StyledIonLabel>{coins}</StyledIonLabel>
        </StyledIonChip>
      </IonToolbar>
    </IonHeader>
  );
};
