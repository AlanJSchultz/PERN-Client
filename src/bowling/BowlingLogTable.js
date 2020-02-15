// jshint esversion:6

import React from 'react';
import { Table } from 'reactstrap';

const BowlingLogTable = (props) => {

    const bowlingloggingsMapper = () => {
        return props.bowlingloggings.map(
            function (bowlinglogging, index) {
                return (
                    <tr key={index}>
                        <th scope="row">{bowlinglogging.id}</th>
                        <td>{bowlinglogging.ballweight}</td>
                        <td>{bowlinglogging.ballbrand}</td>
                        <td>{bowlinglogging.ballmodel}</td>
                        <td>{bowlinglogging.bowlingcenter}</td>
                        <td>{bowlinglogging.bowlinglanes}</td>
                        <td>{bowlinglogging.laneconditions}</td>
                        <td>{bowlinglogging.approachconditions}</td>
                        <td>{bowlinglogging.gamesbowled}</td>
                        <td>{bowlinglogging.comments}</td>
                        <td>{bowlinglogging.date}</td>
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
                    {bowlingloggingsMapper()}
                </tbody>
            </Table>
        </>
    )
    
}

export default BowlingLogTable;
