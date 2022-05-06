import React from 'react';

const footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-5 bg-info'>
                <p className='text-white'><small>Visa Jenic copyright @ {year} </small></p>
            </footer>
        </div>
    );
};

export default footer;