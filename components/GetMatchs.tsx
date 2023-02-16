import React from "react";
import Typography from "@mui/material/Typography";
import Botones from "./button/AllButton";
import { getFormattedTime } from "./utils";

const GetMatchs = (props: any) => {
  const { todos } = props;

  return (
    <div>
      <Typography>{props.c[2].v}:</Typography>{" "}
      <Typography variant="h6" gutterBottom>
      {props.c[1].v}
      </Typography>
      <Botones {...props} />
      <p></p>
    </div>
  );
};
export default GetMatchs;
