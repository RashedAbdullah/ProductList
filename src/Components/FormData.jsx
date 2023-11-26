import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { productDetailsStorageData } from './PrducatStorage';
import ProductTable from './ProductTable';
import './FormData.css';

const FormData = () => {
    const [productId, setProductId] = useState("");
    const [ProductName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [color, setColor] = useState("");

    const [productDetails, setProductDetails] = useState(productDetailsStorageData());

    // Clear input box:
    const clearInput = ()=>{
        setProductId("");
        setProductName("");
        setPrice("");
        setQuantity("");
        setColor("");
    }

    // Catch all data as array:
    const catchAllData = ()=>{
        const produtctFullData = {
            productId,
            ProductName,
            price,
            quantity,
            color
        }
        setProductDetails([...productDetails, produtctFullData]);
        clearInput();
    }

    // Form handle:
    const handleFormData = (e)=>{
        e.preventDefault();
       catchAllData();
    }

    // Storare all data:
    useEffect((()=>{
        localStorage.setItem("ProductDataInStorage", JSON.stringify(productDetails))
    }),[productDetails])

  return (
    <div className='mainFormDiv'>
        <form onSubmit={handleFormData} action="">
            <div className='inputBoxwithlabel'>
            <label htmlFor="">Product id: </label>
            <input onChange={(e)=>setProductId(e.target.value)} value={productId} type="text" placeholder='input id' required/>
            </div>

            <div className='inputBoxwithlabel'>
            <label htmlFor="">Product name: </label>
            <input onChange={(e)=>(setProductName(e.target.value))} value={ProductName} type="text" placeholder='Input Product name' required/>
            </div>
            
            <div className='inputBoxwithlabel'>
            <label htmlFor="">Product price: </label>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} type="text" placeholder='Input Product price' required/>
            </div>
            
            <div className='inputBoxwithlabel'>
            <label htmlFor="">Quantity: </label>
            <input onChange={(e)=>setQuantity(e.target.value)} value={quantity} type="text" placeholder='Input quantity' required/>
            </div>

            <div className='inputBoxwithlabel'>
            <label htmlFor="">Colors: </label>
            <select onChange={(e)=>setColor(e.target.value)} name="" id="" value={color}>
                <option >Select color:</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
            </div>

            <button>Add prduct</button>
        </form>

        <ProductTable productDetails={productDetails} setProductDetails={setProductDetails}/>
    </div>
  )
}

export default FormData;