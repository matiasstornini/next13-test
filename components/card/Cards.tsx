import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getFormattedTime } from "../utils";


import Botones from "../button/AllButton";

const Cards = (props: any) => {
  const { todos } = props;
  const todo = todos[0];

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Evento destacado:
      </Typography>
      {todo && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={todo.Partido}
            height="140"
            image={todo.Image}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {todo.Competicion}:
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            {getFormattedTime(todo)} {todo.Partido}
            </Typography>
          </CardContent>
          <CardActions>
            <Botones {...todo} />
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Cards;
