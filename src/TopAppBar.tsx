import React from 'react';
import { AppBar, Chip, Toolbar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CoinsIcon } from './SvgIcons';

interface Props {
    coins: number,
}

const useStyles = makeStyles((theme: Theme) => ({
    topAppBar: {
    },
    coinsChip: {
    },
    spacer: {
        flexGrow: 1,
    },

}));

export const TopAppBar: React.FC<Props> = ({ coins, children }) => {
    const classes = useStyles();

    return (<>
        <AppBar className={classes.topAppBar} position="fixed">
            <Toolbar>
                {children}
                <div className={classes.spacer} />
                <Chip icon={<CoinsIcon />} aria-label="$" label={coins} className={classes.coinsChip} />
            </Toolbar>
        </AppBar>
        <Toolbar />
    </>);
}