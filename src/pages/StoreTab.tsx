import {
  IonPage,
  IonTab,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";

interface Props {}

export const StoreTab: React.FC<Props> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Store</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Hello</h1>
      </IonContent>
    </IonPage>
  );
};
