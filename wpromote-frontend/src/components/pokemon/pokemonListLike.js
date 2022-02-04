import React, { useState } from "react";
import AppAPI from "../../API/appApi";
import { Button } from "reactstrap";


const PokemonLike = ({pokemon}) => {


    const [like, setLike] = useState()
    
    
    async function handleClick(){
        let response = await AppAPI.addLike({ "pokemon" : pokemon })
        setTimeout(() => {
            console.log(response)
        }, 1000);
    }

    return (
        <Button id="likebtn" color="primary" onClick={handleClick}>Like {like}</Button>
    )

}

export default PokemonLike