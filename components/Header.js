import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MUILink from "@material-ui/core/Link";
import GitHub from "@material-ui/icons/GitHub";

const githubLink = "https://github.com/orYoffe/getting-started/issues";
export default function Header() {
  const icon = `${process.env.BACKEND_URL}/icon.png`;

  return (
    <>
      <style jsx>{`
        .img {
          display: inline-block;
          width: 50px;
          margin-right: 10px;
        }
      `}</style>
      <CssBaseline />
      <AppBar
        position="relative"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            variant="p"
            color="inherit"
            // noWrap
            style={{
              color: "#222",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <Link href="/" as={process.env.BACKEND_URL + "/"}>
              <MUILink color="inherit" href={process.env.BACKEND_URL + "/"}>
                <img alt="Getting started icon" src={icon} className="img" />
                Getting Started
              </MUILink>
            </Link>
          </Typography>
          <Typography
            variant="p"
            color="inherit"
            // noWrap
            style={{
              color: "#222",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <Link href={githubLink} target="_blank" as={githubLink}>
              <MUILink
                color="inherit"
                target="_blank"
                href={githubLink}
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <GitHub /> Contact us on Github
              </MUILink>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
