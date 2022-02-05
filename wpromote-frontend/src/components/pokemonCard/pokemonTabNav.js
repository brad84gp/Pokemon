import React, { useState } from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane, Row, Table } from "reactstrap";
import PokemonAbilities from "./pokemonAbilites";
import PokemonGameIndex from "./pokemonGameIndex";
import PokemonItems from "../pokemon/pokemonItems/pokemonItems";
import PokemonMoves from "./pokemonMoves";
import './pokemonCardInfo.css'



const PokemonTabNav = ({pokemon}) => {

    console.log(pokemon)

    const [activeTab, setActiveTab] = useState("1")

    return (
        <div>
            <Nav tabs>
                <NavItem>
                <NavLink
                    className=""
                    onClick={() => setActiveTab("1")}
                >
                    Abilities
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className=""
                    onClick={() => setActiveTab("2")}
                >
                    Moves
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className=""
                    onClick={() => setActiveTab("3")}
                >
                    Game Index
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className=""
                    onClick={() => setActiveTab("4")}
                >
                    Items Held
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">

                    {pokemon && (
                        <Row id="abilitiesrow">
                            {pokemon.abilities.map((el, idx) => (
                                <PokemonAbilities key={idx} abilityName={el.ability.name} hidden={el.is_hidden} slotNum={el.slot} url={el.ability.url}/>
                            ))}
                        </Row>
                    )}

                </TabPane>
                <TabPane tabId="2">

                   {pokemon && (
                       <Row id="movesrow">
                           {pokemon.moves.map((el, idx) => (
                                <PokemonMoves key={idx} name={el.move.name} movesUrl={el.move.url}/>
                            ))}
                       </Row>
                   )}

                </TabPane>
                <TabPane tabId="3">

                   {pokemon && (
                       <Row id="indexrow">
                           <Table striped bordered style={{textAlign :  'center'}}>
                                <thead>
                                    <tr>
                                        <td>
                                            Game Index
                                        </td>
                                        <td>
                                            Version Name
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                {pokemon.game_indices.map((el, idx) => (
                                    <PokemonGameIndex key={idx} gameIndex={el.game_index} version={el.version.name}/>
                                ))}
                                </tbody>
                            </Table>
                       </Row>
                   )}

                </TabPane>
                <TabPane tabId="4">

                   {pokemon && (
                       <Row id="itemsrow">
                           {pokemon.held_items.map((el, idx) => (
                                <PokemonItems key={idx} itemUrl={el.item.url} />
                            ))}
                       </Row>
                   )}

                </TabPane>
            </TabContent>
        </div>
    )
}


export default PokemonTabNav