import { useParams } from "react-router"
import axios from 'axios'
import {useState, useEffect} from 'react'
function ProductsDetails() {

    const [ products, setProducts ] = useState(null)

    const {productId} = useParams()
    console.log(productId)
  
     async function getProduct (){
       const respone = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
       setProducts(respone.data)
     }

     useEffect(()=>{
        getProduct()
    },[])

  return (
    <div>
        <h1>Product Details</h1>
        {products ? 
        <>
        <p>Title: {products.title}</p>
        <p>Descreption: {products.description}</p>
        <p>Category:{products.category}</p>
        <p>Price:{products.price}</p>
        <p>Quantity: {products.quantity}</p>
        </> : null}
        <p></p>
    </div>
  )
}

export default ProductsDetails