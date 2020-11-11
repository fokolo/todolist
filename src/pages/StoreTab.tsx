import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { Toolbar } from "../common/Toolbar";
import { Store } from "../store/Store";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
  setTotalCoins: SetTotalCoins;
  coins: number;
}

export const StoreTab: React.FC<Props> = ({
  getFirebaseConnection,
  setTotalCoins,
  coins,
}) => {
  return (
    <IonPage>
      <Toolbar coins={coins} getFirebaseConnection={getFirebaseConnection} />

      <IonContent>
        <h1>Hello</h1>
      </IonContent>
    </IonPage>
  );
};
