import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../util/styles";
import { items } from "../util/items";
import Header from "../components/Header";
import GitHub from "@material-ui/icons/GitHub";
import {
  absoluteUrl,
  defaultDescription,
  jsonLd,
  siteName,
  siteUrl,
} from "../util/seo";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
//         <MUILink color="inherit" href="https://material-ui.com/">
//           Your Website
//         </MUILink>
//       </Link>

//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const githubLink = "https://github.com/orYoffe/getting-started/issues";
export default function Album() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{siteName} | Learn Web Development</title>
        <meta name="description" content={defaultDescription} />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${siteName} | Learn Web Development`} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={absoluteUrl("/icon.png")} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${siteName} | Learn Web Development`} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={absoluteUrl("/icon.png")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: `${siteUrl}/`,
            description: defaultDescription,
          })}
        />
      </Head>
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.heroTitle}
            >
              Getting Started
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              className={classes.heroLead}
            >
              Getting Started with software can be simple. Here you will find
              simple, straightforward guides to learn the basics and get
              started with different programming tools from HTML, CSS,
              JavaScript and more...
              <br />
              Choose a guide, follow the examples, and build something of your
              own.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item align="center">
                  <Typography
                    // variant="p"
                    align="center"
                    color="textSecondary"
                    paragraph
                  >
                    Have an idea or a missing guide to suggest?
                  </Typography>
                  <a href={githubLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="default" startIcon={<GitHub />}>
                        {/* <MUILink
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
                      > */}
                        Contact us on GitHub
                        {/* </MUILink> */}
                    </Button>
                  </a>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} variant="nav" component="nav">
              {items.map((card) => {
                const link = `/${card.name}`;
                return (
                  <Grid item key={card.name} xs={12} sm={6} md={4}>
                    <Link href={link} aria-label={`Read the ${card.name} guide`} style={{ color: "inherit", textDecoration: "none" }}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={card.img}
                            title={card.name}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.name}
                            </Typography>
                            <Typography>{card.subTitle}</Typography>
                          </CardContent>
                          <CardContent>
                            <Typography color="primary">Read guide &rarr;</Typography>
                          </CardContent>
                        </Card>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </>
  );
}
// export default function Home() {
//   return (
//     <div>
//       Hello World.{' '}
//       <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
//         <a>About</a>
//       </Link>
//     </div>
//   )
// }
