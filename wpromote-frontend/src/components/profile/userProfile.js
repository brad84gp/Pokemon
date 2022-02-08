import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row, Col, Container, Form, FormGroup, Label, Input, Button  } from "reactstrap"
import AppAPI from "../../API/appApi";

import PokemoneContext from "../../context/context";

const UserProfile = () => {

    const { appState, setAppState } = React.useContext(PokemoneContext)

    const navigate = useNavigate()

    useEffect(() =>{
    }, [appState])

    async function handleSubmit(evt){
        evt.preventDefault()
        let data = {
            "pk" : appState.pk
        }

        for(let item of evt.target){
            data[item.name] = item.value
        }
        
        let response = await AppAPI.updateUser(data) // Handle submit function sets the form information and sends infromation to CRUD api for upating with PATCH method.
        let userData = {
            "loggedIn" : appState.loggedIn,
            "pk" : appState.pk,
            "userData" : response[0].fields
        }
        localStorage.setItem("state" , JSON.stringify(userData)) // STORE data locally for each session for login persistance upon each refresh
        setAppState(userData)
        navigate("/profile")

    }

    async function handleDelete(){
        let response = await AppAPI.deleteUser({ "pk" : appState.pk}) // CALLS the DELETE route and removes user upon completion 
        if(response.status === 200){
            localStorage.clear()
            setAppState({
                "loggedIn" : false,
                "userData" : {}
            })
            navigate("/")
        }
    }

    console.log(appState)
    if(!appState.loggedIn) return <div />
    return (
        <Container fluid="lg">
            <Row>
                <Col>
                    <Form style={{width : '100%', border : '2px solid black', padding : '5%', marginTop : '5em'}} onSubmit={handleSubmit}>
                        <FormGroup >
                            <Label for="lastname">
                            Last Name
                            </Label>
                            <Input
                            id="lastname"
                            name="lastname"
                            placeholder={appState.userData.lastname}
                            defaultValue={appState.userData.lastname}
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
                            placeholder={appState.userData.firstname}
                            defaultValue={appState.userData.firstname}
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
                            placeholder={appState.userData.username}
                            defaultValue={appState.userData.username}
                            type="text"
                            />
                        </FormGroup>
                        <FormGroup >
                            <Label for="email">
                            Email
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder={appState.userData.email}
                            defaultValue={appState.userData.email}
                            type="email"
                            />
                        </FormGroup>
                        <Button color="primary">Submit Changes</Button>
                    </Form>
                    <Button color="danger" style={{display : 'flex', margin : '5em auto', 'justifyContent' : 'center'}} onClick={handleDelete}>DELETE ACCOUNT</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile