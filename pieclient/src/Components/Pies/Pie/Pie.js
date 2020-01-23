import React, {useState, useEffect} from 'react';
import './Pie.css'
import {CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Pie = (props) => {
    return(
        <div className="div">
        <CardBody>
            <CardTitle>{props.piePie.nameofPie}</CardTitle>
            <CardText>{props.piePie.baseofPie}</CardText>
            <CardText>{props.piePie.crust}</CardText>
            <CardText>{props.piePie.timeToBake}</CardText>
            <CardText>{props.piePie.servings}</CardText>
            <CardSubtitle>{props.piePie.rating}</CardSubtitle>
        </CardBody>
        </div>
    )
}

export default Pie;