import React, { } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';
import { useForm } from 'react-hook-form';


const ItemDetail = () => {
    const { ItemId } = useParams();
    const [Item] = useItemDetails(ItemId);
    const { register, handleSubmit } = useForm();

    const handleDelivered = (quantity) => {
        const newQuantity =parseInt(quantity -1);
        const updatedQuantity = {newQuantity}
        const url = `http://localhost:5000//items/${ItemId}`
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
            Alert('quantity updated')
        })

    }

    const onSubmit = data => {

    }

    return (
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
                    <Button  onClick={handleDelivered}className='btn btn-primary'>Delivered</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
        <h2>Please add a quantity</h2>
                <form className='d-flex flex-column w-75' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                </form>

        </div>
     </div>
    );
};

export default ItemDetail;

