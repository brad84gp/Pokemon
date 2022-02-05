import React, { useContext  } from "react";
import { useNavigate } from "react-router";
import { Form, FormGroup, Label, Input, Button,  } from "reactstrap";
import AppAPI from "../../API/appApi";

import PokemoneContext from "../../context/context";


const RegisterForm = () => {

    const { setAppState } = React.useContext(PokemoneContext)

    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        let data = {}

        for(let item of evt.target){
            data[item.name] = item.value
        }
        
        let response = await AppAPI.createUser(data)
        let userData = {
            "loggedIn" : true,
            "pk" : response[0].pk,
            "userData" : response[0].fields
        }
        localStorage.setItem("state" , JSON.stringify(userData))
        setAppState(userData)
        navigate("/")
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