import React, { useEffect, useState } from 'react';
// import './ProductList.css';
import {Link} from '@reach/router';
import axios from 'axios';
// import { navigate } from '@reach/router';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const [deleteOrAddAuthor, setDeleteOrAddAuthor] = useState(false);

    useEffect(()=>{
        axios
            .get('http://localhost:8000/api/allAuthors')
            .then(res => {
                setAuthors(res.data.authors)
                console.log("Authors set...")
            })
            .catch(err => console.log("Error with axios: ", err))
    }, [deleteOrAddAuthor] )

    const onDelete = (event, authorToDelete) => {
        console.log("Deleting...")
        axios
            .delete(`http://localhost:8000/api/deleteAuthor/${authorToDelete}`)
            .then(res=>{
                console.log("Delete in progress...")
                console.log(res)
                setDeleteOrAddAuthor(!deleteOrAddAuthor)
                

            })
            .catch(err=>console.log("Error: ", err))
    }

    return (
        <div>
            <Link to={`/createAuthor`}>Add Another Author</Link>
            {
                authors
                    .sort(function(a, b) {
                        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    })
                    .map((author, idx)=>{
                        return <div key={idx} className="productList" >
                                <h3>{author.name}</h3>
                                <Link to={`/authors/edit/${author._id}`} className="btn btn-warning mx-1">Edit</Link>
                                <button onClick={(event)=>onDelete(event, author._id)} className="btn btn-danger">Delete</button>
                            </div>
                })
            }
        </div>
    )
}

export default AuthorList;