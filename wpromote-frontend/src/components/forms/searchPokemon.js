import React from "react";
import { Button, Input, Form } from "reactstrap";


function FindPokemon({update}){
    let { updatePokemonList } = update

    function handleSubmit(evt){
        evt.preventDefault()
        let textVal = evt.target[0].value
        updatePokemonList(textVal)
    }

    function handleChange(evt){
        let searchVal = evt.target.value
        if(searchVal.length == 0) updatePokemonList(searchVal)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input type="text" onChange={handleChange}></Input>
                <Button>Submit</Button>
            </Form>
        </div>

    )
}

export default FindPokemon