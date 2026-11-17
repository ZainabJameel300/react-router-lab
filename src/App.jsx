import {useState} from 'react'
import {Routes, Route} from 'react-router'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'
import ProductsDetails from './pages/ProductsDetails'
import CreateProduct from './pages/CreateProduct'
import Navbar from './components/Navbar'
import './App.css'
function App() {


  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/products/:productId' element={<ProductsDetails/>}/>
      <Route path='/products/new-product' element={<CreateProduct/>}/>
    </Routes>
    </div>
  )
}

export default App
