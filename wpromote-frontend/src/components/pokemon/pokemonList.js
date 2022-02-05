import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Card, CardTitle, CardImg, CardImgOverlay, Col, Button } from "reactstrap";

import PokemonApi from "../../API/pokemonApi";

import FavoriteButton from "./pokemonLikes/pokemonFavorite";
import PokemonDislike from "./pokemonLikes/pokemonListDislike";
import PokemonLike from './pokemonLikes/pokemonListLike'

import PokemoneContext from "../../context/context";

const PokemonList = ({name}) => {

    const { appState } = React.useContext(PokemoneContext)

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
        </Col>
    )
}

export default PokemonList