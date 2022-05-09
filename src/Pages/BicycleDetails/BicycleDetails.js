import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './BicycleDetails.css'

import { useNavigate, useParams } from 'react-router-dom';
import PageTitles from '../../Shared/PageTitles/PageTitles';

const BicycleDetails = () => {
    const {bicycleId}=useParams();
    const [inventory,setInventory]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        const url=`https://ancient-plains-18330.herokuapp.com/inventory/${bicycleId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventory(data))
    },[])
    const navigateToAllItem=e=>{
navigate('/manageItems')
    }
    return (
        <div className='mt-5'>
            <PageTitles title="inventory"></PageTitles>
    <div className="container w-75 mx-auto">
        <div className="row g-5">
          <div className="col-md-4 col-sm-12 col-lg-6">
            <img
              className="img-fluid rounded-start"
              style={{ width: '800px' }}
              src={inventory.img}
              alt=""
            />
          </div>
          <div className="col-md-8 col-sm-12 col-lg-6">
          <Card className='border-0'>
       
        <Card.Body>
          <Card.Title>{inventory.name}</Card.Title>
          <Card.Text>
            <small>{inventory.description}</small>
          </Card.Text>
          <Card.Text className='price'>
             Price: {inventory.price}
          </Card.Text>
          <Card.Text className=''>
             Quantity: {inventory.quantity}
          </Card.Text>
          <Card.Text className=''>
             Company: <b>{inventory.supplier}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         <button className='update-btn p-1 px-3 border-0 rounded'>Delivered</button>
        </Card.Footer>
      </Card>
          </div>
        </div>
      </div>
      <div className='manage-btn container mx-auto mt-5'>
        <button onClick={navigateToAllItem} className='m-btn update-btn  p-1 px-3 border-0 rounded'>Manage Inventory</button>
      </div>
       <div className='text-center mt-5'>
         <h3>Restocks Your Items</h3>
         <input className='mt-3 border-0 bg-light py-2 px-4 rounded-top' cl placeholder='Number' type="text" />
       </div>
        </div>
    );
};

export default BicycleDetails;