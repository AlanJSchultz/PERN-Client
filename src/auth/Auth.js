// jshint esversion:6

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {

    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    {props.showLogin ? <Login updateToken={props.updateToken} /> : <Signup updateToken={props.updateToken} />}
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;
