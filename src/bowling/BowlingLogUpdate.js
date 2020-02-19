// jshint esversion:6

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from "../helpers/environment";


const BowlingLogEdit = (props) => {
    const [editBallWeight, setEditBallWeight] = useState(props.bowlingLogToUpdate.ballweight);
    const [editBallBrand, setEditBallBrand] = useState(props.bowlingLogToUpdate.ballbrand);
    const [editBallModel, setEditBallModel] = useState(props.bowlingLogToUpdate.ballmodel);
    const [editBowlingCenter, setEditBowlingCenter] = useState(props.bowlingLogToUpdate.bowlingcenter);
    const [editBowlingLanes, setEditBowlingLanes] = useState(props.bowlingLogToUpdate.bowlinglanes);
    const [editLaneConditions, setEditLaneConditions] = useState(props.bowlingLogToUpdate.laneconditions);
    const [editApproachConditions, setEditApproachConditions] = useState(props.bowlingLogToUpdate.approachconditions);
    const [editGamesBowled, setEditGamesBowled] = useState(props.bowlingLogToUpdate.gamesbowled);
    const [editComments, setEditComments] = useState(props.bowlingLogToUpdate.comments);
    const [editDate, setEditDate] = useState(props.bowlingLogToUpdate.date);

    const bowlingLogUpdateCurrent = (e) => {
        
        e.preventDefault();

        fetch(`${APIURL}/api/bowlinglog/update/${props.bowlingLogToUpdate.id}`, {
            method: "PUT",
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({ bowlinglog: { 
                ballweight: editBallWeight,
                ballbrand: editBallBrand,
                ballmodel: editBallModel,
                bowlingcenter: editBowlingCenter,
                bowlinglanes: editBowlingLanes,
                laneconditions: editLaneConditions,
                approachconditions: editApproachConditions,
                gamesbowled: editGamesBowled,
                comments: editComments,
                date: editDate
            } })
        })  .then (res => {
                props.fetchBowlingLoggings();
                props.updateOff();
        });

    };

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit a Bowling Log</ModalHeader>
            <ModalBody>
                <Form onSubmit={bowlingLogUpdateCurrent}>
                    <FormGroup>
                        <Label htmlFor="ballweight">Ball Weight</Label>
                        <Input name="ballweight" type="select" value={editBallWeight} onChange={(e) => setEditBallWeight(e.target.value)} title="Ball Weight">
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
                        <Input name="ballbrand" value={editBallBrand} onChange={(e) => setEditBallBrand(e.target.value)} title="Ball Brand" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="ballmodel">Ball Model</Label>
                        <Input name="ballmodel" value={editBallModel} onChange={(e) => setEditBallModel(e.target.value)} title="Ball Model"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="bowlingcenter">Bowling Center</Label>
                        <Input name="bowlingcenter" value={editBowlingCenter} onChange={(e) => setEditBowlingCenter(e.target.value)} title="Bowling Center"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="bowlinglanes">Bowling Lanes</Label>
                        <Input name="bowlinglanes" value={editBowlingLanes} onChange={(e) => setEditBowlingLanes(e.target.value)} title="Bowling Lane Numbers"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="laneconditions">Lane Conditions</Label>
                        <Input name="laneconditions" value={editLaneConditions} onChange={(e) => setEditLaneConditions(e.target.value)} title="Lane Conditions"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="approachconditions">Approach Conditions</Label>
                        <Input name="approachconditions" value={editApproachConditions} onChange={(e) => setEditApproachConditions(e.target.value)} title="Approach Conditions"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="gamesbowled">Games Bowled</Label>
                        <Input name="gamesbowled" type="select" value={editGamesBowled} onChange={(e) => setEditGamesBowled(e.target.value)} title="Games Bowled">
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
                        <Input name="comments" value={editComments} onChange={(e) => setEditComments(e.target.value)} title="Comments"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date">Date</Label>
                        <Input name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} title="Date"/>
                    </FormGroup>
                    <Button type="submit">Update the Bowling Log</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default BowlingLogEdit;
