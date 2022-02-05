import React, { useEffect, useState } from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PokemonApi from "../../API/pokemonApi";


const PokemonAbilities = ({abilityName, slotNum, url}) => {

    const [abilityCard, setAbilityCard] = useState()


    useEffect(() =>{
        async function getAbilityInfo(){
            let response = await PokemonApi.fetchPokemonAbilityData(url.slice(34))
            setAbilityCard(response)
        }

        getAbilityInfo()
    }, [])

    return (
        <Col>
            <Card
                body
                color="info"
                style={{margin : '2em'}}
            >
                <CardBody>
                <CardTitle tag="h5">
                    {abilityName}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Slot# {slotNum} 
                </CardSubtitle>
                <CardText>
                    {abilityCard && abilityCard.effect_entries.map( (el, idx) => {
                        if(el.language.name == 'en') return <p key={idx}>{el.effect}</p>
                    })}
                </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PokemonAbilities