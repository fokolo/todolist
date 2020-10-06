import React from "react";
import { SvgIcon } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff6f00",
    },
  },
});

export const CoinsIcon: React.FC = () => {
  return (
    <SvgIcon>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm1 1v1h2v2H9a.5.5 0 0 0-.09.992L9 13h2a2.5 2.5 0 1 1 0 5v1H9v-1H7v-2h4a.5.5 0 0 0 .09-.992L11 15H9a2.5 2.5 0 1 1 0-5V9h2zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z" />
    </SvgIcon>
  );
};

interface CoinXProps {
  coin: number;
  checked?: boolean;
}

export const CoinX: React.FC<CoinXProps> = ({ coin, checked = false }) => {
  return (
    <SvgIcon style={{ fontSize: 32 }} color="disabled">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="null"
        vector-effect="non-scaling-stroke"
      >
        <path fill="none" d="M-1-1h802v602H-1z" />
        <g>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <ellipse
            stroke={
              checked ? theme.palette.primary.dark : theme.palette.primary.main
            }
            ry="7.0151"
            rx="7.01689"
            cy="12"
            cx="12"
            stroke-width="2"
            fill={
              checked ? theme.palette.primary.main : theme.palette.primary.light
            }
          />
          <text
            color={checked ? "#fff" : "#000"}
            font-weight="bold"
            font-family="roboto, sans-serif"
            font-size="11"
            y="15.5"
            x="8.9"
            stroke-width="0"
          >
            {coin}
          </text>
        </g>
      </svg>
    </SvgIcon>
  );
};
