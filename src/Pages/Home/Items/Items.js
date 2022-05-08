import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const Services = () => {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://protected-tor-63915.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/Inventory`);
    }

    return (
        <div className="">
            <div className="container">
                <h1 className="text-success text-center mt-5">Inventory Items</h1>
                <div className="row">
                    {Items.slice(0, 6).map(Items => <Item
                        key={Items._id}
                        items={Items}
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