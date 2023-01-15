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


export default () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await fetchApi(); // aquí se obtienen los datos del JSON
    setTodos(response); // aquí se asignan los datos al estado del componente
  };

  useEffect(() => {
    fetchData();
  }, []); // se ejecutará cada vez que se renderiza el componente

  return (
    <div className="test" unselectable="on">
      <Container maxWidth="sm">
        <Header />
        <Box sx={{ width: "100%", maxWidth: 700, m: 2 }}>
          <Destacado todos={todos}/>
          <Divider />
          <AllMatchs todos={todos}/>
        </Box>
      </Container>
      <Script
        id="Script 1"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-00NP669MKP"
      />

      <Script strategy="lazyOnload" id="Script 2">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-00NP669MKP', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
    </div>
  );
};
