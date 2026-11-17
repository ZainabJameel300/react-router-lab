import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateProduct() {
  const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: 0,
        quantity: 0,
  });

  const navigate = useNavigate()

  
  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value })
  }


  
  async function handleSubmit(event){
    event.preventDefault() // Stops the form from refreshing and disables default behavior

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products`,formData)

     navigate('/products/'+ response.data._id)
    
  }

      return(
        <div>
            <h1> Create Product</h1>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
        type="text"
        value={formData.title}
        id="title"
        name="title"
        onChange={handleChange}
        required
        />
        <br />
        <br />
        <label htmlFor="description">Descreption:</label>
        <input 
        type="text" 
        value={formData.description}
        id="description"
        name="description"
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="category">Category:</label>
        <input 
        type="text" 
        value={formData.category}
        id="category"
        name="category"
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="price">Price:</label>
        <input 
        type="text" 
        value={formData.price}
        id="price"
        name="price"
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input 
        type="text" 
        value={formData.quantity}
        id="quantity"
        name="quantity"
        onChange={handleChange}
        />

        <br />
        <br />
        <button>Create Product</button>
      </form>
        </div>
    )
}

export default CreateProduct;