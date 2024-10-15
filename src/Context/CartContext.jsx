import axios from 'axios'
import React, {  createContext, useEffect, useState } from 'react'


export let CartContext =createContext()

export default function CartContextProvider( props) {

    const[cartItems,setCartItems]=useState([])

   async function GetCartItems (){
        const response =await axios.get('https://fakestoreapi.com/carts')
        .then( (response) =>response)
        .catch ( ( error) =>error)
    }
    useEffect ( ()=>{
      GetCartItems()
    },[])

        // add item to cart
    const addToCart =( product) =>{
        setCartItems([...cartItems,product])
    }

        

  return (
    <div>
       < CartContext.Provider value={{addToCart, cartItems  }}>
       
        {props.children}
       
       </CartContext.Provider>

      
    </div>
  )
}
