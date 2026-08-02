import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHub from "@material-ui/icons/GitHub";
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness7 from "@material-ui/icons/Brightness7";
import { useColorMode } from "../util/theme";

const githubLink = "https://github.com/orYoffe/getting-started/issues";
export default function Header() {
  const icon = `${process.env.BACKEND_URL}/brand-mark.svg`;
  const { mode, toggleColorMode } = useColorMode();

  return (
    <>
      <style jsx>{`
        .img {
          display: inline-block;
          width: 36px;
          height: 36px;
          margin-right: 8px;
          vertical-align: middle;
        }
        .toolbar {
          gap: 12px;
          min-height: 64px;
          padding: 0 24px;
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .githubLink {
          align-items: center;
          display: flex;
          gap: 6px;
        }
        @media (max-width: 600px) {
          .toolbar { min-height: 56px; padding: 0 12px; }
          .img { width: 32px; height: 32px; margin-right: 6px; }
          .githubLabel { display: none; }
          .actions { gap: 4px; }
        }
      `}</style>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={1}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          className="toolbar"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            // variant="p"
            color="inherit"
            // noWrap
            style={{
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              <img alt="Getting Started home" src={icon} className="img" />
              Getting Started
            </Link>
          </Typography>
          <div className="actions">
            <a
              target="_blank"
              rel="noreferrer"
              href={githubLink}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              className="githubLink"
            >
              <GitHub /> <span className="githubLabel">Contact us on GitHub</span>
            </a>
            <IconButton
              color="inherit"
              aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
              onClick={toggleColorMode}
            >
              {mode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
