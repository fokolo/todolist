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
import { CoinsIcon } from "../common/SvgIcons";
import styled from "styled-components";
import { UserAvatar } from "../common/UserAvatar";

interface Props {
  getFirebaseConnection: GetFirebaseConnection;
}

const StyledIonChip = styled(IonChip)`
  padding-inline-start: 3px;
  --background: #e33371;
  --color: #fff;
`;

const StyledIonLabel = styled(IonLabel)`
  margin-left: 8px;
`;

export const TabsContainer: React.FC<Props> = ({ getFirebaseConnection }) => {
  const [coins, setTotalCoins] = useState(0);
  const taskLeft = "ERROR";

  return (
    <IonPage>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar color="primary">
            <IonItem slot="start" color="primary" lines="none">
              <UserAvatar getFirebaseConnection={getFirebaseConnection} />
            </IonItem>

            <StyledIonChip slot="end">
              <CoinsIcon />
              <StyledIonLabel>{coins}</StyledIonLabel>
            </StyledIonChip>
          </IonToolbar>
        </IonHeader>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tabscontainer/:tab(todo)" exact={true}>
              <TodoTab
                getFirebaseConnection={getFirebaseConnection}
                setTotalCoins={setTotalCoins}
              />
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
