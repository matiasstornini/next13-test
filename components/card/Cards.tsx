import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Botones from "../button/AllButton";

const Cards = (props: any) => {
  var dta = [];
  var date = new Date(props.dt * 1000);
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime =
    hours.substr(-2) + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
  dta.push(formattedTime);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.liga}:
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {dta} {props.partido}
        </Typography>
      </CardContent>
      <CardActions>
        <Botones {...props} />
      </CardActions>
    </Card>
  );
};
export default Cards;
