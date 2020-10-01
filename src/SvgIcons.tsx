import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as CoinsIconSvg } from './res/coins-line.svg';

export const CoinsIcon: React.FC = () => {

    return (
        <SvgIcon >
            <CoinsIconSvg />
        </SvgIcon>
    );
}

