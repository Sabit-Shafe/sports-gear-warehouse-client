import React, { useState } from 'react';
import {Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';
// import { useForm } from 'react-hook-form';



const ItemDetail = () => {
    const { ItemId } = useParams();
    const [shouldRemount, setShouldRemount] = useState(false)
    const [Item] = useItemDetails(ItemId, shouldRemount);
    const [updatedQuantity, setUpdatedQuantity] = useState()

    const navigate = useNavigate();
    const navigateToItemDetail = _id =>{
        navigate(`/inventory`);
    }

    const handleDelivered = (quantity) => {
        
        const updatedQuantity = (parseInt(quantity) -1).toString();

        const url = `https://protected-tor-63915.herokuapp.com/items/${ItemId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            
            },
            body: JSON.stringify({updatedQuantity})

        })
        .then(res => res.json())
        .then(data =>{
            console.log('succsessful', data);
            setShouldRemount(!shouldRemount)
            // Alert('quantity updated')
        })

    }
    const HandleAddQuantity = (newQuantity, oldQuantity) => {
        const updatedQuantity = (parseInt(newQuantity) + parseInt(oldQuantity)).toString();

        // const updatedQuantity = {finalQuantity}
        const url = `https://protected-tor-63915.herokuapp.com/items/${ItemId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            
            },
            body: JSON.stringify({updatedQuantity})

        })
        .then(res => res.json())
        .then(data =>{
            console.log('succsessful', data);
            setUpdatedQuantity("");
            setShouldRemount(!shouldRemount)
        })

    }



    
    return (
        <div>
        <div className="d-flex justify-content-evenly">
        <div className="g-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="" src={Item.img} />
                <Card.Body>
                    <Card.Title className="text-info">{Item.name}</Card.Title>
                    <Card.Text>
                        {Item.description}
                    </Card.Text>
                    <h3>Price: {Item.price}<span>$</span></h3>
                    <h3>quantity: {Item.quantity > 0 ? Item.quantity : "Stock out"}</h3>
                    <h5>supplierName: {Item.supplierName}</h5>
                    <Button   onClick={()=> handleDelivered (Item.quantity)} className='btn btn-primary'>Delivered</Button>
                </Card.Body>
            </Card>
            {/* disabled={Item.quantity === 0 ? false : true} */}
        </div>
        <div>
        <h2>Please add a quantity</h2>
                <form className='d-flex flex-column w-75' >
                    {/* <input onChange={(e) => handleUpdateQuantity(e)} value={updatedQuantity} className='mb-2' placeholder='Quantity' type="number" {...register("updatedQuantity", { required: true, maxLength: 20 })} /> */}
                    <input className='mb-2' placeholder='Quantity' type="number" onChange={(e) => setUpdatedQuantity(parseInt(e.target.value))} value={updatedQuantity} />
                    <Button onClick={()=>HandleAddQuantity(updatedQuantity, Item.quantity)}> Add Quantity</Button>
                </form>

        </div>
       
     </div>
     <Button onClick={() => navigateToItemDetail()} className='btn btn-primary '>Stock Update</Button>
     </div>
     
    );
};

export default ItemDetail;

