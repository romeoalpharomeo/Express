import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import './SingleProduct.css'
import axios from 'axios';
import { navigate } from '@reach/router';

const SingleProduct = (props) => {
    const [productDetails, setProductDetails] = useState({})

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/product/${props._id}`)
            .then(res=>{
                console.log("Retrieving product...")
                console.log(res)
                console.log("Got it.")
                setProductDetails(res.data.product)
            })
            .catch(err=>{
                console.log("Error: ", err)
            })
    }, [])

    const onDelete = (event) => {
        console.log("Deleting...")
        axios
            .delete(`http://localhost:8000/api/deleteProduct/${props._id}`)
            .then(res=>{
                console.log("Delete in progress...")
                console.log(res)
                navigate("/")

            })
            .catch(err=>console.log("Error: ", err))
    }

    return (
        <div className="App">
            <h3>Product Details</h3>
            <div className="productCard">
                <h3>{productDetails.title}</h3>
                <p>$ {productDetails.price}</p>
                <p>{productDetails.description}</p>
                <Link to="/" className="btn btn-info mx-1">Home</Link>
                <button onClick={onDelete} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default SingleProduct;