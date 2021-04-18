import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
function Service() {
    const arr = [1,2,3,4,5,6];
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">Our Services</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {arr.map(index => <Card/>)}
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </>        
    );
  }
  
  export default Service;
  