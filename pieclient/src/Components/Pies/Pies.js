import React, { useState, useEffect } from 'react';
import {Card, CardBody} from 'reactstrap';
import './Pies.css';
import Pie from './Pie/Pie';

// const hardCodedPies = [
//     {
//         nameOfPie: 'Pumpkin',
//         baseOfPie: 'Pumpkin puree',
//         crust: 'Pastry',
//         timeToBake: 50,
//         servings: 8,
//         rating: 4.2
//     },
//     {
//         nameOfPie: 'Apple',
//         baseOfPie: 'Jam',
//         crust: 'Graham cracker',
//         timeToBake: 30,
//         servings: 6,
//         rating: 4.0
//     },
//     {
//         nameOfPie: 'Chocolate',
//         baseOfPie: 'Pudding',
//         crust: 'Pastry',
//         timeToBake: 20,
//         servings: 8,
//         rating: 5.0
//     }
// ]
// video has props passed in
const Pies = (props) => {

    const [pies, setPies] = useState([]);
    // code that references our actual database below:
    const pieRows = () => {
        const pieColumns = {
            nameOfPie: 'Pie Name',
            baseOfPie: 'Pie Base',
            crust: 'Pie Crust',
            timeToBake: 'Bake Time',
            servings: 'Servings',
            rating: 'Rating'
        }
    return [<Pie key={'column names'} pie={pieColumns} />].concat(
        pies.map((pieInfo, index) => {
            return <Pie key={index} pie={pieInfo} />
        }))
    }

    /* actual thing that is being returned
    [
        <Pie key={index} pie={pieColumns} />
        <Pie key={index} pie={pieInfo} />
        <Pie key={index} pie={pieInfo} />
        <Pie key={index} pie={pieInfo} />
    ]
    */
    // code that referenced hard coded list of pies in file
    // const pieRows = () => {
    //     return hardCodedPies.map((pieInfo, index) => {
    //         return(
    //             <Card key={index} className="cardName">
    //                 <Pie piePie={pieInfo}/>
    //             </Card>
    //         )
    //     })
    // }

    useEffect(() => {
        fetch('http://localhost:3000/pie,'{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .then(json => setPies(json))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="mainDiv">
            {pieRows()}
        </div>
    );
};



export default Pies;