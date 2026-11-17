import React from 'react'
import {Link} from 'react-router'

function Navbar() {
  return (
    <nav>
    <Link to='/'>HomePage</Link>    
    <Link to='/products'>All Products</Link>
    <Link to='/products/new-product'>Create Product</Link>
    </nav>
  )
}

export default Navbar