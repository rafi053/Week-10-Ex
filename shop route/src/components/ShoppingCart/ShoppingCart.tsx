import { FC } from "react"
import "./ShoppingCart.css"
import ProductItem from "../ProductItem/ProductItem";
import { useGlobalProduct } from "../../context/ProductContext";

const ShoppingCart:FC = () => {
  const  { shoppingCart, sortProducts} = useGlobalProduct();
  return (
    <div className="ShoppingCart">
      <h1>Shopping Cart</h1>
      {
        shoppingCart.map((product) => (
          <ProductItem key={product.id} product={product} />
          
        ))
      }
      {
        <button onClick={sortProducts}>sort</button>
       
      }

    </div>
  )
}

export default ShoppingCart
