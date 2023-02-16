import React from "react";
import Container from "@mui/material/Container";
import GetMatchs from "../components/GetMatchs";
import Typography from "@mui/material/Typography";

export default (props: any) => {
  const { todos } = props;
  return (
    <Container maxWidth="sm">
      {todos === null ? (
        <Typography>Cargando...</Typography>
      ) : (
        todos.map((row:any, index:any) => (
              <div key={index}>
                <GetMatchs {...row} />
              </div>
        ))
        )}
    </Container>
  );
};
