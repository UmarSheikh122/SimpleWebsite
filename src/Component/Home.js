import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../img/web.png'
import Common from './Common';
import './Home.css'
function Home() {
    return (
        <Common
            name = "Grow your business with"
            desc = "We are the team of talented developers"
            visit = "/service"
            btnName = "Get Started"
        />
    );  
  }
  
  export default Home;
  