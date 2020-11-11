import { IonContent, IonPage, IonToast } from "@ionic/react";
import React, { useState } from "react";
import { Toolbar } from "../common/Toolbar";
import { TodoList } from "../todo/TodoList";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
  setTotalCoins: SetTotalCoins;
  coins: number;
}

export const TodoTab: React.FC<Props> = ({
  getFirebaseConnection,
  setTotalCoins,
  coins,
}) => {
  const firebaseConnection = getFirebaseConnection();
  const [toastOpen, setToastOpen] = useState(false);

  const completedTask = () => {
    setToastOpen(true);
  };

  return (
    <IonPage>
      <Toolbar coins={coins} getFirebaseConnection={getFirebaseConnection} />

      <IonContent>
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
    </IonPage>
  );
};
