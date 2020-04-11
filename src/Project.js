import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
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
    padding: "8px 0"
  },
  technologies: {
    display: "flex",
    flexWrap: "wrap",
    margin: "8px 0"
  },
  tech: {
    display: "inline-block",
    border: "1px solid black",
    padding: "0 4px",
    borderRadius: 5,
    margin: 4
  }
});

function Project({ project, img, body, tech, site, code }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardMedia
        component="img"
        alt={project}
        height="350"
        image={img}
        title={project}
      />
      <CardContent>
        <CardContent className={classes.title}>
          <Typography variant="h5" component="h2">
            {project}
          </Typography>
          <CardActions className={classes.titleButtons}>
            <Button size="small" color="secondary" variant="contained" target="_blank" href={site}>
              <VisibilityIcon className={classes.icon} /> Site
            </Button>
            <Button size="small" color="primary" variant="contained" target="_blank" href={code}>
              <CodeIcon className={classes.icon} /> Code
            </Button>
          </CardActions>
        </CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {body}
        </Typography>
        <Divider />
        <div className={classes.technologies}>
          {tech.map((tech, i) => (
            <Typography key={i} className={classes.tech}>
              {tech}
            </Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Project;
