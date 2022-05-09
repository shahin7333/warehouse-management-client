import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios'

const MyItems = () => {
    const [user]=useAuthState(auth);
    const [items,setItems]= useState([])
    useEffect(()=>{
        const getItems=async()=>{
            const email=user.email
            console.log(email)
            const url=`https://ancient-plains-18330.herokuapp.com/manage?email=${email}`
           const {data}= await axios.get(url)
           setItems(data);
        }
       getItems();
    },[user])
    return (
        <div>
            <h2 className='text-center mt-5'>my item: {items.length}</h2>
        </div>
    );
};

export default MyItems;