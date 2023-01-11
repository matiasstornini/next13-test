import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
/*Componets*/
import Header from "../components/header";
import AllMatchs from "../components/AllMatchs";
import Divider from "@mui/material/Divider";
import Script from "next/script";

export default () => {
  return (
    <div className="test" unselectable="on">
      <Container maxWidth="sm">
        <Header />
        <Box sx={{ width: "100%", maxWidth: 700, m: 2 }}>
          <Divider />
          <AllMatchs />
        </Box>
      </Container>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-00NP669MKP"
      />

      <Script strategy="lazyOnload">
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
