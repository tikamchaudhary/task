import React from 'react';
import ElevateStyle from './Elevate.module.css';

const Elevate = () => {
    return (
        <>
            <div>
                <h3 className='text-center'>Elevate your deck</h3>
                <p><strong> offers unparalleled pitch</strong> deck redesign services, elevating start-up presentations to new heights. Our team of skilled designers and industry experts meticulously assess existing pitch decks, identifying areas for improvement, and transforming them into <strong>visually captivating</strong> </p>
                <p><strong>and persuasive narratives.</strong> Unlike competitors, Pitch Catalyst's bespoke approach ensures a comprehensive understanding of each start-up's unique value proposition, enabling us to craft pitch decks that resonate. Experience the Pitch Catalyst difference today – contact us to elevate your deck and secure your start-up's <strong>future success.</strong></p>
            </div>
            <div><button className={ElevateStyle.btn}>Elevate now</button></div>
        </>
    )
}

export default Elevate;