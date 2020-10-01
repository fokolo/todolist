import { AppBar, BottomNavigation, BottomNavigationAction, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListAltIcon from '@material-ui/icons/ListAlt';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';

interface Props {
}
const useStyles = makeStyles(() => ({
    bottomAppBar: {
        top: 'auto',
        bottom: 0,
    },
}));


export const BottomAppNav: React.FC<Props> = () => {
    const [currentLocation, setCurrentLocation] = useState(0)
    const classes = useStyles();

    return (
        <Container >
            <AppBar className={classes.bottomAppBar} position="fixed">
                <BottomNavigation
                    value={currentLocation}
                    onChange={(event, newValue) => {
                        console.log(newValue);
                        setCurrentLocation(newValue);
                    }}
                    showLabels>
                    <BottomNavigationAction label="Todos" icon={<ListAltIcon />} />
                    <BottomNavigationAction label="Store" icon={<StoreIcon />} />
                    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                </BottomNavigation>
            </AppBar>
            <BottomNavigation className={classes.bottomAppBar}/>
        </Container>
    );
}