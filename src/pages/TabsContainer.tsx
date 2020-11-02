import {
  IonTabs,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
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

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
}

export const TabsContainer: React.FC<Props> = ({ getFirebaseConnection }) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabscontainer/:tab(todo)" exact={true}>
            <TodoTab getFirebaseConnection={getFirebaseConnection} />
          </Route>
          <Route path="/tabscontainer/:tab(store)">
            <StoreTab />
          </Route>
          <Route path="/tabscontainer/:tab(settings)">
            <SettingsTab />
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
            <IonBadge>6</IonBadge>
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
  );
};
