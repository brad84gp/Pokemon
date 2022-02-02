import React from "react";
import { Form, FormGroup, Label, Input, Button,  } from "reactstrap";


const LoginForm = () => {

    return (
        <Form style={{width : '100%'}} >
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