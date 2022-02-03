import React, { useEffect, useState } from 'react'
import PokemonApi from '../../API/pokemonApi'


const PokemonItemAttributes = ({attrName, attrUrl}) => {

    const [attInfo, setAttInfo] = useState()

    useEffect(() =>{
        async function getAttrInfo(){
            let response = await PokemonApi.fetchPokemonAttrInfo(attrUrl.slice(41))
            setAttInfo(response)
        }

        getAttrInfo()
    }, [])

    console.log(attInfo)
    if(!attInfo) return <div />
    return (
        <tr>
            <td>
                Name
            </td>
            <td>
                {attInfo.name}
            </td>
            <td>
                {attInfo.descriptions.map((el) => {
                    if(el.language.name === 'en') return el.description
                })}
            </td>
        </tr>
    )
}

export default PokemonItemAttributes