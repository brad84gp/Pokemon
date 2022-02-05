import React from "react";
import { Button, Input, Form, InputGroup } from "reactstrap";


function FindPokemon({update}){
    let { updatePokemonList } = update

    function handleSubmit(evt){
        evt.preventDefault()
        let textVal = evt.target[0].value
        updatePokemonList(textVal)
    }

    function handleChange(evt){
        let searchVal = evt.target.value
        if(searchVal.length == 0) updatePokemonList('')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input type="text" onChange={handleChange} />
                    <Button color="primary">Submit</Button>
                </InputGroup>
            </Form>
        </div>

    )
}

export default FindPokemon