import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitles from '../../Shared/PageTitles/PageTitles';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [manages,setManages]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('https://ancient-plains-18330.herokuapp.com/manage')
        .then(res=>res.json())
        .then(data=>setManages(data))
    },[])
 const navigateToAddProduct=e=>{
     navigate('/addItems')
 }

    return (
        <div>
            <PageTitles title="ManageItems"></PageTitles>
            <h4 className='text-center mt-5'>Manage Items</h4>
            <div className='row mx-2'>
                {
                    
                        manages.map(manage=><ManageItem
                        key={manage._id}
                        manage={manage}
                        ></ManageItem>)
                    
                }
            </div>
            <div className='manage-btn container mx-auto mt-5'>
        <button onClick={navigateToAddProduct} className='m-btn update-btn  p-1 px-3 border-0 rounded'>Add New Product</button>
      </div>
        </div>
    );
};

export default ManageItems;