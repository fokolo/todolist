import React from 'react';
import { AppBar, Chip, Toolbar, Typography } from '@material-ui/core';
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
    title: {
        flexGrow: 1,
    },

}));

export const TopAppBar: React.FC<Props> = ({ coins }) => {
    const classes = useStyles();

    return (<>
        <AppBar className={classes.topAppBar} position="fixed">
            <Toolbar>
                <Typography className={classes.title} variant="h6">Gamify your Life</Typography>
                <Chip icon={<CoinsIcon />} aria-label="$" label={coins} className={classes.coinsChip} />
            </Toolbar>
        </AppBar>
        <Toolbar />
    </>);
}