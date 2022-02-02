import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Card, CardTitle, CardImg, CardImgOverlay, Col } from "reactstrap";
import PokemonApi from "../../API/pokemonApi";



const PokemonList = ({name}) => {
   
    const navigate = useNavigate();

    const [pokemonInfo, setPokemonInfo] = useState()

    useEffect(() => {
        async function getPokemonInfo(){
            let response = await PokemonApi.fetchPokemonData(name)
            setPokemonInfo(response.data)
        }

        getPokemonInfo()
    }, [])

    function handleClick(){
        return navigate(`/pokemon/${pokemonInfo.name}`, { state : { pokemon : pokemonInfo }})
    }

    return (
        <Col lg="4" md="6" xs="12">
            <Card inverse id="pokeCard" onClick={handleClick}>
                <CardImg
                    alt="Card image cap"
                    src={pokemonInfo && pokemonInfo.sprites.other.dream_world.front_default}
                    id="pokeImg"
                />
                <CardImgOverlay>
                    <CardTitle id="pokeName">
                    {pokemonInfo && pokemonInfo.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </Col>
    )
}

export default PokemonList