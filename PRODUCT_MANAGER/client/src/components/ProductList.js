import React from 'react';
import './ProductList.css';
import {Link} from '@reach/router';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductList = (props) => {

    return (
        <div>
            {
                props.products.map((product, idx)=>{
                    return <div key={idx} className="productList" >
                                <h3>{product.title}</h3>
                                <Link to={`/products/${product._id}`} className="btn btn-info mx-1">View</Link>
                                <Link to={`/products/edit/${product._id}`} className="btn btn-warning mx-1">Edit</Link>
                                <button onClick={(event)=>props.onDelete(event, product._id)} className="btn btn-danger">Delete</button>
                            </div>
                })
            }
        </div>
    )
}

export default ProductList;