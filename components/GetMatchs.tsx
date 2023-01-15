import React from "react";
import Typography from "@mui/material/Typography";
import Botones from "./button/AllButton";
import { getFormattedTime } from "./utils";

const GetMatchs = (props: any) => {
  const { todos } = props;

  return (
    <div>
      <Typography>{props.Competicion}:</Typography>{" "}
      <Typography variant="h6" gutterBottom>
      {getFormattedTime(props)} {props.Partido}
      </Typography>
      <Botones {...props} />
      <p></p>
    </div>
  );
};
export default GetMatchs;
