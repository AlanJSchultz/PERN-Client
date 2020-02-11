// jshint esversion:6

import React, { useState } from 'react';
import './Signup.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [teamname, setTeamname] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:4000/api/bowler/createbowler", {
            method: 'POST',
            body: JSON.stringify({ bowler: {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                teamname: teamname
                } 
            }),
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
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="" type="password"  name="password" value={password} minLength="5" title="Use at least 5 characters" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input onChange={(e) => setFirstname(e.target.value)} placeholder="" type="text" name="firstname" value={firstname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input onChange={(e) => setLastname(e.target.value)} placeholder="" type="text" name="lastname" value={lastname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="teamname">Team Name</Label>
                    <Input onChange={(e) => setTeamname(e.target.value)} placeholder="" type="text" name="teamname" value={teamname} />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;
