import Link from "next/link";
import Head from "next/head";
import { useStyles } from "../util/styles";
import { items } from "../util/items";
import Header from "../components/Header";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MUILink from "@material-ui/core/Link";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Item({ currentItem, nextItem }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);

  if (!currentItem) {
    return null;
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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

      <main style={{ marginTop: 20 }}>
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
              main {
                margin-top: 20px;
              }
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
              // variant="p"
              align="center"
              color="textSecondary"
              paragraph
            >
              {currentItem.description}
            </Typography>
          </Container>
          <Container maxWidth="lg" style={{ marginBottom: 20 }}>
            {needToKnow && !!needToKnow.length && (
              <Typography
                component="h5"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                Need to know (before learning {currentItem.name}):{" "}
                {needToKnow.map((i, index) => {
                  const link = `${process.env.BACKEND_URL}/${i.name}`;
                  return (
                    <Link href={link} as={link} key={link}>
                      <MUILink href={link}>
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
            {currentItem.parts && (
              <div className={classes.root}>
                {currentItem.parts.map((i, index) => (
                  <Accordion
                    key={i.title}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${i.title}bh-content`}
                      id={`${i.title}bh-header`}
                    >
                      <Typography className={classes.heading}>
                        {i.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div style={{ width: "100%" }}>
                        {/* <Typography
                          component="h5"
                          variant="h5"
                          align="left"
                          color="textPrimary"
                          gutterBottom
                        >
                          {i.title}
                        </Typography> */}
                        <Typography
                          style={{ maxWidth: 300 }}
                          // variant="p"
                          align="left"
                          color="textSecondary"
                          paragraph
                        >
                          {i.description}
                        </Typography>
                        {i.image && (
                          <img
                            alt={i.title}
                            src={`${process.env.BACKEND_URL}/${i.image}`}
                            className="img"
                          />
                        )}
                        {expanded === index && i.embed && (
                          <div
                            style={{ width: "100%" }}
                            dangerouslySetInnerHTML={{ __html: i.embed }}
                          />
                        )}
                        <Typography
                          style={{ maxWidth: 300 }}
                          // variant="p"
                          align="left"
                          color="textSecondary"
                          paragraph
                        >
                          {i.bottomText}
                        </Typography>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            )}
          </Container>
          <Container
            maxWidth="md"
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <Link href="/" as={process.env.BACKEND_URL + "/"}>
              <a>Go Back Home</a>
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
  let currentItem =
    !!item &&
    items.find((i) => i.name && i.name.toLowerCase() === item.toLowerCase());

  let nextItem =
    !!currentItem &&
    !!currentItem.next &&
    items.find(
      (i) => i.name && i.name.toLowerCase() === currentItem.next.toLowerCase()
    );
  currentItem = currentItem || null;
  nextItem = nextItem || null;
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
