import React, {useState} from 'react';
import axios from 'axios';
import './ProductForm.css'
import {navigate} from '@reach/router'

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const onSubmithandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description,
        })
            .then(res=>{
                console.log("Response: ", res)
                if(!res.data.errors) {
                    console.log(props.deleteOrAddProduct)
                    props.setDeleteOrAddProduct(!props.deleteOrAddProduct)
                    console.log(props.deleteOrAddProduct)
                    navigate("/")
                }
                else {

                    console.log("Please fill form out properly.")
                    setFormErrors(res.data.errors)
                }
            })
            .catch(err=>console.log("Error: ", err))

    }

    return (
        <form className="mainForm mb-3" onSubmit={onSubmithandler} >
            <div >
                <h3>Enter Product Information</h3>
                <input className="form-control mb-2" type="text" onChange={event=>setTitle(event.target.value)} placeholder="Enter Product Title" />
                {
                    formErrors.title ?
                        <p style={{color:'red'}}>{ formErrors.title.message }</p> :
                        ''
                }
            </div>
            <div>

                <input className="form-control mb-2" type="text" onChange={event=>setPrice(event.target.value)} placeholder="Enter Product Price" />
                {
                    formErrors.price ?
                        <p style={{color:'red'}}>{ formErrors.price.message }</p> :
                        ''
                }
            </div>
            <div>

                <textarea className="form-control mb-3" type="text" onChange={event=>setDescription(event.target.value)} placeholder="Enter Product Description" />
                {
                    formErrors.description ?
                        <p style={{color:'red'}}>{ formErrors.description.message }</p> :
                        ''
                }
            </div>
            <input className="btn btn-primary" type="submit"/>
        </form>
    )
    
}

export default ProductForm;