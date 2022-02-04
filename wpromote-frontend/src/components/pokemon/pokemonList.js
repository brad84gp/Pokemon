import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Card, CardTitle, CardImg, CardImgOverlay, Col, Button } from "reactstrap";


import AppAPI from "../../API/appApi";
import PokemonApi from "../../API/pokemonApi";

import PokemonLike from './pokemonListLike'

const PokemonList = ({name}) => {

    const localState = JSON.parse(localStorage.getItem("state"))
   


    const navigate = useNavigate();



    const [pokemonData, setPokemonData] = useState()


    useEffect(() =>{
        async function getData(){
            let response = await PokemonApi.fetchPokemonData(name)
            setPokemonData(response)
        }
        getData()
    }, [name])





    function handleClick(){
        return navigate(`/pokemon/${name}`, { state : { pokemon : pokemonData}})
    }



    async function handleFavorite(evt){
        await AppAPI.addFavorite({
        "pk" : localState.UserData.pk,
        "pokemon" : name
        })
    }



    if(!pokemonData) return <div />
    return (
        <Col lg="4" md="6" xs="12">
            <Card inverse id="pokeCard" onClick={handleClick}>
                <CardImg
                    alt="Card image cap"
                    src={pokemonData.sprites.other.dream_world.front_default}
                    id="pokeImg"
                />
                <CardImgOverlay>
                    <CardTitle id="pokeName">
                    {name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
            <ul id="btns">
                <PokemonLike pokemon={name}/>
                {localState.loggedIn ? <Button id="favbtn" color="success" onClick={handleFavorite}> Favorite</Button>
                    : null}
                <Button id="dislikebtn" color="danger">Dislike 2</Button>           
            </ul>
        </Col>
    )
}

export default PokemonList