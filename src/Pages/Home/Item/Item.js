import Button  from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';


const Items = ({items}) => {
    const {_id, name, img, description, price, quantity, supplierName} = items;
    console.log(items);
    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/items/${id}`);
    }
    
    
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="" src={img} />
                <Card.Body>
                    <Card.Title className="text-info">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>Price: {price}<span>$</span></h3>
                    <h3>quantity: {quantity}</h3>
                    <h5>supplierName: {supplierName}</h5>
                    <Button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Stock Update</Button>
                </Card.Body>
            </Card>
            

        </div>
    );
};

export default Items;