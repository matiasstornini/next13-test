import React from "react";
import Typography from "@mui/material/Typography";
import Botones from "./button/AllButton";

const GetMatchs = (props: any) => {
  var dta = [];
  var date = new Date(props.dt * 1000);
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime =
    hours.substr(-2) + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
  dta.push(formattedTime);
  return (
    <div>
      <Typography>{props.Competicion}:</Typography>{" "}
      <Typography variant="h6" gutterBottom>
        {dta} {props.Partido}
      </Typography>
      <Botones {...props} />
      <p></p>
    </div>
  );
};
export default GetMatchs;
