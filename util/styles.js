import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      flexBasis: "85%",
      fontSize: theme.typography.pxToRem(14),
    },
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 0, 4),
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  heroTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(42),
      lineHeight: 1.1,
    },
  },
  heroLead: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1.45,
    },
  },
  guideTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(42),
      lineHeight: 1.1,
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
