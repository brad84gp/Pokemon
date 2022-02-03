import React, { useEffect, useState } from "react";
import { Card, CardBody, Collapse, Button, Col, Table } from 'reactstrap'
import PokemonApi from "../../API/pokemonApi";


const PokemonMoves = ({name, movesUrl}) => {

    const [isOpen, setIsOpen] = useState(false)

    const[pokemonMoves, setPokemonMoves] = useState()

    useEffect(() =>{
        async function getPokemonMoves(){
            let response = await PokemonApi.fetchPokmonMoves(movesUrl.slice(31))
            setPokemonMoves(response)
        }

        getPokemonMoves()
    }, [])

    if(!pokemonMoves) return <div />

    return (
        <Col sm="4" xs="6">
            <Button
                color="primary"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                marginBottom: '1rem'
                }}
            >
                {pokemonMoves.name}
            </Button>
            <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                   <Table>
                       <tbody>
                           <tr>
                               <td>
                                   Accuracy
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.accuracy}
                               </td>
                           </tr>
                        </tbody>
                   </Table>

                   <Table>
                       <tbody>
                           <tr>
                               <td>
                                   Ailment
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.ailment.name}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Category
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.category.name}
                               </td>
                           </tr>
                        </tbody>
                   </Table>

                   <Table>
                       <tbody>
                           <tr>
                               <td>
                                   Crit Rate
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.crit_rate}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Drain
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.drain}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Flinch Chance
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.flinch_chance}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Healing
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.healing}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Max Hits
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.max_hits}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Max Turns
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.max_turns}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Min Hits
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.min_hits}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Min Turns
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.min_turns}
                               </td>
                           </tr>
                           <tr>
                               <td>
                                   Stat Chance
                               </td>
                               <td>
                                   {pokemonMoves && pokemonMoves.meta.stat_chance}
                               </td>
                           </tr>
                        </tbody>
                   </Table>
                </CardBody>
                </Card>
            </Collapse>
        </Col>
    )
}

export default PokemonMoves