import React from "react";
import { Form, FormGroup, Label, Input, Button,  } from "reactstrap";
import AppAPI from "../../API/appApi";
import pokemonContext from "../../context/context";

const LoginForm = () => {

    const { setAppState } = React.useContext(pokemonContext)

    async function handleSubmit(evt){
        evt.preventDefault()
        
        let data ={} 

        for(let item of evt.target){
            data[item.name] = item.value
        }
        
        let response = await AppAPI.loginUser(data)
        localStorage.setItem("state", JSON.stringify({
            'loggedIn' : true,
            'UserData' : { 
                "pk" : response[0].pk,
                "data" : response[0].fields
            }
        }))
        console.log(localStorage.getItem("state"))

        
    }

    return (
        <Form style={{width : '100%'}} onSubmit={handleSubmit}>
            <FormGroup >
                <Label for="username">
                Username
                </Label>
                <Input
                id="username"
                name="username"
                placeholder="username"
                type="text"
                />
            </FormGroup>
            <FormGroup >
                <Label for="examplePassword">
                Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                />
            </FormGroup>
            <Button >
                Sign in
            </Button>
            </Form>
    )
}

export default LoginForm