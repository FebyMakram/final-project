import React, { useState, useContext } from 'react'
import style from './CartSidebar.module.css'
import { Hourglass } from 'react-loader-spinner'
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from 'react-router-dom';


    // still not done
    

export default function CartSidebar({ isOpen, closeCart }) {

    const [loading, setLoading] = useState(false);
    let { cartItems } = useContext(CartContext);
    let navigate =useNavigate()

    const handleCart = ()=> {
        navigate('/cart')
    }
    const handleCheckOut =() =>{
        navigate('/checkout')

    }

    return (
        <div>

            <div className={` cartSidebar $ {isOpen ?  'open: ' '}     `}>

                <div className={style.cartHeader}>
                    <h2>Shopping Cart</h2>

                    <button onClick={closeCart} className='closeBtn' > X</button>
                </div>

                <hr />
                <div className={style.cartItems}>

                    {loading ? (<Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    />) :

                        //  product details

                       (  <> {
                            cartItems.length == 0 ? (<p> there is no items in cart </p>) :

                                // show products

                              (  <>  {  
                                    cartItems .map((item) => (

                                        <div key={item.id}>

                                            <div className={`${style.cartItem} row`}>

                                                {/* image */}
                                                <div className="col-md-5">

                                                    <img src={item.image} className='w-25' alt="product image" />

                                                </div>

                                                {/* title and quantaty */}

                                                <div className="col-md-5">

                                                    <div className="row">

                                                        <div className="col-md-6">
                                                            <h5>{item.title}</h5>

                                                        </div>
                                                        <div className="col-md-6">
                                                            <p> 1 X {item.price} EGP</p>
                                                        </div>

                                                    </div>

                                                    {/* delete btn */}

                                                    <button className='btn  bg-secondary w-25 circle '> X </button>


                                                </div>



                                                         {/* total */}
                                                 <div className="row">
                                                      <div className="col-md-12">
                                                      <p> Subtotal : EGP . {cartItems.reduce ((total,item) =>total +item.price ,0)}</p>
                                                </div>

                                                <hr/>

                                            </div>


                                            </div>

                                           {/* buttom */}
                                           <div className="div">
                                            <button onClick={handleCart}>Cart</button>
                                            <button onClick={handleCheckOut}>Check out</button>
                                            <button>Comparison</button>

                                           </div>


                                        </div>




                                    ))
                                } </> ) 



                        }   </> )  }
                      


                </div>

            </div>
        </div>

    )
}
