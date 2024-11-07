import { FC } from "react"
import { useGlobalProduct } from "../../context/ProductContext"
import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.css"

const ProductsList:FC = () => {
  const { products, sortProducts } = useGlobalProduct();
  return (
    <div className="ProductsList">
      <h1>Products List</h1>
      {
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      }
      {
        <button onClick={sortProducts}>sort</button>
      }

      
    </div>
  )
}

export default ProductsList
