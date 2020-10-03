import Link from "next/link";
import Head from "next/head";
import { useStyles } from "../util/styles";
import { items } from "../util/items";
import Header from "../components/Header";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MUILink from "@material-ui/core/Link";

export default function Item({ currentItem, nextItem }) {
  const classes = useStyles();
  if (!currentItem) {
    return <div>404 Item not found</div>;
  }

  const needToKnow =
    currentItem.prerequisits &&
    !!currentItem.prerequisits.length &&
    items.filter(
      (i) =>
        !!i.name &&
        currentItem.prerequisits.indexOf(i.name.toLowerCase()) !== -1
    );
  return (
    <>
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
              {currentItem.subTitle}
            </Typography>
            <Typography
              style={{ maxWidth: 300, margin: "0 auto" }}
              variant="p"
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
                    <Link href={link} as={link} key={link}>
                      <MUILink color="inherit" href={link}>
                        {index === 0 ? " " : ", "}
                        {i.name}
                      </MUILink>
                    </Link>
                  );
                })}
              </Typography>
            )}
          </Container>
          <Container maxWidth="lg">
            {currentItem.parts &&
              currentItem.parts.map((i) => (
                <div key={i.title}>
                  <Typography
                    component="h5"
                    variant="h5"
                    align="left"
                    color="textPrimary"
                    gutterBottom
                  >
                    {i.title}
                  </Typography>
                  <Typography
                    style={{ maxWidth: 300 }}
                    variant="p"
                    align="left"
                    color="textSecondary"
                    paragraph
                  >
                    {i.description}
                  </Typography>
                  {i.image && (
                    <img alt={i.title} src={i.image} className="img" />
                  )}
                  {i.embed && (
                    <div
                      style={{ width: "100%" }}
                      dangerouslySetInnerHTML={{ __html: i.embed }}
                    />
                  )}
                  <Typography
                    style={{ maxWidth: 300 }}
                    variant="p"
                    align="left"
                    color="textSecondary"
                    paragraph
                  >
                    {i.bottomText}
                  </Typography>
                  <br />
                  <br />
                  <br />
                </div>
              ))}
          </Container>
          <Container
            maxWidth="md"
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginBottom: 20,
            }}
          >
            <Link href="/" as={process.env.BACKEND_URL + "/"}>
              <a>Back Home</a>
            </Link>
            {nextItem && (
              <Link
                href={process.env.BACKEND_URL + "/" + nextItem.name}
                as={process.env.BACKEND_URL + "/" + nextItem.name}
              >
                <a>Continue to learn {nextItem.name}</a>
              </Link>
            )}
          </Container>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { item } = params;
  const currentItem =
    !!item &&
    items.find((i) => i.name && i.name.toLowerCase() === item.toLowerCase());
  const nextItem =
    !!currentItem &&
    !!currentItem.next &&
    items.find(
      (i) => i.name && i.name.toLowerCase() === currentItem.next.toLowerCase()
    );
  return {
    props: {
      currentItem,
      nextItem,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: items.map((i) => ({ params: { item: i.name } })),
    fallback: false, // See the "fallback" section below
  };
}
