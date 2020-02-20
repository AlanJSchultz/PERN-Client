// jshint esversion:6

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import BowlingLogTable from './BowlingLogTable';
import BowlingLogCreate from './BowlingLogCreate';
import BowlingLogUpdate from './BowlingLogUpdate';
import APIURL from "../helpers/environment";

const BowlingLogIndex = (props) => {
    
    const [bowlingLoggings, setBowlingLoggings] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bowlingLogToUpdate, setBowlingLogToUpdate] = useState({});

    const fetchBowlingLoggings = () => {
        fetch(`${APIURL}/api/bowlinglog/getall`, {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })  
        .then(res => res.json())
        .then(logData => { 
            setBowlingLoggings(logData);
            console.log(logData);
        });
    };

    const editUpdateBowlingLog = (bowlingLog) => {
        setBowlingLogToUpdate(bowlingLog);
        console.log(bowlingLog);
    };

    const updateOn = () => {
        setUpdateActive(true);
    };

    const updateOff = () => {
        setUpdateActive(false);
    };

    useEffect(() => {
        fetchBowlingLoggings();
    }, []);

    return (

        <Container>
            <Row>
                <h3 style={{textAlign: "left"}}>Bowler {props.firstName} {props.lastName} of team {props.teamName}</h3>
            </Row>
            <Row>
                {props.creatingABowlingLog
                ? <BowlingLogCreate fetchBowlingLoggings={fetchBowlingLoggings} token={props.token} />
                : <BowlingLogTable 
                        bowlingLoggings={bowlingLoggings} 
                        editUpdateBowlingLog={editUpdateBowlingLog} 
                        updateOn={updateOn} 
                        fetchBowlingLoggings={fetchBowlingLoggings} 
                        token={props.token} />}
                {/* <Col md="3">
                    <BowlingLogCreate fetchBowlingLoggings={fetchBowlingLoggings} token={props.token} />
                </Col>
                <Col md="9">
                    <BowlingLogTable 
                        bowlingLoggings={bowlingLoggings} 
                        editUpdateBowlingLog={editUpdateBowlingLog} 
                        updateOn={updateOn} 
                        fetchBowlingLoggings={fetchBowlingLoggings} 
                        token={props.token} />
                </Col> */}
                {
                    updateActive 
                    ? <BowlingLogUpdate 
                        bowlingLogToUpdate={bowlingLogToUpdate} 
                        updateOff={updateOff} token={props.token} 
                        fetchBowlingLoggings={fetchBowlingLoggings}
                        /> 
                    : null
                }
            </Row>
            
        </Container>
    )
}

export default BowlingLogIndex;
