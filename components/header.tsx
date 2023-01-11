import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function Header() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>PirloTV nextjs</title>
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
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item>
            {" "}
            <Typography variant="h3" gutterBottom>
              PirloTV
            </Typography>
            <div>
              <Typography variant="h6" component="h6">
                ¡SEGUINOS!
              </Typography>
              <Button
                color="primary"
                target="_blank"
                draggable={false}
                href="https://www.facebook.com/innovadesignalp"
              >
                <FacebookIcon />
              </Button>
              {""}
              <Button
                color="secondary"
                target="_blank"
                draggable={false}
                href="https://www.instagram.com/innovadesignalp/"
              >
                <InstagramIcon />
              </Button>
            </div>
          </Item>
          <p></p>
          <div>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => router.reload()}
              >
                <RefreshIcon />
              </Button>
            </Stack>
          </div>
          <p></p>
        </Grid>
      </Grid>
    </>
  );
}
export default Header;
