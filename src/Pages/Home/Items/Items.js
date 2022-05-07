import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const Services = () => {
    const [Items, setItems] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/inventory`);
    }

    return (
        <div className="">
            <div className="container">
                <h1 className="text-success text-center">Inventory Items</h1>
                <div className="row">
                    {Items.map(Items => <Item
                    key = {Items._id}
                    items = {Items}
                    ></Item>)}
                
                </div>
                <div className="container text-center mb-3 ">
                <Button onClick={() => navigateToItemDetail()} className='btn btn-success mt-5 w-25'>Manage Inventory</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;