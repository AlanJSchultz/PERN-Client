// jshint esversion:6

import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from "../helpers/environment";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/api/bowler/loginbowler`, {
            method: 'POST',
            body: JSON.stringify({ bowler: { email: email, password: password }}),
            headers: new Headers ({
                "Content-Type": "application/json"
            })
        }).then (
            (response) => response.json()
        ) .then ((data) => {
            props.updateToken(data.sessionToken);
            props.setFirstName(data.bowler.firstname);
            props.setLastName(data.bowler.lastname);
            props.setTeamName(data.bowler.teamname);
        });
    };

    return (
        <div>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} required placeholder="" type="email"  name="email" value={email} title="email example: test@test.com" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} required placeholder="" type="password"  name="password" value={password}  title="password" />
                </FormGroup>
                <Button type="submit" color="info">Login</Button>
            </Form>
        </div>
    )
}

export default Login;
