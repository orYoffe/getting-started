import Link from "next/link";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import CodeIcon from "@material-ui/icons/Code";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../util/styles";
import MUILink from "@material-ui/core/Link";

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Simple guides to get you started with technology right away. The
            rest you can just search with google."
        ></meta>
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CodeIcon className={classes.icon} style={{}} />
          <Typography variant="h6" color="inherit" noWrap>
            <Link href="/" as={process.env.BACKEND_URL + "/"}>
              <MUILink color="inherit" href={process.env.BACKEND_URL + "/"}>
                Getting Started
              </MUILink>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
