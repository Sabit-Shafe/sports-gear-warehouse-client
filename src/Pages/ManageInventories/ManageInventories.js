import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';
// import { useItems } from '../../hooks/useItems'

const ManageInventories = () => {
    const [Items, setItems] = useState([]);
    const [shouldRemount, setShouldRemount] = useState(false)
    // const [item] = useItems(shouldRemount)

    useEffect( ()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [shouldRemount])

    const navigate = useNavigate();
    const navigateToAddItem =()=>{
        navigate('/AddItem');
    }

    return (
        <div>
                <h1 className="text-success text-center mb-5 mt-3">Manage Inventories</h1>
                <div className="row">
                    {Items.map(Items => <ManageInventory
                    key = {Items._id}
                    items = {Items}
                    shouldRemount={shouldRemount}
                    setShouldRemount={setShouldRemount}
                    
                    ></ManageInventory>)}
                </div>

                <div className="text-center mb-5 mt-3">
                <Button onClick={() => navigateToAddItem()} className='btn btn-Primary'>Add New Item</Button>
                </div>
        </div>
    );
};

export default ManageInventories;