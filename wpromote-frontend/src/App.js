import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistState } from "./CACHE/cache";

import LoginRegisterFrom from "./components/forms/login_register";
import HomePage from "./components/homepage/homepage";
import NavBar from "./components/navigation/nav";
import PokemonInfo from "./components/pokemonCard/pokemonCardInfo";
import UserProfile from "./components/profile/userProfile";

import PokemoneContext from "./context/context";

function App(){


    const [appState, setAppState] = useState({
        "loggedIn" : false,
        "UserData" : {}
      })

    useEffect(() =>{
      if(localStorage.getItem("state")) setAppState(JSON.parse(localStorage.getItem("state")))
    }, [])

    console.log(appState)
    return(
        <BrowserRouter>
        
        <PokemoneContext.Provider value={{appState, setAppState}}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
    
            <Route exact path="login_register" element={<LoginRegisterFrom />}></Route>
    
            <Route path="/pokemon/:name" element={<PokemonInfo />}></Route>

            <Route exact path="/profile" element={<UserProfile />}></Route>
    
            
          </Routes>
        </PokemoneContext.Provider>
        </BrowserRouter>
    )
}


export default App