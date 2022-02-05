import React, { useEffect, useState } from "react";
import AppAPI from "../../../API/appApi";
import { Button } from "reactstrap";


const PokemonDislike = ({pokemon}) => {


    const [dislike, setDislike] = useState()
    
    useEffect(() => {
        async function grabLikes(){
            let response = await AppAPI.grabLikes({ "pokemon" : pokemon })
            if(response != false) setDislike(response[0].fields.dislikes)
            else setDislike()
        }

        grabLikes()
    }, [pokemon])
    
    async function handleClick(){
        let response = await AppAPI.addDislike({ "pokemon" : pokemon })
        setDislike(response[0].fields.dislikes)
    }

    return (
        <Button  id="dislikebtn" color="danger" onClick={handleClick}>dislike {dislike}</Button>
    )

}

export default PokemonDislike