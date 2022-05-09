import React from 'react'
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Bicycle.css';

const Bicycle = ({ bicycle }) => {
  const { name, _id,img, price, description, quantity, supplier } = bicycle;
  const navigate=useNavigate();
  const navigateToBicycle=id=>{
navigate(`/bicycle/${id}`);
  }
  return (
   
      <Card className='card border-0 mx-0 col-sm-12 col-md-6 col-lg-4 m-3'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <small>{description}</small>
          </Card.Text>
          <Card.Text className='price'>
             Price: {price}
          </Card.Text>
          <Card.Text className=''>
             Quantity: {quantity}
          </Card.Text>
          <Card.Text className=''>
             Company: <b>{supplier}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         <button onClick={()=>navigateToBicycle(_id)} className='update-btn p-1 px-3 border-0 rounded'>Update</button>
        </Card.Footer>
      </Card>

  )
}

export default Bicycle
