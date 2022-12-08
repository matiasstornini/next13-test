import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import GetMatchs from "../components/GetMatchs";
import Cards from "../components/card/Cards";
import Typography from "@mui/material/Typography";

export default () => {
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    // API to fetch some dummy data
    fetch(
      "https://redcardfut2.netlify.app/Datos.json"
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      });
  }, []); // Dependency-array

  return (
    <Container maxWidth="sm">
      {!data
        ? "Cargando..."
        : data.map((item, index) => {
            return (
              <div key={index}>

                <GetMatchs {...item} />
              </div>
            );
          })}
    </Container>
  );
};
