import React, { } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';
import { useForm } from 'react-hook-form';


const ItemDetail = () => {
    const { ItemId } = useParams();
    const [Item] = useItemDetails(ItemId);
    const { register, handleSubmit } = useForm();

    return (
        <div>
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
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
                    {/* <Button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Book: {name}</Button> */}
                </Card.Body>
            </Card>
        </div>
        <div>

        </div>
     </div>
    );
};

export default ItemDetail;

