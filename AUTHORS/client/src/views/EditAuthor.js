import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';

const EditAuthor = (props) => {
    const [authorDetails, setAuthorDetails] = useState({
        name:'',
    })

    const [formErrors, setFormErrors] = useState({})

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/author/${props._id}`)
            .then(res=>{
                console.log("Retrieving author...")
                console.log(res)
                console.log("Got it.")
                setAuthorDetails(res.data.author)
            })
            .catch(err=>{
                console.log("Error: ", err)
            })
    }, [])

    const onChangeHandler = (event) => {
        console.log("Changes")
        setAuthorDetails({
            ...authorDetails,
            [event.target.name]: event.target.value,

        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:8000/api/updateExistingAuthor/${props._id}`, authorDetails)
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
            <Link to={`/`}>Home</Link>
            <form onSubmit={onSubmitHandler}>
            <div >
                <h3>Edit Author Information</h3>
                <input onChange={onChangeHandler} type="text" name="name" value={authorDetails.name}/>
                {
                    formErrors.name ?
                        <p style={{color:'red'}}>{ formErrors.name.message }</p> :
                        ''
                }
            </div>
            <a className="btn btn-danger" href="/" >Cancel</a>
            <input type="submit" value = "Upload"/>
        </form>

        </div>
    );
};

export default EditAuthor;