import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: "75vw",
    marginTop: "10vh"
  },
  title: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 0"
  },
  icon: {
    marginRight: 4
  },
  titleButtons: {
    padding: '8px 0'
  },
  technologies: {
    display: "flex",
    flexWrap: "wrap",
    margin: 8
  },
  tech: {
    display: "inline-block",
    border: "1px solid black",
    padding: "0 4px",
    borderRadius: 5,
    margin: 4
  }
});

function Project(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={props.project}
        height="350"
        image={props.img}
        title={props.project}
      />
      <CardContent>
        <CardContent className={classes.title}>
        <Typography
          variant="h5"
          component="h2"
        >
          {props.project}
        </Typography>
        <CardActions className={classes.titleButtons}>
            <Button size="small" color="secondary" variant="contained">
              <VisibilityIcon className={classes.icon}/> Site
            </Button>
            <Button size="small" color="primary" variant="contained">
              <CodeIcon className={classes.icon}/> Code
            </Button>
          </CardActions>
          </CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.body}
        </Typography>
        <Divider />
        <div className={classes.technologies}>
          {props.tech.map((tech, i) => <Typography key={i} className={classes.tech}>{tech}</Typography>)}
        </div>
      </CardContent>
    </Card>
  );
}

export default Project;
