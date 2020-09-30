import React from 'react';
import { Backdrop, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { CheckCircle } from '@material-ui/icons';

interface Props {
    backdropOpen: boolean;
    setBackdropOpen: (state: boolean) => void;
}

const useStyles = makeStyles(() => ({
    backdrop: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.10)'
    },
    doneIcon: {
        color: green[500],
        fontSize: 100
    }
}));


export const CompletedBackdrop: React.FC<Props> = ({ backdropOpen, setBackdropOpen }) => {
    const classes = useStyles();

    return (<>
        <Backdrop open={backdropOpen} className={classes.backdrop} onClick={() => { setBackdropOpen(false) }}>
            <Zoom in={backdropOpen}>
                <CheckCircle className={classes.doneIcon} />
            </Zoom>
        </Backdrop>
    </>);
}