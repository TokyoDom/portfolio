import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
    position: "sticky",
    top: 8,
    zIndex: 1
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
          <IconButton edge="start" color="inherit" aria-label="menu" href="#">
            <HomeIcon />
          </IconButton>
          <div>
            <Button
              edge="end"
              color="inherit"
              aria-label="menu"
              target="_blank"
              href="https://drive.google.com/file/d/1Peiq4CVnmEQJlll_NWp1JxMU8-5qpqvK/view?usp=sharing"
            >
              Resume
            </Button>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              target="_blank"
              href="https://github.com/TokyoDom"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              href="mailto:tokyodom1@outlook.com"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              target="_blank"
              href="https://www.linkedin.com/in/tokyodom/"
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
