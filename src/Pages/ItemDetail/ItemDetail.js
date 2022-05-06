import React, { } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';
import { useForm } from 'react-hook-form';



const ItemDetail = () => {
    const { ItemId } = useParams();
    const [Item] = useItemDetails(ItemId);
    const { register} = useForm();

    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/inventory`);
    }

    const handleDelivered = (quantity) => {
        
        const newQuantity =parseInt(quantity) -1;
        console.log(newQuantity);

        const updatedQuantity = {newQuantity}
        const url = `http://localhost:5000/items/${ItemId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            
            },
            body: JSON.stringify(updatedQuantity)

        })
        .then(res => res.json())
        .then(data =>{
            console.log('succsessful', data);
            // Alert('quantity updated')
        })

    }
    const HandleAddQuantity = (quantity) => {
        
        const newQuantity =parseInt(quantity) + 1;
        console.log(newQuantity);

        const updatedQuantity = {newQuantity}
        const url = `http://localhost:5000/items/${ItemId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            
            },
            body: JSON.stringify(updatedQuantity)

        })
        .then(res => res.json())
        .then(data =>{
            console.log('succsessful', data);
            
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
                    <h3>quantity: {Item.quantity}</h3>
                    <h5>supplierName: {Item.supplierName}</h5>
                    <Button  onClick={()=> handleDelivered (Item.quantity)} className='btn btn-primary'>Delivered</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
        <h2>Please add a quantity</h2>
                <form className='d-flex flex-column w-75' >
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <Button onClick={()=>HandleAddQuantity (Item.quantity)}> Add Quantity</Button>
                </form>

        </div>
       
     </div>
     <Button onClick={() => navigateToItemDetail()} className='btn btn-primary '>Stock Update</Button>
     </div>
     
    );
};

export default ItemDetail;

