import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
    position: "sticky",
    top: 16
  },
  toolbar: {
    justifyContent: "space-between"
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          <div>
          <Button edge="end" color="inherit" aria-label="menu">
            Contact
          </Button>
          <Button edge="end" color="inherit" aria-label="menu">
            Resume
          </Button>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <LinkedInIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}

export default Navbar;
