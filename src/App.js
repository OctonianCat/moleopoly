import logo from './logo.svg';
import './App.css';
import {Client} from 'boardgame.io/react'
import {MoleopolyGame} from "./Game";

const App = Client({game: MoleopolyGame});

export default App;
