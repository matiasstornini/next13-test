import React from "react";
import Typography from "@mui/material/Typography";
import Botones from "./button/AllButton";
import { getFormattedTime } from "./utils";

const GetMatchs = (props: any) => {
  const { todos } = props;

  return (
    <div>
      <Typography>{todos.Competicion}:</Typography>{" "}
      <Typography variant="h6" gutterBottom>
      {getFormattedTime(todos)} {todos.Partido}
      </Typography>
      <Botones {...todos} />
      <p></p>
    </div>
  );
};
export default GetMatchs;
