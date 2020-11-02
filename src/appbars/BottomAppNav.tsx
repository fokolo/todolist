import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import {
  listCircleOutline,
  storefrontOutline,
  settingsOutline,
} from "ionicons/icons";

interface Props {
  currentLocation: number;
  setCurrentLocation: (currentLocation: number) => void;
}
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  bottomAppBar: {
    top: "auto",
    bottom: 0,
  },
}));

export const BottomAppNav: React.FC<Props> = ({
  currentLocation,
  setCurrentLocation,
}) => {
  const classes = useStyles();

  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="Todos">
        <IonIcon icon={listCircleOutline} />
        <IonLabel>Todos</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="Store">
        <IonIcon icon={storefrontOutline} />
        <IonLabel>Store</IonLabel>
      </IonTabButton>

      <IonTabButton tab="Settings">
        <IonIcon icon={settingsOutline} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};
