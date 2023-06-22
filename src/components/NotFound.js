import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="container">
                <h3 className='h2-notFound'>404 Page Not Found </h3>
                <p><Link to="/">Go to Home</Link></p>
            </div >
        </>
    )
}

export default NotFound;