import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useStyles } from "../../util/styles";
import { items } from "../../util/items";
import Header from "../../components/Header";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MUILink from "@material-ui/core/Link";

export default function Item() {
  const router = useRouter();
  const classes = useStyles();
  const { item } = router.query;
  const currentItem = items.find(
    (i) => i.name.toLowerCase() === item.toLowerCase()
  );
  if (!currentItem) {
    return <div>404</div>;
  }
  const needToKnow =
    currentItem.prerequisits &&
    !!currentItem.prerequisits.length &&
    items.filter(
      (i) => currentItem.prerequisits.indexOf(i.name.toLowerCase()) !== -1
    );
  return (
    <div>
      <Head>
        <title> Getting started with {currentItem.name} </title>
      </Head>
      <Header />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <img
                alt={currentItem.name}
                src={currentItem.img}
                className="img"
              />
              {currentItem.name}
            </Typography>
            <style jsx>{`
              .img {
                display: inline-block;
                width: 50px;
              }
            `}</style>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {currentItem.description}
            </Typography>
          </Container>
          <Container maxWidth="md">
            {needToKnow && !!needToKnow.length && (
              <Typography
                component="h5"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                Need to know (before learning {currentItem.name}):{" "}
                {needToKnow.map((i, index) => {
                  const link = `${process.env.BACKEND_URL}/item/${i.name}`;
                  return (
                    <Link href={link} as={link} key={i.name}>
                      <MUILink color="inherit" href={link}>
                        {index === 0 ? " " : ", "}
                        {i.name}
                      </MUILink>
                    </Link>
                  );
                })}
              </Typography>
            )}
            <Typography
              component="h3"
              variant="h4"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Basics:
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Mid-way (intermediate):
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Advanced:
            </Typography>
          </Container>
        </div>
        <Container>
          Back{" "}
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Home</a>
          </Link>
        </Container>
      </main>
    </div>
  );
}
