import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./App.css";
import Navbar from './Navbar';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Navbar />
        <div className="intro">
        <h1>Always Learning.</h1>
        <h1>Always Creating.</h1>
        <h4>
          I'm Dominick, a Developer based in Tokyo, Japan. Check out my projects
          and feel free to contact me! よろしくお願いします！
        </h4>
        <Button variant="contained" color="secondary">
          View Projects
          <ArrowDropDownIcon />
        </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
