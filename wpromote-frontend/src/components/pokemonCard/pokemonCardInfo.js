import React, { useState } from "react";
import { useLocation } from 'react-router'
import { Container, Row, Col, Table } from "reactstrap";
import './pokemonCardInfo.css'


import PokemonTabNav from "../pokemon/pokemonTabNav";
import PokemonStats from "./pokemonStatsTable";

const PokemonInfo = () => {
    
    const { state } = useLocation()
    
    const [pokemonData, setPokemonData] = useState(state.pokemon)

    console.log(pokemonData)
    
    return (
        <div>
            <Container fluid="lg">
            
                <Row style={{marginTop : '5em'}}>
                    <Col xs="3" id="photoCol">
                        <Row id="topRow">
                            <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
                        </Row>
                        <Row>
                            <h3 style={{textAlign : 'center', marginTop : '1em', marginBottom : '1em'}}>Species : {pokemonData.species.name}</h3>
                            {pokemonData && (
                                 <Table striped>
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