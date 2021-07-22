import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import { Link } from '@reach/router';

const AddAuthorForm = (props) => {
    const [name, setName] = useState("");
    const [deleteOrAddAuthor, setDeleteOrAddAuthor] = useState(false);

    const [formErrors, setFormErrors] = useState({});

    const onSubmithandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/createAuthor', {
            name,
        })
            .then(res=>{
                console.log("Response: ", res)
                if(!res.data.errors) {
                    console.log(deleteOrAddAuthor)
                    setDeleteOrAddAuthor(!deleteOrAddAuthor)
                    console.log(deleteOrAddAuthor)
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
        <div>
        <Link to={`/`}>Home</Link>
        <form className="mainForm mb-3" onSubmit={onSubmithandler} >
            <div >
                <h3>Enter Author Name</h3>
                <input type="text" onChange={event=>setName(event.target.value)} placeholder="Enter Author Name" />
                {
                    formErrors.name ?
                        <p style={{color:'red'}}>{ formErrors.name.message }</p> :
                        ''
                }
            </div>
            <a className="btn btn-danger m-2" href="/" >Cancel</a> 
            <input type="submit"/>
        </form>
        
        </div>
    )
    
}

export default AddAuthorForm;