import React from 'react';
import './Owner.css'

const Owner = () => {
    return (
        <div className='owner mt-5'>
    <h2 className='header-owner text-center'>OWNER DETAILS</h2>
    <div className='team'>
        <div className='team-member'>
            <div>
                <img className='owner-img' src="https://i.ibb.co/PspphVP/owner4.png" alt="" />
            </div>
            <h4 className='name mb-3'>Jhon Smith</h4>
            <b>  <p className='para'>Businessman</p></b>
            <small>Hobby to drive bi-cycle.so why this warehouse build.And he is a very decent</small>
        </div>
        <div className='team-member'>
        <div>
                <img className='owner-img' src="https://i.ibb.co/qpQG1CL/owner3.png" alt="" />
            </div>
        <h4 className='name mb-3'>Tom Plaot</h4>
          <b>  <p className='para'>Businessman</p></b>
            <small>Hobby to drive bi-cycle.so why this warehouse build.And he is a very decent</small>
        </div>
        <div className='team-member'>
        <div>
                <img className='owner-img' src="https://i.ibb.co/W69ysdy/owner2.png" alt="" />
            </div>
        <h4 className='name mb-3'>Gem Gamani</h4>
        <b>  <p className='para'>Businessman</p></b>
            <small>Hobby to drive bi-cycle.so why this warehouse build.And he is a very decent</small>
        </div>
        
    </div>
        </div>
    );
};

export default Owner;