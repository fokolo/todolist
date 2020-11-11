import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { Toolbar } from "../common/Toolbar";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
  coins: number;
}

export const SettingsTab: React.FC<Props> = ({
  getFirebaseConnection,
  coins,
}) => {
  return (
    <IonPage>
      <Toolbar coins={coins} getFirebaseConnection={getFirebaseConnection} />

      <IonContent>
        <h1>Setting 1</h1>
        <h1>Setting 2</h1>
      </IonContent>
    </IonPage>
  );
};
