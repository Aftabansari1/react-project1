import React from 'react';
import rocket from "../src/images/rocket.jpg";
import {NavLink} from 'react-router-dom';
import Common from './Common';
const Home = () => {
    return(
        <>
            <Common 
                 name='Grow Your Business with' 
                 imgsrc={rocket} 
                 visit='/service' 
                 btname='Get Started'
            />
        </>
    );
};
export default Home;