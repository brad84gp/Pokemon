import React, { useEffect, useState } from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PokemonApi from "../../API/pokemonApi";


const PokemonAbilities = ({abilityName, hidden, slotNum, url}) => {

    const [abilityCard, setAbilityCard] = useState()


    useEffect(() =>{
        async function getAbilityInfo(){
            let response = await PokemonApi.fetchPokemonAbilityData(url.slice(34))
            setAbilityCard(response)
        }

        getAbilityInfo()
    }, [])

    console.log(abilityCard)
    return (
        <Col>
            <Card
                body
                color="info"
            >
                <CardBody>
                <CardTitle tag="h5">
                    {abilityName}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Hidden? : {hidden}
                </CardSubtitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Slot# {slotNum} 
                </CardSubtitle>
                <CardText>
                    {abilityCard && abilityCard.effect_entries.map( el => {
                        if(el.language.name == 'en') return <p>{el.effect}</p>
                    })}
                </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PokemonAbilities