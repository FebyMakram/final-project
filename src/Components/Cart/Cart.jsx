import React, { useContext } from "react";
import style from "./Cart.module.css";
import NavbarLogo from "../../Assets/Images/NavbarLogo.png";
import Quality from "../Quality/Quality";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


export default function Cart() {

  let navigate =useNavigate ()
  let { cartItems }= useContext(CartContext)

    const calaculatSubtotal =() =>{
      return cartItems .reduce ( (acc ,item ) =>{
        return acc + item.price *item .quantity ;
      } , 0)
    }

    const total  = calaculatSubtotal ();

    const handleCheckOut = ( ) => {
      navigate('/checkOut');
    }
  

  return (
    <div className="container-fluid">

          {/* data */}

      {/* cart img */}
      <div className={`${style.img} text-center mb-5 `}></div>

      <div className={style.overlay}>
        <img src={NavbarLogo} className={style.logo} alt="logo" />
        <h2 className="fs-1 fw-bold ">Cart</h2>
        <p className="mt-2">
          {" "}
          <span className="fw-bold">Home</span>
          {" >"} Cart
        </p>
      </div> 

      {/* content */}
       <div className="container">
        {/* left part */}
        <div className="row  ">
          <div className="col-md-8  ">
            <div className={`${style.title} row m-3 p-3 `}>

            <div className="col-md-2 ">
                <h5>Image</h5>
              </div>

              <div className="col-md-2 ">
                <h5>Product</h5>
              </div>

              <div className="col-md-2">
                <h5>Price</h5>
              </div>

              <div className="col-md-2">
                <h5>Quantity</h5>
              </div>

              <div className="col-md-2">
                <h5>Subtotal</h5>
              </div>
            </div>  


            {/* product info */}

              {cartItems.map ( (item ) =>(
                <div key={item.id}>
                    <div className={`${style.cart} row m-3 p-3 d-felx flex-row`}>
                    
                    {/* product picture */}

                    <div className="col-md-2">
                       <img src={item.image} className={`${style.product}`}  alt="product image " />
                  </div>

                  {/* product name */}
                   <div className="col-md-2 ">
                   <h5>{item.title}</h5>
                 </div>  

                    {/* product price */}
                 <div className="col-md-2">
                <h5>{item.price}</h5>
              </div> 

                  {/* product aquantaty */}
 
                  <div className="col-md-2">
                <h5>Quantity</h5>
              </div> 


                  {/* subtotal */}
              <div className="col-md-2">
                <h5>Subtotal</h5>
              </div>


              {/* delete button */}
               <div className="col-md-2">
                <button className="border-0">
                  {" "}
                  <MdDelete className={style.delete} />
                </button>
              </div> 

                  </div>

               </div>
              ))}


          </div> 

          {/* right part */}

          <div className={`${style.details} col-md-4 mt-1  `}>
            <h3 className="mt-3 text-center fs-3 ">Cart Totals</h3>

            <div className="row ">
              <div className="col-md-4">
                <h5 className=" mt-4 ms-5 ">Subtotal</h5>
                <h5 className=" mt-4 ms-5 ">Total</h5>
              </div>

              <div className="col-md-7 ms-3">
                <h5 className="text-secondary mt-4 ms-5">EGP.250,000.00</h5>
                <h5 className={`${style.total} mt-4 ms-5`}>EGP. 250,000.00</h5>
              </div>
            </div>

                <div className="row">
                  <div className="col-md-12 text-center">
            <button  onClick={handleCheckOut} className={`${style.checkOutBtn} mt-5 mb-5 fs-5` }>
              Check Out
            </button>
            </div>
            </div>

          </div>
        </div>
      </div>

      <Quality />
      <hr /> 
     
    </div>
  );
}
