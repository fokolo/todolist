import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { StoreItem } from "./StoreItem";
import MovieIcon from "@material-ui/icons/Movie";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

interface Props {}

const useStyles = makeStyles(() => ({
  root: {},
}));

export const Store: React.FC<Props> = () => {
  const classes = useStyles();

  const onItemPurchase: OnItemPurchase = (itemID) => {
    alert(itemID);
  };

  return (
    <Grid container className={classes.root}>
      <StoreItem
        itemID="1"
        itemCaption="Watch & Chill"
        itemDescription="30 min watch time"
        itemPrice={2}
        itemIcon={<MovieIcon />}
        onItemPurchase={onItemPurchase}
      />
      <StoreItem
        itemID="2"
        itemCaption="Wolt order"
        itemDescription="Eat some nasty delicios take out food"
        itemPrice={2}
        itemIcon={<FastfoodIcon />}
        onItemPurchase={onItemPurchase}
      />
      <StoreItem
        itemID="3"
        itemCaption="Solitaire"
        itemDescription="30 min of Solitaire games"
        itemPrice={2}
        itemIcon={<SportsEsportsIcon />}
        onItemPurchase={onItemPurchase}
      />
      <StoreItem
        itemID="4"
        itemCaption="Video games"
        itemDescription="1 hour of Solitaire games"
        itemPrice={2}
        itemIcon={<SportsEsportsIcon />}
        onItemPurchase={onItemPurchase}
      />
    </Grid>
  );
};
