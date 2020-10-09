import {
  IconButton,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Collapse,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CoinsIcon } from "../common/SvgIcons";

interface Props {
  itemID: string;
  itemCaption: string;
  itemDescription: string;
  itemPrice: number;
  itemIcon?: React.ReactNode;
  onItemPurchase: OnItemPurchase;
}
const useStyles = makeStyles((theme) => ({
  pos: {
    marginBottom: 12,
  },
  cover: {
    width: 151,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const StoreItem: React.FC<Props> = ({
  itemID,
  itemCaption,
  itemDescription,
  itemPrice,
  itemIcon = undefined,
  onItemPurchase,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised={true}>
      <CardHeader
        avatar={itemIcon}
        title={
          <Typography component="h6" variant="h6">
            {itemCaption}
          </Typography>
        }
      ></CardHeader>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onItemPurchase(itemID)}
          endIcon={<CoinsIcon />}
        >
          {itemPrice}
        </Button>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">
            {itemDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
