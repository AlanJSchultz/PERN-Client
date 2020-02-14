// jshint esversion:6

import React from 'react';

const BowlingLogIndex = (props) => {



    return (
        <div>
            {/* <h3>Bowling Log Index</h3> */}
    <h3 style={{textAlign: "left", marginLeft:"18px"}}>Bowler {props.firstName} {props.lastName} of team {props.teamName}</h3>
        </div>
    )
}

export default BowlingLogIndex;
