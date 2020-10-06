import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ListAltIcon from "@material-ui/icons/ListAlt";
import StoreIcon from "@material-ui/icons/Store";
import SettingsIcon from "@material-ui/icons/Settings";

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
    <Container className={`${classes.bottomAppBar} ${classes.offset}`}>
      <AppBar className={classes.bottomAppBar} position="fixed">
        <BottomNavigation
          value={currentLocation}
          onChange={(event, newValue) => {
            console.log(newValue);
            setCurrentLocation(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Todos" icon={<ListAltIcon />} />
          <BottomNavigationAction label="Store" icon={<StoreIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </AppBar>
    </Container>
  );
};
