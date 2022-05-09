import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitles from '../../Shared/PageTitles/PageTitles';

const About = () => {
    return (
        <div className='mt-5'>
            <PageTitles title="About"></PageTitles>
           <div className='m-5'>
           <h3 className='text-center'>Know details about us</h3>
            <p>Bicyclebd.com is the first and largest web portal about bicycle in Bangladesh. We have started our journey on 13th August, 2010.You can trust us to do work small and small work. After doing job with us,you know about our warehouse policy,and easily trust us.</p>
            <div className='m-5'>
                <h3 className='text-center'>Which brand bicycle is best in Bangladeh?</h3>
                <p>A mountain bike is built for off-road. So, they are strong, long-lasting, and lightweight. So, popular mountain bike brands in Bangladesh are Veloce, Trek, Duranta, Phoenix, Upland, Camp, Hero, Atlas, Bianchi, etc.</p>
            </div>
           </div>
        </div>
    );
};

export default About;