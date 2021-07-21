import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct = (props) => {
    const [productDetails, setProductDetails] = useState({
        title:'',
        price:'',
        description:'',
    })

    const [formErrors, setFormErrors] = useState({})

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

    const onChangeHandler = (event) => {
        console.log("Changes")
        setProductDetails({
            ...productDetails,
            [event.target.name]: event.target.value,

        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:8000/api/updateExistingProduct/${props._id}`, productDetails)
            .then(res=>{
                console.log("Response: ", res)
                if(res.data.error) {
                    console.log("Please fill form out properly.")
                    setFormErrors(res.data.error.errors) 
                }
                else {
                    navigate("/")
                    
                }
            })
            .catch(err=>console.log("Error: ", err))

    }

    return (
        <div>

            <form onSubmit={onSubmitHandler} className="mainForm mb-3">
            <div >
                <h3>Edit Product Information</h3>
                <input onChange={onChangeHandler} className="form-control mb-2" type="text" name="title" value={productDetails.title}/>
                {
                    formErrors.title ?
                        <p style={{color:'red'}}>{ formErrors.title.message }</p> :
                        ''
                }
            </div>
            <div>

                <input onChange={onChangeHandler} className="form-control mb-2" type="text" name="price" value={productDetails.price}/>
                {
                    formErrors.price ?
                        <p style={{color:'red'}}>{ formErrors.price.message }</p> :
                        ''
                }
            </div>
            <div>

                <textarea onChange={onChangeHandler} className="form-control mb-3" type="text" name="description" value={productDetails.description}/>
                {
                    formErrors.description ?
                        <p style={{color:'red'}}>{ formErrors.description.message }</p> :
                        ''
                }
            </div>
            <input className="btn btn-primary" type="submit"/>
        </form>

        </div>
    );
};

export default EditProduct;