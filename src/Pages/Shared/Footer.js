import React from 'react';

const footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-5' style={{backgroundColor: 'aquamarine'}}>
                <p className='text-dark'><small>Sports Gear copyright @ {year} </small></p>
            </footer>
        </div>
    );
};

export default footer;