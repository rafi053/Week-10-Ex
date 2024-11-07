import { FC } from "react"
import ProductsList from "../ProductsList/ProductsList"
import NavBar from "../NavBar/NavBar"
import { Route, Routes } from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./ShopPage.css"

const ShopPage:FC = () => {
  return (
    <div className="ShopPage">
      <h1>Shop Page</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
       
      </Routes>
      
    </div>
  )
}
export default ShopPage
