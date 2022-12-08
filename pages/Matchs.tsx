import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
/*Componets*/
import Header from "../components/header";
import AllMatchs from "../components/AllMatchs";
import Divider from "@mui/material/Divider";

export default () => {
  return (
    <div className="test" unselectable="on">
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", maxWidth: 700, m: 2 }}>
        <Header />
        <Divider />
        <AllMatchs />
      </Box>
    </Container>
    </div>
  );
};
