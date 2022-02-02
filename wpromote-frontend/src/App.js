
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginRegisterFrom from "./components/forms/login_register";

// import './App.css';

import HomePage from "./components/homepage/homepage";
import NavBar from "./components/navigation/nav";
import PokemonInfo from "./components/pokemonCard/pokemonCardInfo";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route exact path="/" element={<HomePage />}></Route>

        <Route exact path="login_register" element={<LoginRegisterFrom />}></Route>

        <Route path="/pokemon/:name" element={<PokemonInfo />}>
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
