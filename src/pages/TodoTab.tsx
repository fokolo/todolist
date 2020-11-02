import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React, { useState } from "react";
import { TodoList } from "../todo/TodoList";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
}

export const TodoTab: React.FC<Props> = ({ getFirebaseConnection }) => {
  const firebaseConnection = getFirebaseConnection();
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [coins, setTotalCoins] = useState(0);

  const completedTask = () => {
    setBackdropOpen(true);
    setTimeout(() => {
      setBackdropOpen(false);
    }, 300);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TodoList
          user={firebaseConnection.user}
          firestore={firebaseConnection.firestore}
          setTotalCoins={setTotalCoins}
          completedTask={completedTask}
        />
      </IonContent>
    </IonPage>
  );
};
