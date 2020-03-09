import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./App.css";
import Navbar from "./Navbar";
import Project from "./Project";

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

const bodyText = () => {
  return {
    lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut leo
    ligula, tempor nec purus quis, aliquam molestie nulla. Suspendisse
    vitae nisl nec elit faucibus scelerisque in eu nisi.`,
    pokefind: `Web application to find information on your favorite Pokemon. 
    Get detailed information on Pokemon, Moves, Abilities, and Types!`,
    draftmons: `Pokemon meets League of Legends... 
    A website where players can create a room and invite their friends to draft teams against eachother!`
  };
};

const techText = () => {
  return {
    pokefind: ['HTML/CSS', 'ReactJS', 'ExpressJS', 'MySQL'],
    draftmons: ['HTML/CSS', 'ReactJS', 'Firebase'],
    lorem: ['HTML/CSS']
  }
}

function App() {
  const classes = useStyles();
  const body = bodyText();
  const tech = techText();

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
          <Button variant="contained" color="secondary" href="#projects">
            View Projects
            <ArrowDropDownIcon />
          </Button>
        </div>
        <div id="projects" className={classes.projects}>
          <Project
            project="PokeFind"
            img="images/pokefind.jpg"
            body={body.pokefind}
            tech={tech.pokefind}
          />
          <Project
            project="Cyberpunk"
            img="images/cyberpunk.jpg"
            body={body.lorem}
            tech={tech.lorem}
          />
          <Project
            project="Draftmons"
            img="images/draft.png"
            body={body.draftmons}
            tech={tech.draftmons}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
