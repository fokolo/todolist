import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";

interface Props {}

export const StoreTab: React.FC<Props> = () => {
  return (
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h1>Hello</h1>
    </IonContent>
  );
};
