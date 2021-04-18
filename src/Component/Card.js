import React from 'react'
import { NavLink } from 'react-router-dom';
import service from '../img/service.jpg'

const Card = () => {
    return (
        <div className="col-md-4 col-10 mx-auto">
        <div className="card margin-class">
        <img className="card-img-top" src={service} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/home" className="btn btn-primary">Go somewhere</NavLink>
        </div>
    </div>
    </div>
    )
}
export default Card;