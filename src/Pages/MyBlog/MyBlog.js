import React from 'react';
import { Table } from 'react-bootstrap';
import PageTitles from '../../Shared/PageTitles/PageTitles';
import './MyBlog.css'

const MyBlog = () => {
    return (
        <div className='mt-4'>
            <PageTitles title="Blogs"></PageTitles>
            <div> <h4 className='text-center'>What is difference between Javascript vs Node.js?</h4></div>
         <div className='row bg-light p-2 py-5 rounded  java-node d-flex m-5'>
            
             <div className='bg-light  rounded col-lg-6 col-sm-12 col-md-12'>
                 <h4 className='text-center'>Javascript</h4>
                 <p className='text-center'>
                     <li>Programming language.</li>
                     <li>Use for any client side activity for a web application.</li>
                     <li>Javascript run any browser.</li>
                 </p>
             </div>
             <div className='col-lg-6 col-sm-12 col-md-12'>
                 <h4  className='text-center'>Node.js</h4>
                 <p className='text-center'>
                     <li>Interpreter and environment for Javascript.</li>
                     <li>Use for accessing non-blocking operation of any operatin system.</li>
                     <li>Node.js only runs on the V8 engine used by chrome.</li>
                 </p>
             </div>
         </div>
         <div>  <h4 className='text-center'>When should you use nodejs and when should you use mongodb?</h4></div>
         <div className='row  bg-light p-2 py-5 rounded  mongo-node d-flex m-5'>
           
             <div className='rounded col-lg-6 col-sm-12 col-md-12'>
                 <h4 className='text-center'>Node.js</h4>
                 <p>
                  Node.js is used for non-blocking,event-driven servers, due to its single threaded nature. It's used for traditional web sites and back-end Api services, but was designed with real-time, push-based architectures in mind.
                 </p>
             </div>
             <div className='col-lg-6 col-sm-12 col-md-12'>
                 <h4  className='text-center'>Mongodb</h4>
                 <p>
                    SQL. NoSQL databases like MongoDB are a good choice when your data is documentcentric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are repidly prototyping and a few othe use cases.
                 </p>
             </div>
         </div>
         <div> <h4 className='text-center'>What is Differences between sql and nosql databases.?</h4></div>
         <div className='row bg-light py-5 p-2 rounded  sql-nosql d-flex m-5'>
            
             <div className='bg-light rounded col-lg-6 col-sm-12 col-md-12'>
                 <h4 className='text-center'>NoSQL</h4>
                 <p className='text-center'>
                     <li>Horizontally scable</li>
                     <li>Dynamic schema</li>
                     <li>Non-rational,Distributed Database</li>
                     <li>Documented based, Graph based, Key-value pair</li>
                     <li>Largely preferred for large datasets</li>
                     <li>Uses UnSQL</li>
                 </p>
             </div>
             <div className='col-lg-6 col-sm-12 col-md-12'>
                 <h4  className='text-center'>SQL</h4>
                 <p className='text-center'>
                     <li>Vertically scalable.</li>
                     <li>Pre-Define schema</li>
                     <li>Rational database</li>
                     <li>Table based database</li>
                     <li>Not preferred for large datasets</li>
                     <li>Uses SQL</li>
                 </p>
             </div>
         </div>
        </div>
    );
};

export default MyBlog;