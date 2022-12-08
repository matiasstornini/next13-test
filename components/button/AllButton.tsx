import React from "react";

import Button from "@mui/material/Button";

import Btn from "./button";

function AllButton(props: any) {
  return (
    <div>
      {props.Switch !== 0 ? (
        <div>
          {props.EnlaceMatchs.valor1 !== "" ? <Btn Valor={props.EnlaceMatchs.valor1} /> : ""}{" "}
          {props.EnlaceMatchs.valor2 !== "" ? <Btn Valor={props.EnlaceMatchs.valor2} /> : ""}{" "}
          {props.EnlaceMatchs.valor3 !== "" ? <Btn Valor={props.EnlaceMatchs.valor3} /> : ""}{" "}
          {props.EnlaceMatchs.valor4 !== "" ? <Btn Valor={props.EnlaceMatchs.valor4} /> : ""}{" "}
          {props.EnlaceMatchs.valor5 !== "" ? <Btn Valor={props.EnlaceMatchs.valor5} /> : ""}
          {props.EnlaceMatchs.valor6 !== "" ? <Btn Valor={props.EnlaceMatchs.valor6} /> : ""}
          <p></p>
        </div>
      ) : (
        ""
      )}
      <div>
        <Button variant="contained" color="primary" href={props.Estadisticas}>
          Estadisticas
        </Button>
      </div>
    </div>
  );
}
export default AllButton;
