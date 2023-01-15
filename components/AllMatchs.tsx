import React from "react";
import Container from "@mui/material/Container";
import GetMatchs from "../components/GetMatchs";
import Cards from "../components/card/Cards";
import Typography from "@mui/material/Typography";

export default (props: any) => {
  const { todos } = props;


  return (
    <Container maxWidth="sm">
      {!todos
        ? "Cargando..."
        : todos.map((todo:any , index:any) => {
            return (
              <div key={index}>

                <GetMatchs {...todo} />
              </div>
            );
          })}
    </Container>
  );
};
