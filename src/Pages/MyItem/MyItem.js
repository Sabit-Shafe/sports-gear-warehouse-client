import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyItem = (props) => {
    const {items} = props;
    const {_id, name, price, quantity, supplierName, shouldRemount, setShouldRemount} = props;
    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/items/${id}`);

    }
        const handleDelete = id =>{
            const proceed = window.confirm('Are you sure?');
            if(proceed){
                const url = `http://localhost:5000/items/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // const remaining = item.filter(item => item._id !== id);
                    // setItem(remaining);
                    setShouldRemount(!shouldRemount)
      
                })
              }
            }
    
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="" src={items.img} />
                <Card.Body>
                    <Card.Title className="text-info">{name}</Card.Title>
                    <Card.Text>
                        {items.description}
                    </Card.Text>
                    <h3>Price: {items.price}<span>$</span></h3>
                    <h3>quantity: {items.quantity}</h3>
                    <h5>supplierName: {items.supplierName}</h5>
                    <Button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Stock Update</Button>
                    <Button onClick={() => handleDelete(items._id)} className='btn btn-primary ms-3'>Delete Item</Button>
                </Card.Body>
            </Card>
            

        </div>
    );
};

export default MyItem;