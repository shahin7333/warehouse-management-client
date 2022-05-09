import React, { useEffect, useState } from 'react';
import Bicycle from '../Bicycle/Bicycle';

const Bicycles = () => {
    const [bicycles,setBicycles]=useState([]);
    useEffect(()=>{
        fetch('https://ancient-plains-18330.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setBicycles(data));
    },[]);
    return (
        <div>
            <h2 className='text-center my-4'>READY TO SHIP BIKES</h2>
            <div className='row mx-5'>
            {
                bicycles.map(bicycle=><Bicycle key={bicycle._id} bicycle={bicycle}></Bicycle>)
            }
            </div>
        </div>
    );
};

export default Bicycles;