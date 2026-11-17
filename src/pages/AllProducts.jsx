import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router"
function AllProducts(){
    const [ products, setProducts ] = useState([])

    async function getAllProducts(){
        const response = await axios.get(import.meta.env.VITE_BASE_URL+ '/products')
        console.log(response.data)
        setProducts(response.data)
    }

    // useEffect takes 2 arguement
    // 1. function that will run
    // 2. dependancy array
    useEffect(()=>{
        getAllProducts()
    },[])

    return(
        <div>
            <h1>All Products</h1>
            {products.map((oneProduct)=>
            <div key={oneProduct._id}>
                <p>Name:{oneProduct.title}</p>
                <Link to={`/products/${oneProduct._id}`}>See Details</Link>
            </div>
            )}
        </div>
    )
}

export default AllProducts