import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import useItems from '../../hooks/useItems';
// import { useState } from 'react'

const ManageInventory = (props) => {

  const { items } = props;
  const { shouldRemount, setShouldRemount } = props;
  console.log(items);
  const navigate = useNavigate();
  const navigateToItemDetail = id => {
    navigate(`/items/${id}`);
  }
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://protected-tor-63915.herokuapp.com/items/${id}`;
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
    <div className=" container">
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
            <td>{items._id}</td>
            <td>{items.name.slice(0, 10)}...</td>
            <td>{items.price} <span>$</span></td>
            <td>{items.quantity}</td>
            <td>{items.supplierName.slice(0, 10)}...</td>
            <td onClick={() => handleDelete(items._id)} className=" text-center"><HiOutlineTrash /></td>
            <td onClick={() => navigateToItemDetail(items._id)} className="text-center">Details</td>
            {/* <Button onClick={() => navigateToItemDetail(_id)} className='btn btn-Primary text-success'>Details</Button> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;