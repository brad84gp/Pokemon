import React, { useEffect, useState } from "react";
import AppAPI from "../../../API/appApi";
import { Button } from "reactstrap";
import PokemoneContext from "../../../context/context";



const FavoriteButton = ({name}) => {

    const { appState } = React.useContext(PokemoneContext)
    const [favorited, setFavorited] = useState(false)

    useEffect(() => {
        async function checkFavorite(){
            let response = await AppAPI.checkFavorites({
                "pk": appState.pk,
                "pokemon" : name
            })
            if(response != false) setFavorited(true)
            else setFavorited(false)
        }

        checkFavorite()
    }, [name])

    async function handleFavorite(){
        let response = await AppAPI.addFavorite({
            "pk" : appState.pk,
            "pokemon" : name
        })
        if(response[0].fields) setFavorited(true)
    }

    async function handleUnFavorite(){
        let response = await AppAPI.removeFavorite({
            "pk" : appState.pk,
            "pokemon" : name
        })
        if(!response.length) setFavorited(false)
    }

    if(!favorited){
        return (
            <Button id="favbtn" color="success" onClick={handleFavorite}>Favorite</Button>
        )
    }else{
        return (
            <Button id="favbtn" color="light" onClick={handleUnFavorite}>Un-favorite</Button>
        )
    }
}


export default FavoriteButton