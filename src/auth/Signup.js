// jshint esversion:6

import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:4000/api/bowler/createbowler", {
            method: 'POST',
            body: JSON.stringify({ bowler: { email: email, password: password } }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        });
    };

    return (
        <div>
            <h3>Sign Up</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} placeholder="" type="email"  name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="" type="password"  name="password" value={password} />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;
