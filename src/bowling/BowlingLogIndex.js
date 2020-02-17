// jshint esversion:6

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
// import BowlingLogTable from './BowlingLogTable';
import BowlingLogCreate from './BowlingLogCreate';
// import BowlingLogUpdate from './BowlingLogUpdate';
import APIURL from "../helpers/environment";

const BowlingLogIndex = (props) => {

    
    const [bowlingLoggings, setBowlingLoggings] = useState([]);

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

    useEffect(() => {
        fetchBowlingLoggings();
    }, []);

    return (

        // <div>
        //     <h3 style={{textAlign: "left", marginLeft:"18px"}}>Bowler {props.firstName} {props.lastName} of team {props.teamName}</h3>
        //     Bowling Log Index
        // </div>
        
        <Container>
            <Row>
                <h3 style={{textAlign: "left"}}>Bowler {props.firstName} {props.lastName} of team {props.teamName}</h3>
            </Row>
            <Row>
                <Col md="3">
                    <BowlingLogCreate fetchBowlingLoggings={fetchBowlingLoggings} token={props.token} />
                </Col>
                <Col md="9">
                    {/* <BowlingLogTable bowlingLoggings={bowlingLoggings} fetchBowlingLoggings={fetchBowlingLoggings} token={props.token} /> */}
                    <h2>BowlingLogTable to come here in the future</h2>
                </Col>
            </Row>
            
        </Container>
    )
}

export default BowlingLogIndex;
