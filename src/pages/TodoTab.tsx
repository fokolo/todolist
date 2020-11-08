import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { TodoList } from "../todo/TodoList";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
  setTotalCoins: SetTotalCoins;
}

export const TodoTab: React.FC<Props> = ({
  getFirebaseConnection,
  setTotalCoins,
}) => {
  const firebaseConnection = getFirebaseConnection();
  const [toastOpen, setToastOpen] = useState(false);

  const completedTask = () => {
    setToastOpen(true);
  };

  return (
    <IonContent fullscreen>
      <TodoList
        user={firebaseConnection.user}
        firestore={firebaseConnection.firestore}
        setTotalCoins={setTotalCoins}
        completedTask={completedTask}
      />
      <IonToast
        isOpen={toastOpen}
        onDidDismiss={() => setToastOpen(false)}
        message="Good Job!"
        duration={200}
      />
    </IonContent>
  );
};
