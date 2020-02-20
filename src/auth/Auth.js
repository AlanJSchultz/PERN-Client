// jshint esversion:6

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {

    return (
        <Container className="auth-container">
            <Row>
                < Col md = "6" >
                    <img src="https://media.istockphoto.com/photos/bowling-picture-id480732472?k=6&m=480732472&s=612x612&w=0&h=5NOYSs5huZiVrj0FanxaB2feafYLKj2qzVyzEXqeydI=" width="100%" alt="Bowling Strike Graphic" title="Bowling Strike"></img>
                </Col>
                <Col md="6">
                    {props.showLogin 
                    ? <Login updateToken={props.updateToken} setFirstName={props.setFirstName} setLastName={props.setLastName} setTeamName={props.setTeamName} /> 
                    : <Signup updateToken={props.updateToken} setFirstName={props.setFirstName} setLastName={props.setLastName} setTeamName={props.setTeamName} />}
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;
