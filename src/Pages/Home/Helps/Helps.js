import React, { useEffect, useState } from 'react';
import Help from '../Help/Help';

const Helps = () => {
    const [support, setSupport] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/support')
            .then(res => res.json())
            .then(data => setSupport(data));
    }, [])


    return (
        <div className="">
            <div className="container">
                <h1 className="text-success text-center mb-3">Support</h1>
                <div className="row">
                    {support.map(support => <Help
                        key={support._id}
                        support={support}
                    ></Help>)}
                </div>
            </div>
        </div>
    );
};

export default Helps;