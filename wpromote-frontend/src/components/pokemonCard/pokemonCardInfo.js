import React, { useState } from "react";
import { useLocation } from 'react-router'
import { Container, Row, Col, Table } from "reactstrap";
import './pokemonCardInfo.css'

import PokemonLike from '../pokemon/pokemonLikes/pokemonListLike'
import PokemonDislike from '../pokemon/pokemonLikes/pokemonListDislike'
import FavoriteButton from '../pokemon/pokemonLikes/pokemonFavorite'

import PokemonTabNav from "./pokemonTabNav";
import PokemonStats from "./pokemonStatsTable";

import PokemoneContext from '../../context/context'

const PokemonInfo = () => {

    const { appState } = React.useContext(PokemoneContext)
    
    const { state } = useLocation()
    
    const [pokemonData, setPokemonData] = useState(state.pokemon)

    console.log(pokemonData)
    
    return (
        <div>
            <Container fluid>
            
                <Row style={{marginTop : '5em'}}>
                    <Col md="5" xs="12" id="photoCol">
                        <Row id="topRow">
                            <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
                        </Row>
                        <Row>
                        <ul id="btns">
                            <PokemonLike pokemon={pokemonData.name} />
                            {appState.loggedIn ? <FavoriteButton name={pokemonData.name} /> : null}
                            <PokemonDislike pokemon={pokemonData.name}  />
                        </ul>
                        </Row>
                        <Row>
                            <h3 style={{textAlign : 'center', marginTop : '1em', marginBottom : '1em'}}>Species : {pokemonData.species.name}</h3>
                            {pokemonData && (
                                 <Table striped >
                                     <thead>
                                         <tr>
                                             <th>STAT</th>
                                             <th>BASE</th>
                                             <th>EFFORT</th>
                                         </tr>
                                     </thead>
                                    {pokemonData.stats.map((el, idx) => (
                                        <PokemonStats key={idx} base={el.base_stat} effort={el.effort} stat={el.stat.name} />
                                    ))}
                                </Table>
                            )}
                        </Row>
                    </Col>
                    <Col>
                        <PokemonTabNav pokemon={pokemonData}/>
                    </Col>
                </Row>
                
                    
            </Container>
        </div>
    )
}

export default PokemonInfo