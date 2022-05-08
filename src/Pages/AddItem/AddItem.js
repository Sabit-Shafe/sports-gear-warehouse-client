import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://protected-tor-63915.herokuapp.com/addItems`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                result = ("");
            })

    };
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2>Please add a Item</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 100 })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='supplierName' type="text" {...register("supplierName")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;