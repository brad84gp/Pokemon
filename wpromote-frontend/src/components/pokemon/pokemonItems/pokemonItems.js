import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardImg, Table, Col, CardFooter } from "reactstrap";
import './pokemonItems.css'

import PokemonApi from "../../../API/pokemonApi";
import PokemonItemAttributes from "./pokemonItemAttibutes";


const PokemonItems = ({itemUrl}) => {

    const [items, setItems] = useState()

    useEffect(() =>{
        async function getItems(){
            let response = await PokemonApi.fetchPokemonItems(itemUrl.slice(31))
            setItems(response)
        }

        getItems()
    }, [])


    console.log('items', items)
    if(!items) return <div />
    return (
        <Card>
            <CardHeader tag="h3" style={{textAlign : 'center'}}>
            {items.name}
            </CardHeader>
            <CardBody>
            <ul id="itemsUL">
                <Col>
                    <CardImg src={items.sprites.default} alt="" style={{width : '250px'}}/>
                </Col>
                <Col>
                    <Table striped bordered>
                        <tbody>
                            <tr>
                                <th>
                                    
                                </th>
                                <td colSpan={2}>
                                    DESCRIPTION
                                </td>
                            </tr>
                            {items.attributes.map((el, idx) => (
                                <PokemonItemAttributes key={idx} attrName={el.name} attrUrl={el.url} />
                            ))}
                            <tr>
                                <th>
                                    Cost
                                </th>
                                <td colSpan={2}>
                                    {items.cost}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Fling Effect
                                </th>
                                <td colSpan={2}>
                                    {items.fling_effect.name}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Fling Power
                                </th>
                                <td colSpan={2}>
                                    {items.fling_power}
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Col>
            </ul>
            
            </CardBody>
        </Card>
    )
}

export default PokemonItems