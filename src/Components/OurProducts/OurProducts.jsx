import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import style from "./OurProducts.module.css";
import { RotatingLines } from "react-loader-spinner";
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {toast} from 'react-hot-toast'

// done ////////////

export default function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(8);
  let { addToCart } = useContext(CartContext);

  async function getProducts() {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // const handleAddToCart =()=>{
  //   addToCart(product);
  //   toast.success(`${product.title} successfully added to cart `)
  // }
  
  // show more function
  const handleVisibleProducts = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  return (
    
    <div className="container mt-5">
      {loading ? (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="gray"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <>
          {" "}
          <div className="row">
            {products.slice(0, visibleProducts).map((product) => (
              <div className={`${style.card} card col-md-3 mt-2 mb-2  `} key={product.id}>
              
                  {/* link to product details page */}
                  <Link
                    className="text-decoration-none"
                    to={`/productDetails/${product.id}`}
                  >
                  {/* data before hover */}

                    {/* card-image */}
                 <div className={` card-image`}>
                   <img src={product.image} className={`${style.img} m-auto mt-3`}  alt="image" />
                  </div>

                     <div className="card-body bg-secondary-subtle mt-2 mb-3">
                <h5 className="card-title fw-bold text-dark ">
                        {product.title.split(" ").slice(0, 3).join(" ")}
                 </h5>
                     <p className="card-text text-secondary ">
                        {product.description.split(" ").slice(0, 3).join(" ")}
                     </p>
                     <h5 className="fw-semibold text-dark">EGP . {product.price}</h5>

                   </div>
                    {/* end data before hover  */}
                  </Link>
                
                {/* hover */}

                <div className={style.hoverOptions}>
                    <button
                      onClick={() => { addToCart(product) ;
                        toast.success(`${product.title } add to cart successfully `)  }}
                      className={`${style.bttn} bg-white fs-5  px-4 py-3 border-1 mb-5 `}
                    >
                      Add to cart
                    </button>

                    <div
                      className={`row d-flex justify-content-evenly ms-2   ${style.pics}`}
                    >
                      <div className="col-md-3">
                        <button >
                          <CiShare2 className={`${style.icon} `} /> {" "}
                          Share
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button>
                          <MdCompareArrows className={`${style.icon} ms-1`} />{" "}
                          Compare
                        </button>
                      </div>

                      <div className="col-md-3">
                        <button>
                          <AiOutlineLike className={`${style.icon} ms-1 `} />
                          Like{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                
              </div>
            ))}
          </div>
          {visibleProducts < products.length && (
            <div className="text-center">
              <button
                onClick={handleVisibleProducts}
                className={` mt-4 py-3 px-4 ${style.btn} `}
              >
                SHOW MORE{" "}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
