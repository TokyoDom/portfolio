import randomizer from '../images/randomizer.jpg';
import memory from '../images/memory.png';
import draft from '../images/draft.png';
import chess from '../images/chess.png';
import codesnippets from '../images/codesnippets.png';
import alienchomp from '../images/alienchomp.png';


const AlienChomp = {
  project: "Alien Chomp",
  img: alienchomp,
  body: `A co-op multiplayer mobile game for Android where players must complete objectives at locations
  in the real world while avoiding an alien that chases them.`,
  tech: ["Unity", "C#"],
  site: "https://play.google.com/store/apps/details?id=com.cc17.alienchomp",
  code: "https://github.com/cc17-alien/alien"
}

const CodeSnippets = {
  project: "Code Snippets",
  img: codesnippets,
  body: `An application where users can look up code blocks on a variety of topics.`,
  tech: ["ReactJS", "ExpressJS", "PostgreSQL"],
  site: "https://code--snippets.herokuapp.com/",
  code: "https://github.com/sethwright/glowing-stripe"
}

const PlayChess = {
  project: "Play Chess",
  img: chess,
  body: `A simple chess application where users can play chess against their friends 
  or random opponents anywhere in the world.`,
  tech: ["ReactJS", "NodeJS", "SocketIO"],
  site: "https://chess-app-prod.herokuapp.com/",
  code: "https://github.com/TokyoDom/Multiplayer-Chess"
}

const PokemonRandomizer = {
  project: "Pokemon Randomizer",
  img: randomizer,
  body: `A Pokemon team randomizer using competitive Smogon sets and fun custom sets!
  Filter based on your favorite generation and tier and export the team to Pokemon Showdown.`,
  tech: ["ReactJS", "ExpressJS", "MongoDB"],
  site: "https://pokerandomizer.xyz/",
  code: "https://github.com/TokyoDom/pokerandomizer"
};

const MemoryCards = {
  project: "Memory Cards",
  img: memory,
  body: `A simple flashcard application where users can create and save sets to practice with. 
  I've been personally using it to study Japanese!`,
  tech: ["ReactJS", "Firebase"],
  site: "https://tokyodom.github.io/memorycards/#/",
  code: "https://github.com/TokyoDom/memorycards"
}

const Draftmons = {
  project: "Draftmons",
  img: draft,
  body: `Pokemon meets League of Legends... 
  A website where players can create a room and invite their friends to draft teams against eachother!`,
  tech: ["HTML/CSS", "ReactJS", "Firebase"],
  site: "http://draftmons.com/",
  code: "https://github.com/TokyoDom/draftmons"
}

const projects = [
  AlienChomp,
  CodeSnippets,
  PlayChess,
  PokemonRandomizer,
  MemoryCards,
  Draftmons
];

export default projects;