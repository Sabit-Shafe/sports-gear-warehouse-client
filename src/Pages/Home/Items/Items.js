import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Services = () => {
    const [Items, setItems] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    return (
        <div className="">
            <div className="container">
                <h1 className="text-success text-center">My Consultency Types</h1>
                <div className="row">
                    {Items.map(Items => <Item
                    key = {Items._id}
                    items = {Items}
                    ></Item>)}
                </div>
            </div>
        </div>
    );
};

export default Services;