import React from "react";
import { Form, FormGroup, Label, Input, Button,  } from "reactstrap";


const RegisterForm = () => {

    return (
        <Form style={{width : '100%'}} >
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