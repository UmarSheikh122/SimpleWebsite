import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../img/web.png'
import './Home.css'
function Common({name,desc,btnName,visit}) {
    return (
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 my-auto pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>
                                {name}
                                <strong className="brand-name"> OnlineTech</strong>
                            </h1>
                            <h3 className="my-3"> 
                                {desc}
                            </h3>
                        <div className="mt-3">
                            <NavLink to={visit} className="btn btn-secondary">
                                {btnName}
                            </NavLink>
                        </div>
                            
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header_img">
                            <img src={web} className="img-fluid animated" alt="Common img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );  
  }
  
  export default Common;
  