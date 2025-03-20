import React,{ useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
/*Componets*/
import Header from "../components/header";
import AllMatchs from "../components/AllMatchs";
import Destacado from "../components/card/Cards";
import Divider from "@mui/material/Divider";
import Script from "next/script";
import { fetchApi } from "../components/api";
import Typography from "@mui/material/Typography";

// separa este componente en dos, el fetch por un lado, y el resto por otro

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetchApi()
      .then((url) => fetch(url))
      .then((res) => res.text())
      .then((data) => {
        const json = JSON.parse(data.substr(47).slice(0, -2));
        setData(json.table.rows);
        setLoading(false);
      });
  };

  
  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData(); 
    }, 300000); 

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <div className="test" unselectable="on">
      <Container maxWidth="sm">
        <Header />
        <Box sx={{ width: "100%", maxWidth: 700, m: 2 }}>
        {/*<Typography>Un clic en un anuncio antes, durante o después del partido nos ayuda mucho. ¡Gracias por tu apoyo!</Typography>{" "}*/}
          {/* <Destacado todos={data}/>
          <p></p> */}
          <Divider />
          <p></p>
{/*           <Typography>Este calendario no está actualizado, actualice la app TecladoAPP. Si no la tiene, contactese por Instagram: @innovadesignalp</Typography> */}
          <AllMatchs todos={data}/>
        </Box>
      </Container>

    </div>
  );
};
