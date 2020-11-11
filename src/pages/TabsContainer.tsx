import {
  IonTabs,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonToolbar,
  IonPage,
  IonChip,
  IonItem,
} from "@ionic/react";
import {
  listCircleOutline,
  storefrontOutline,
  settingsOutline,
} from "ionicons/icons";

import { TodoTab } from "./TodoTab";
import { SettingsTab } from "./SettingsTab";
import { StoreTab } from "./StoreTab";
import { Redirect, Route } from "react-router-dom";
import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { useState } from "react";
import { Toolbar } from "../common/Toolbar";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
}

export const TabsContainer: React.FC<Props> = ({ getFirebaseConnection }) => {
  const [coins, setTotalCoins] = useState(0);
  const firestore = getFirebaseConnection().firestore;
  const user = getFirebaseConnection().user;
  const todosCollectionRef = firestore.collection(`/users/${user.uid}/todos`);
  const selfTodosQuery = todosCollectionRef
    .orderBy("completedAt")
    .orderBy("createdAt");
  const [todos, , collectionError] = useCollectionData<Todo>(selfTodosQuery, {
    idField: "id",
  });

  const taskLeft = "ERROR";

  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tabscontainer/:tab(todo)" exact={true}>
              <TodoTab
                getFirebaseConnection={getFirebaseConnection}
                setTotalCoins={setTotalCoins}
                coins={coins}
              />
            </Route>
            <Route path="/tabscontainer/:tab(store)">
              <StoreTab
                getFirebaseConnection={getFirebaseConnection}
                setTotalCoins={setTotalCoins}
                coins={coins}
              />
            </Route>
            <Route path="/tabscontainer/:tab(settings)">
              <SettingsTab
                getFirebaseConnection={getFirebaseConnection}
                coins={coins}
              />
            </Route>
            <Route
              path="/tabscontainer/"
              exact={true}
              render={() => <Redirect to="/tabscontainer/todo" />}
            />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="todo" href="/tabscontainer/todo">
              <IonIcon icon={listCircleOutline} />
              <IonLabel>Todo</IonLabel>
              <IonBadge>{taskLeft}</IonBadge>
            </IonTabButton>
            <IonTabButton tab="store" href="/tabscontainer/store">
              <IonIcon icon={storefrontOutline} />
              <IonLabel>Store</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/tabscontainer/settings">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};
