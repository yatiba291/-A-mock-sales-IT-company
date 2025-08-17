import React, { createContext, useReducer} from 'react'

import CartReducer from './CartReducer'

   
export   const CartContext = createContext
   const ContextProvider = ({children}) => {

    const [cart, dispatch] = useReducer(CartReducer,[ ])
  return (
   <CartContext.ContextProvider value={{cart, dispatch}}>
{children}
   </CartContext.ContextProvider>
  )
}


export default ContextProvider