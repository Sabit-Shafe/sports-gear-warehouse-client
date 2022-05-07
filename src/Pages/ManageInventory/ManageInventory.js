import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventory = ({items}) => {
    const {_id, name, price, quantity, supplierName} = items;
    console.log(items);
    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/items/${id}`);
    }
    
    return (
        <div className="container">
           <Table striped bordered hover>
  <thead  >
    <tr>
      <th>id</th>
      <th>Item Name</th>
      <th>Item Price</th>
      <th>Item Quantity</th>
      <th>Supplier Name</th>
      <th>Delete Item</th>
      <th>Item Details</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{price} <span>$</span></td>
      <td>{quantity}</td>
      <td>{supplierName}</td>
      <td className = " text-center"><HiOutlineTrash/></td>
      <Button onClick={() => navigateToItemDetail(_id)} className='btn btn-Primary text-success'>Details</Button>
    </tr>
  </tbody>
</Table> 
        </div>
    );
};

export default ManageInventory;