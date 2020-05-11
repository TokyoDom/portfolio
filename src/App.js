import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./App.css";
import Navbar from "./Navbar";
import Project from "./Project";
import randomizer from './images/randomizer.jpg';
import memory from './images/memory.png';
import draft from './images/draft.png';
import pokefind from './images/pokefind.jpg';

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
    randomizer: `A Pokemon team randomizer using competitive Smogon sets and fun custom sets!
    Filter based on your favorite generation and tier and export the team to Pokemon Showdown.`,
    memory: `A simple flashcard application where users can create and save sets to practice with. 
    I've been personally using it to study Japanese!`,
    pokefind: `Web application to find information on your favorite Pokemon. 
    Get detailed information on Pokemon, Moves, Abilities, and Types! The application will take a bit to load since it's hosted on Heroku.`,
    draftmons: `Pokemon meets League of Legends... 
    A website where players can create a room and invite their friends to draft teams against eachother!`
  };
};

const techText = () => {
  return {
    randomizer: ["HTML/CSS", "ReactJS", "ExpressJS", "MongoDB"],
    pokefind: ["HTML/CSS", "ReactJS", "ExpressJS", "MySQL"],
    draftmons: ["HTML/CSS", "ReactJS", "Firebase"],
    memory: ["HTML/CSS", "ReactJS", "Firebase"]
  };
};

const codeText = () => {
  return {
    randomizer: {
      code: "https://github.com/TokyoDom/pokerandomizer",
      site: "https://pokerandomizer.xyz/"
    },
    memory: {
      code: "https://github.com/TokyoDom/memorycards",
      site: "https://tokyodom.github.io/memorycards/#/"
    },
    draftmons: {
      code: "https://github.com/TokyoDom/draftmons",
      site: "http://draftmons.com/"
    },
    pokefind: {
      code: "https://github.com/TokyoDom/pokefind",
      site: "https://thawing-bastion-55951.herokuapp.com/"
    }
  };
};

function App() {
  const classes = useStyles();
  const body = bodyText();
  const tech = techText();
  const code = codeText();

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
        <Project
            project="Pokemon Randomizer"
            img={randomizer}
            body={body.randomizer}
            tech={tech.randomizer}
            site={code.randomizer.site}
            code={code.randomizer.code}
          />
          <Project
            project="Memory Cards"
            img={memory}
            body={body.memory}
            tech={tech.memory}
            site={code.memory.site}
            code={code.memory.code}
          />
          <Project
            project="PokeFind"
            img={pokefind}
            body={body.pokefind}
            tech={tech.pokefind}
            site={code.pokefind.site}
            code={code.pokefind.code}
          />
          <Project
            project="Draftmons"
            img={draft}
            body={body.draftmons}
            tech={tech.draftmons}
            site={code.draftmons.site}
            code={code.draftmons.code}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
