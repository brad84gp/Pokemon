import React from "react";
import { Form, FormGroup, Label, Input, Button,  } from "reactstrap";
import AppAPI from "../../API/appApi";
import pokemonContext from "../../context/context";


const RegisterForm = () => {

    const { setAppState } = React.useContext(pokemonContext)

    async function handleSubmit(evt){
        evt.preventDefault()
        let data = {}

        for(let item of evt.target){
            data[item.name] = item.value
        }
        
        let response = await AppAPI.createUser(data)
        setAppState({
            'loggedIn' : true,
            'UserData' : { 
                "pk" : response[0].pk,
                "data" : response[0].fields
            }
        })
    }

    return (
        <Form style={{width : '100%'}} onSubmit={handleSubmit}>
             <FormGroup >
                <Label for="lastname">
                Last Name
                </Label>
                <Input
                id="lastname"
                name="lastname"
                placeholder="lastname"
                type="text"
                />
            </FormGroup>
            <FormGroup >
                <Label for="firstname">
                First Name
                </Label>
                <Input
                id="firstname"
                name="firstname"
                placeholder="firstname"
                type="text"
                />
            </FormGroup>
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
            <FormGroup >
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                />
            </FormGroup>
          
        
            <Button >
                Sign up
            </Button>
            </Form>
    )
}

export default RegisterForm