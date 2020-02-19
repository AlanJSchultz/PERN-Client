// jshint esversion:6

import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from "../helpers/environment";


const BowlingLogTable = (props) => {

    const deleteBowlingLog = (bowlingLog) => {
        fetch(`${APIURL}/api/bowlinglog/delete/${bowlingLog.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchBowlingLoggings());
    };

    const bowlinglogMapper = () => {
        return props.bowlingLoggings.map(
            function (bowlinglog, index) {
                return (
                    <tr key={index}>
                        <th scope="row">{bowlinglog.id}</th>
                        <td>{bowlinglog.ballweight}</td>
                        <td>{bowlinglog.ballbrand}</td>
                        <td>{bowlinglog.ballmodel}</td>
                        <td>{bowlinglog.bowlingcenter}</td>
                        <td>{bowlinglog.bowlinglanes}</td>
                        <td>{bowlinglog.laneconditions}</td>
                        <td>{bowlinglog.approachconditions}</td>
                        <td>{bowlinglog.gamesbowled}</td>
                        <td>{bowlinglog.comments}</td>
                        <td>{bowlinglog.date}</td>
                        <td>
                            <Button color="warning" onClick={() => { props.editUpdateBowlingLog(bowlinglog); props.updateOn() }}>Update</Button>
                            <Button color="danger" onClick={() => { deleteBowlingLog(bowlinglog) }}>Delete</Button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <>
            <h3>Bowling Log History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ball Weight</th>
                        <th>Ball Brand</th>
                        <th>Ball Model</th>
                        <th>Bowling Center</th>
                        <th>Bowling Lanes</th>
                        <th>Lane Conditions</th>
                        <th>Approach Conditions</th>
                        <th>Games Bowled</th>
                        <th>Comments</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlinglogMapper()}
                </tbody>
            </Table>
        </>
    )
    
}

export default BowlingLogTable;
