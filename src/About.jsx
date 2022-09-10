import React from 'react'
import Common from './Common';
import rocket from "../src/images/rocket.jpg";
const About = () => {
    return(
        <>
            <Common 
                name='Welcome To About Page' 
                imgsrc={rocket} 
                visit='/contact' 
                btname='Contact NOw'
            />
        </>
    );
};
export default About;