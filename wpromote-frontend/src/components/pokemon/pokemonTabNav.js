import React, { useState } from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane, Col, Row, 
    Card, CardTitle, CardText, Button, CardBody, CardSubtitle } from "reactstrap";
import PokemonAbilities from "./pokemonAbilites";
import PokemonMoves from "./pokemonMoves";



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
                    onClick={function noRefCheck(){}}
                >
                    Game Index
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className=""
                    onClick={function noRefCheck(){}}
                >
                    Items Held
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">

                    {pokemon && (
                        <Row>
                            {pokemon.abilities.map((el, idx) => (
                                <PokemonAbilities key={idx} abilityName={el.ability.name} hidden={el.is_hidden} slotNum={el.slot} url={el.ability.url}/>
                            ))}
                        </Row>
                    )}

                </TabPane>
                <TabPane tabId="2">

                   {pokemon && (
                       <Row>
                           {<PokemonMoves />}
                       </Row>
                   )}

                </TabPane>
            </TabContent>
        </div>
    )
}


export default PokemonTabNav