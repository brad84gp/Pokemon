import React, { useEffect, useState } from "react";
import AppAPI from "../../../API/appApi";
import { Button } from "reactstrap";


const PokemonLike = ({pokemon}) => {


    const [like, setLike] = useState()
    
    useEffect(() => {
        async function grabLikes(){
            let response = await AppAPI.grabLikes({ "pokemon" : pokemon })
            if(response != false) setLike(response[0].fields.likes)
        }

        grabLikes()
    }, [])
    
    async function handleClick(){
        let response = await AppAPI.addLike({ "pokemon" : pokemon })
        setLike(response[0].fields.likes)
    }

    return (
        <Button id="likebtn" color="primary" onClick={handleClick}>Like {like}</Button>
    )

}

export default PokemonLike