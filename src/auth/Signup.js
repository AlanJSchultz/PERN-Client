// jshint esversion:6

import React, { useState } from 'react';
import './Signup.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from "../helpers/environment";

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [teamname, setTeamname] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${APIURL}/api/bowler/createbowler`, {
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
            props.setFirstName(data.bowler.firstname);
            props.setLastName(data.bowler.lastname);
            props.setTeamName(data.bowler.teamname);
        }).catch((err) => console.log(err));
    };

    return (
        <div>
            <h3>Sign Up</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} required placeholder="" type="email"  name="email" value={email} title="email example: example: test@test.com" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} required placeholder="" type="password"  name="password" value={password} minLength="5" title="Password: Use at least 5 characters" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input onChange={(e) => setFirstname(e.target.value)} required placeholder="" type="text" name="firstname" value={firstname} title="First Name" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input onChange={(e) => setLastname(e.target.value)} required placeholder="" type="text" name="lastname" value={lastname} title="Last Name" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="teamname">Team Name</Label>
                    <Input onChange={(e) => setTeamname(e.target.value)} required placeholder="" type="text" name="teamname" value={teamname} title="Team Name or None" />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;
