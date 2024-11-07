import { FC } from "react"
import { Product } from "../../tyeps/Product"
import { useGlobalProduct } from "../../context/ProductContext";
import "./ProductItem.css"

interface ProductItemProps {
    product: Product
    
  }
const ProductItem:FC<ProductItemProps> = ({
    product
}) => {
  const { buyProduct, removeProduct } = useGlobalProduct();
  
  return (
    <div className="ProductItem">
      <div>{`name: ${product.name}`}</div>
      <div>{`price: ${product.price}`}</div>
      <button onClick={() => buyProduct(product.id)}>add</button>
      <button onClick={() => removeProduct(product.id)}>remove</button>
      
    </div>
  )
}

export default ProductItem
