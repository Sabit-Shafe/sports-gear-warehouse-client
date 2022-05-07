import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [Items, setItems] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return (
        <div>
                <h1 className="text-success text-center mb-5 mt-3">Manage Inventories</h1>
                <div className="row">
                    {Items.map(Items => <ManageInventory
                    key = {Items._id}
                    items = {Items}
                    ></ManageInventory>)}
                
                </div>
        </div>
    );
};

export default ManageInventories;