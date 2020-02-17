// jshint esversion:6

import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from "../helpers/environment";

const BowlingLogCreate = (props) => {
    const [ballweight, setBallweight] = useState('');
    const [ballbrand, setBallbrand] = useState('');
    const [ballmodel, setBallmodel] = useState('');
    const [bowlingcenter, setBowlingcenter] = useState('');
    const [bowlinglanes, setBowlinglanes] = useState('');
    const [laneconditions, setLaneconditions] = useState('');
    const [approachconditions, setApproachconditions] = useState('');
    const [gamesbowled, setGamesbowled] = useState('');
    const [comments, setComments] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/api/bowlinglog/create`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({bowlinglog: {
                ballweight: ballweight,
                ballbrand: ballbrand,
                ballmodel: ballmodel,
                bowlingcenter: bowlingcenter,
                bowlinglanes: bowlinglanes,
                laneconditions: laneconditions,
                approachconditions: approachconditions,
                gamesbowled: gamesbowled,
                comments: comments,
                date: date
            } })
        })  .then(res => res.json())
            .then(logData => {
                console.log(logData);
                setBallweight('');
                setBallbrand('');
                setBallmodel('');
                setBowlingcenter('');
                setBowlinglanes('');
                setLaneconditions('');
                setApproachconditions('');
                setGamesbowled('');
                setComments('');
                setDate('');
                props.fetchBowlingLoggings();
            });

    };

    return (
        <>
            <h3>Create a Bowling Log</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="ballweight">Ball Weight</Label>
                    <Input onChange={(e) => setBallweight(e.target.value)} type="select" name="ballweight" value={ballweight} title="Ball Weight">
                        <option></option>
                        <option value="16">16 pounds</option>
                        <option value="15">15 pounds</option>
                        <option value="14">14 pounds</option>
                        <option value="13">13 pounds</option>
                        <option value="12">12 pounds</option>
                        <option value="11">11 pounds</option>
                        <option value="10">10 pounds</option>
                        <option value="9">9 pounds</option>
                        <option value="8">8 pounds</option>
                        <option value="7">7 pounds</option>
                        <option value="6">6 pounds</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ballbrand">Ball Brand</Label>
                    <Input onChange={(e) => setBallbrand(e.target.value)} name="ballbrand" value={ballbrand} title="Ball Brand" />   
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ballmodel">Ball Model</Label>
                    <Input onChange={(e) => setBallmodel(e.target.value)} name="ballmodel" value={ballmodel} title="Ball Model" />   
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="bowlingcenter">Bowling Center</Label>
                    <Input onChange={(e) => setBowlingcenter(e.target.value)} name="bowlingcenter" value={bowlingcenter} title="Bowling Center" />  
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="bowlinglanes">Bowling Lanes</Label>
                    <Input onChange={(e) => setBowlinglanes(e.target.value)} name="bowlinglanes" value={bowlinglanes} title="Bowling Lane Numbers" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="laneconditions">Lane Conditions</Label>
                    <Input onChange={(e) => setLaneconditions(e.target.value)} name="laneconditions" value={laneconditions} title="Lane Conditions" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="approachconditions">Approach Conditions</Label>
                    <Input onChange={(e) => setApproachconditions(e.target.value)} name="approachconditions" value={approachconditions} title="Approach Conditions" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gamesbowled">Games Bowled</Label>
                    <Input onChange={(e) => setGamesbowled(e.target.value)} type="select" name="gamesbowled" value={gamesbowled} title="Number of Games Bowled">
                        <option></option>
                        <option value="1">1 game</option>
                        <option value="2">2 games</option>
                        <option value="3">3 games</option>
                        <option value="4">4 games</option>
                        <option value="5">5 games</option>
                        <option value="6">6 games</option>
                        <option value="7">7 games</option>
                        <option value="8">8 games</option>
                        <option value="9">9 games</option>
                        <option value="10">10 games</option>
                        <option value="11">11 games</option>
                        <option value="12">12 games</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="comments">Comments</Label>
                    <Input onChange={(e) => setComments(e.target.value)} required name="comments" value={comments} title="Comments" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <Input onChange={(e) => setDate(e.target.value)} required name="date" value={date} title="Date" />
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default BowlingLogCreate;
