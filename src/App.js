import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./App.css";
import Navbar from "./Navbar";
import Project from "./Project";
import entries from "./projects/entries";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4F5C88"
    },
    secondary: {
      main: "#536A96"
    }
  }
});

const useStyles = makeStyles(theme => ({
  about: {
    margin: "24px auto",
    textAlign: "center",
    wordBreak: "keep-all",
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5vh"
  },
  projects: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "75vh",
    marginBottom: "10vh"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <div className={classes.intro}>
          <h1>Always Learning.</h1>
          <h1>Always Creating.</h1>
          <h4 className={classes.about}>
            I'm Dominick, a Developer based in Tokyo, Japan. Check out my
            projects and feel free to contact me! よろしくお願いします！
          </h4>
          <Button
            variant="contained"
            color="secondary"
            href="#projects"
            endIcon={<ArrowDropDownIcon />}
          >
            View Projects
          </Button>
        </div>
        <div id="projects" className={classes.projects}>
          {entries.map((entry, i) => 
          <Project 
            key={i}
            project={entry.project}
            img={entry.img}
            body={entry.body}
            tech={entry.tech}
            site={entry.site}
            code={entry.code}
          />)}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
