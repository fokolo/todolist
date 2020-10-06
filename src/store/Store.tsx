import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

interface Props {}
const useStyles = makeStyles(() => ({}));

export const Store: React.FC<Props> = ({}) => {
  const classes = useStyles();

  return <div>Store</div>;
};
