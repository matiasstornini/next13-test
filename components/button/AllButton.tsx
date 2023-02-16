import React from "react";

import Button from "@mui/material/Button";

import Btn from "./button";

function AllButton(props: any) {
  return (
    <div>
      {props.c[4].v !== 0 ? (
        <div>
          {props.c[5].v !== "null" ? <Btn Valor={props.c[5].v} /> : ""}{" "}
          {props.c[6].v !== "null" ? <Btn Valor={props.c[6].v} /> : ""}{" "}
          {props.c[7].v !== "null" ? <Btn Valor={props.c[7].v} /> : ""}{" "}
          <p></p>
        </div>
      ) : (
        ""
      )}
      <div>
        <Button variant="contained" color="primary" draggable={false} href={props.Estadisticas}>
          Estadisticas
        </Button>
      </div>
    </div>
  );
}
export default AllButton;
