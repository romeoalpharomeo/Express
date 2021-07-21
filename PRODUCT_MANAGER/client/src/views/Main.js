import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [deleteOrAddProduct, setDeleteOrAddProduct] = useState(false);

    useEffect(()=>{
        axios
            .get('http://localhost:8000/api/allProducts')
            .then(res => {
                setProducts(res.data.products)
                console.log("Products set...")
            })
            .catch(err => console.log("Error with axios: ", err))
    }, [deleteOrAddProduct] )

    const onDelete = (event, productToDelete) => {
        console.log("Deleting...")
        axios
            .delete(`http://localhost:8000/api/deleteProduct/${productToDelete}`)
            .then(res=>{
                console.log("Delete in progress...")
                console.log(res)
                setDeleteOrAddProduct(!deleteOrAddProduct)
                

            })
            .catch(err=>console.log("Error: ", err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm deleteOrAddProduct={deleteOrAddProduct} setDeleteOrAddProduct={setDeleteOrAddProduct}/>
            <hr></hr>
            <ProductList products={products} onDelete={onDelete} />
        </div>
    )
}


export default AllProducts;