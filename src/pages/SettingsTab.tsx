import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React from "react";

interface Props {}

export const SettingsTab: React.FC<Props> = () => {
  return (
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h1>Setting 1</h1>
      <h1>Setting 2</h1>
    </IonContent>
  );
};
