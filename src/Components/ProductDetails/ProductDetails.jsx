import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import style from "./ProductDetails.module.css";
import { Bars } from "react-loader-spinner";
import line5 from "../../Assets/Images/Line5.png";
import tShort from '../../Assets/Images/tShort.jpg'
import OurProducts from "../OurProducts/OurProducts";
import { CartContext } from "../../Context/CartContext";
import {toast} from 'react-hot-toast'


// done/////

export default function ProductDetails( ) {
  const [product, setProduct] = useState([]);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let { addToCart } =useContext(CartContext)

  async function ProductId( ) {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    setProduct(data);
    setLoading(false);
  }

  useEffect ( ( ) =>{
    ProductId()
  },[])

  

  return (
    <div className="container">
      <div className={`${style.navi} d-flex`}>
        <div className="row pt-4  ">
          <div className="col-md-2">
            <h5 className="text-secondary ms-4">Home </h5>
          </div>

          <div className="col-md-2 text-black fs-5 ">{`>`}</div>

          <div className="col-md-2 ">
            <h5 className="text-secondary ">Shop </h5>
          </div>

          <div className="col-md-1 fs-5 text-black">{`>`}</div>

          <div className="col-md-1">
            <img src={line5} className={style.line} alt="line" />
          </div>

          <div className="col-md-4">
            <h5>{product.title}</h5>
          </div>
        </div>
      </div>

      {/* product Details */}

      {loading ? (
        <Bars
          height="80"
          width="80"
          color="#808080"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div className="row mt-5">
          {/* product image */}
          <div className="col-md-5">
            <img
              src={product.image}
              className="w-75 h-50"
              alt={product.title}
            />
          </div>

          {/* product details */}

          <div className="col-md-6 my-4">
            <h2 className=" mt-3 mb-3 fw-bolder">{product.title}</h2>

            <h4 className="my-4 text-secondary">EGP. {product.price}</h4>

            <div className="row mb-4">
              <div className="col-md-3">
                <h5 className="text-warning">
                  {product.rating.rate}{" "}
                  <i className="fa-regular fa-star text-warning ms-4"></i>{" "}
                </h5>
              </div>

              <div className="col-md-1">
                <img src={line5} className={style.line} alt="line" />
              </div>

              <div className="col-md-5">
                <h5 className="text-secondary">
                  {" "}
                  {product.rating.count} customer review{" "}
                </h5>
              </div>
            </div>

            <p className="my-3">{product.description}</p>

            <h5 className="text-secondary">size</h5>

            <div className={`${style.size} row mt-4 `}>
              <div className="col-md-2 ">
                <button> L </button>
              </div>

              <div className="col-md-2">
                <button> XL </button>
              </div>

              <div className="col-md-2">
                <button> XS </button>
              </div>
            </div>

            <h5 className="text-secondary my-4">color</h5>

            <div className={`${style.color} row mt-4 `}>
              <div className="col-md-1 ">
                <button className="bg-black"></button>
              </div>

              <div className="col-md-1">
                <button className="bg-primary"></button>
              </div>

              <div className="col-md-1">
                <button className="bg-warning"></button>
              </div>
            </div>

            {/*info */}

            <div className="row mt-5 mb-5">
              {/* amount */}
              <div className="col-md-3 ">
                <div className={`${style.amount} row  `}>
                  <div className=" btn  col-md-2 fs-4"> _ </div>
                  {/* the amount should be here */}
                  <div className=" btn col-md-6 fs-4 mt-1"> Amount </div>
                  <div className=" btn  col-md-4 fs-4 mt-2  px-2"> + </div>
                </div>
              </div>

              {/* cart */}

              <div className="col-md-4">
                <button
                  onClick={()=> { addToCart(product) ; toast.success(`${product.title } add to cart successfully `) }}
                  className={`${style.bttn} bg-white fs-5  w-100  `}
                >
                  Add to cart
                </button>
              </div>

              {/* compare */}

              <div className="col-md-4">
                <button className={`${style.compare} bg-white fs-5  w-100  `}>
                  {" "}
                  + Compare
                </button>
              </div>
            </div>

            <hr />

              {/* info */}

              <div className="row">
                <h5 className="text-secondary me-5 mt-2">SKU      <span className="text-secondary fs-5 ms-5" >  :  SS001 </span> </h5>
                <h5 className="text-secondary my-2 ">Category :<span className="text-secondary fs-5  " > {product.category}</span> </h5>
                <h5 className="text-secondary me-5 mt-2">Tags   <span className="text-secondary fs-5 ms-5 " >  :  Sofa, Chair, Home, Shop </span> </h5>
                  <div className="row">
                    <div className="col-md-2">
                      <h5 className="text-secondary mt-3">Share</h5>
                    </div>
                      <div className="col-md-2 mt-3 ms-1">
                        : <i className="fa-brands fa-facebook fa-xl" style={{color: "black"}}></i>
                      </div>
                      <div className="col-md-2 mt-3 ">
                      <i class="fa-brands fa-square-instagram fa-xl" style={{color: "black"}}></i>
                      </div>
                      <div className="col-md-2 mt-3">
                      <i class="fa-brands fa-square-twitter fa-xl" style={{color: "black"}}></i>
                      </div>

                  </div>
              </div>






          </div>

            <hr />

            {/* Description */}

            <div className="row  mt-5 ">

            <button className=" border-0 col-md-4 fs-4 bg-white">Description</button> 
            <button className=" border-0  col-md-4 fs-4 text-secondary bg-white"> Additional Information</button> 
            <button className=" border-0  col-md-4 fs-4 text-secondary bg-white"> Reviews [{product.rating.count}]</button> 

            </div>
            <p className="text-secondary mt-5 text-start fs-5 lh-base">{product.description}</p>

              {/* product images */}
            <div className="row mt-5 mb-5 d-flex align-items-center">
              <div className="col-md-6">
                <img src={product.image} className="w-50 h-75 ms-5 " alt="T-Shirt" />
              </div>

              <div className="col-md-6">
                <img src={tShort} className="w-50 h-75" alt="T-Shirt" />
              </div>

            </div>

            <hr  className="mt-5"/>

            <h2 className="text-center mt-5 fw-bold ">Related Products</h2>

            <OurProducts/>

            <hr className="mt-5"/>

        </div>
      )}
    </div>
  );
}
