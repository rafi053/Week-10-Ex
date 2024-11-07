import { FC, useEffect, useState } from 'react';
import { RootState } from '../../store/store.ts'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,getTotal } from '../../store/features/shoppingCart/ShoppingCartSlice.ts'

const ShoppingCartPage:FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  
  const { items, total} = useSelector((state:RootState) => state.shoppingCart);
  const dispatch = useDispatch();
  
useEffect(()=>{
  getTotal();
}, [totalPrice])
  return (
    <div>
      <h1>ShoppingCart Page</h1>
      
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(increment({ id: item.id }))}>+</button>
          <button onClick={() => dispatch(decrement({ id: item.id }))}>-</button>
        </div>
      ))}
      <button onClick={() => dispatch(getTotal())}>Total: $</button>
      <p>Total: $ {total}</p>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ShoppingCartPage
