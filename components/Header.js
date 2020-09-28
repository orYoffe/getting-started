import Link from "next/link";
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
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CodeIcon className={classes.icon} />
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
