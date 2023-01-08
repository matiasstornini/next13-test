import React from "react";

import Button from "@mui/material/Button";

function button(props: any) {
  return (
    <Button variant="outlined" draggable={false} href={props.Valor}>
      Abrir
    </Button>
  );
}
export default button;
