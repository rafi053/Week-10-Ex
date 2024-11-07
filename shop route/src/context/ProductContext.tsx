import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../tyeps/Product";



interface ProductProviderProps {
  children: ReactNode;
}

interface ContextProps {
  products: Product[];
  shoppingCart: Product[];
  buyProduct: (id: string) => void;
  removeProduct: (id: string) => void;
  sortProducts: () => void;
  
}

const ProductContext = createContext<ContextProps>({
  products: [],
  shoppingCart: [],
  buyProduct: () => {},
  removeProduct: () => {},
  sortProducts: () => {}


});



const ProductProvider: FC<ProductProviderProps> = ({ children }) => {

  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Hat", price: 3 },
    { id: "2", name: "Shirt", price: 2 },
    { id: "3", name: "Pants", price: 1 },
  ]);

  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);

 useEffect(() => {
  
}, [products]);

  const buyProduct = (id: string) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setShoppingCart([...shoppingCart, product]);
    }
  };

  const removeProduct = (id: string) => {
    const product = shoppingCart.find((product) => product.id === id);
    if (product) {
      setShoppingCart(shoppingCart.filter((product) => product.id !== id));
    }
  };

  const sortProducts = () => {
    const sortedProducts = products.sort( (a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };
  

  return (
    < ProductContext.Provider
      value={{

        products,
        shoppingCart,
        buyProduct,
        removeProduct,
        sortProducts

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalProduct = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider};













