import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { StoreItem } from "./StoreItem";
import MovieIcon from "@material-ui/icons/Movie";

interface Props {}
const useStyles = makeStyles(() => ({}));

export const Store: React.FC<Props> = ({}) => {
  const classes = useStyles();

  const onItemPurchase: OnItemPurchase = (itemID) => {
    alert(itemID);
  };

  return (
    <Grid component={Box} p={1} container>
      <StoreItem
        itemID="1"
        itemCaption="Watch & Chill"
        itemDescription="30 min watch time"
        itemPrice={2}
        itemIcon={<MovieIcon />}
        onItemPurchase={onItemPurchase}
      />
    </Grid>
  );
};
