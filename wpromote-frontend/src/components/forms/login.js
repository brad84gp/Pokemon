import React from "react";
import { useNavigate } from "react-router";
import { Form, FormGroup, Label, Input, Button,  } from "reactstrap";
import AppAPI from "../../API/appApi";
import { PersistState } from "../../CACHE/cache";
import PokemoneContext from "../../context/context";

const LoginForm = () => {

    const { setAppState } = React.useContext(PokemoneContext)

    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        
        let data ={} 

        for(let item of evt.target){
            data[item.name] = item.value
        }
        
        let response = await AppAPI.loginUser(data) // LOGINS a user and saves their data locally if success
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