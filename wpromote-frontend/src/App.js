
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginRegisterFrom from "./components/forms/login_register";

import HomePage from "./components/homepage/homepage";
import NavBar from "./components/navigation/nav";
import PokemonInfo from "./components/pokemonCard/pokemonCardInfo";

import pokemonContext from "./context/context";

function App() {

  const [appState, setAppState] = useState(JSON.parse(localStorage.getItem("state")))

  

  console.log(appState, appState.UserData.pk)

  return (
    <BrowserRouter>
    <pokemonContext.Provider value={{appState}, {setAppState}}>
      <NavBar loggedIn={appState}/>
      <Routes>

        <Route exact path="/" element={<HomePage />}></Route>

        <Route exact path="login_register" element={<LoginRegisterFrom />}></Route>

        <Route path="/pokemon/:name" element={<PokemonInfo />}>
          
        </Route>

      </Routes>
    </pokemonContext.Provider>
    </BrowserRouter>
  );
}

export default App;
