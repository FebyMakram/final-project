import React from "react";
import style from "./CheckOut.module.css";
import NavbarLogo from "../../Assets/Images/NavbarLogo.png";
import Quality from "../Quality/Quality";
import { useFormik } from "formik";
import * as Yup from 'yup'

    // done
export default function CheckOut() {

  const register =(values) =>{
    console.log ('form submitted')
    console.log( values)
  }

  let validationSchema =Yup.object ( {
        // 1st name
    firstName: Yup.string() 
    .required('insert your first name')
    .min('3')
    .max( '5'),

        // last name
    lastName: Yup.string() 
    .required('insert your last name')
    .min('3')
    .max( '5'),


    // CompanyName
    CompanyName: Yup.string() 
    .required('you must choosecompany name'),


        // country
        country :Yup.string()  
      .required("please insert your country"),
        
        // address
      address :Yup.string()  
      .required("please insert your address"),

      // city
      city :Yup.string()  
      .required("please insert your city"),

    

    // zipCode
    zipCode :Yup.string()  
    .required("please insert your Zip Code"),

    // phone
    phone :Yup.string()  
    .required("please insert your phone")
    .matches(/^01[0-9]{9}$/ ,"invalid Phone no."),

    // email
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),


  })



  let formik =useFormik ({
    intialValues:{
      firstName : '',
      lastName: '' ,
      CompanyName:'',
      country :'' ,
      address :' ',
      city : '',
      province : '',
      zipCode :'',
      phone :'',
      email :'',
      
    },
    validationSchema ,
    onSubmit : register,
  }) 


  return (
    <div className="container-fluid">
      {/* Checkout img */}
      <div className={`${style.img} text-center mb-5 `}></div>

      <div className={style.overlay}>
        <img src={NavbarLogo} className={style.logo} alt="logo" />
        <h2 className="fs-1 fw-bold ">Checkout</h2>
        <p className="mt-2">
          {" "}
          <span className="fw-bold">Home</span>
          {" >"} Checkout
        </p>
      </div>

      <div className="container mt-5">
        <div className="row d-flex flex-row justify-content-evenly">
          {/* left part */}

          <div className="col-md-5">
            <div className="form" onSubmit={formik.handleSubmit}>
              <h2 className="fw-bold mb-5">Billing details</h2>

              <div className="row">
                {/* Name */}

                {/* 1st name */}
                <div className="col-md-5">
                  <label for="firstName" className="mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 py-3 px-3"
                    id="firstName"
                    firstName
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                  />
                  {formik.errors.firstName && formik.touched.firstName ? <div className="alert alert-danger"> { formik.errors.firstName}</div>   : null  }

                </div>

                  {/* last name */}
                <div className="col-md-5">
                  <label for="lasttName" className="mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 py-3 px-3"
                    id="lastName"
                    lastName
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? <div className="alert alert-danger"> { formik.errors.lastName}</div>   : null  }

                </div>
              </div>

              {/* Company Name (Optional) */}
              <div className="mb-3">
                <label for="CompanyName" className="mb-3">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="form-control mb-3 py-3 px-3"
                  id="CompanyName "
                  name="CompanyName"
                />
              </div>

              {/* Country / Region */}
              <div className="mb-3">
                <label htmlFor="Country" className="mb-3">
                  Country / Region
                </label>
                <div className="dropdown">
                  <button
                    type="button"

                    className="btn text-secondary mb-3 py-3 px-3 w-100 text-start dropdown-toggle border-secondary"
                    data-bs-toggle="dropdown"
                  >
                    Sri Lanka
                  </button>
                  <ul class="dropdown-menu"   >
                    <li>
                      <button type="button" className="dropdown-item" >  country 1 </button>
                       
                     
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" >
                      country 1 2
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" >
                      country 1 3
                      </button>
                    </li>
                  </ul>
                </div>


              </div>

              {/* Street address */}
              <div className="mb-3">
                <label htmlFor="address" className="mb-3">
                  Street address
                </label>
                <input
                  type="address"
                  className="form-control mb-3 py-3 px-3 "
                  id="address "
                  address
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  {formik.errors.address && formik.touched.address ? <div className="alert alert-danger"> { formik.errors.address} </div>   : null  }

              </div>

              {/* Town / City*/}
              <div className="mb-3">
                <label htmlFor="city" className="mb-3">
                  Town / City
                </label>
                <input
                  type="text"
                  className="form-control mb-3 py-3 px-3 "
                  id="city "
                  city
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  {formik.errors.city && formik.touched.city ? <div className="alert alert-danger"> { formik.errors.city}</div>   : null  }

              </div>

              {/* Province*/}
              <div className="mb-3">
                <label htmlFor="Province" className="mb-3">
                  Province
                </label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn text-secondary w-100 mb-3 py-3 px-3  text-start dropdown-toggle border-secondary"
                    data-bs-toggle="dropdown"
                  >
                    Western Province
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button className="dropdown-item" >
                        Link 1
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" >
                        Link 2
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" >
                        Link 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ZIP code*/}
              <div className="mb-3">
                <label htmlFor="ZipCode" className="mb-3">
                  ZIP code
                </label>
                <input
                  type="text"
                  className="form-control mb-3 py-3 px-3"
                  id="ZipCode "
                 zipCode
                />
                  {formik.errors.zipCode && formik.touched.zipCode ? <div className="alert alert-danger"> { formik.errors.zipCode}</div> : null  }

              </div>

              {/*Phone*/}
              <div className="mb-3">
                <label htmlFor="phone" className="mb-3">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control mb-3 py-3 px-3"
                  id="phone "
                  phone
                />
                  {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger"> { formik.errors.phone}</div> : null  }

              </div>

                {/* email address */}
                <div className="mb-3">
                <label htmlFor="email" className="mb-3">
                  email address
                </label>
                <input
                  type="email"
                  className="form-control mb-3 py-3 px-3 "
                  id="email "
                  email
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> { formik.errors.email}</div>   : null  }

              </div>



              {/*Additional information*/}
              <div className=" mt-5 mb-5">
                <input
                  type="text"
                  className="form-control py-4 px-3 mb-5 mt-5 "
                  id="info "
                  name="info"
                  placeholder="Additional information"
                />
              </div>
            </div>
          </div>

          {/* right part */}

          <div className="col-md-4 ms-2 ">
            {/* checkout must be done here */}

            <div className="row ">
              <div className="col-md-6 d-flex flex-column lign-content-end flex-wrap">
                <h3 className=" me-5 mt-5">Product</h3>
                <h5 className="text-secondary mt-4 ">Asgaard sofa x 1</h5>
                <h5 className=" mt-4">Subtotal</h5>
                <h5 className=" mt-4">Total</h5>
              </div>

              <div className="col-md-6 d-flex flex-column lign-content-end flex-wrap">
                <h3 className="ms-5 mt-5">Subtotal</h3>
                <h5 className="ms-5 mt-4">Rs. 250,000.00</h5>
                <h5 className="ms-5 mt-4">Rs. 250,000.00</h5>
                <h5 className={` ${style.price} ms-3 mt-4 mb-5 fs-4`}>Rs. 250,000.00</h5>
              </div>
            </div>

            {/* end of checkout */}

            <hr />

            {/* privacy policy */}
            <div className="row mt-5">
              <div className="col-md-1">
                <input type="checkbox" className="mt-2 " />
              </div>

              <div className="col-md-9">
                <h5>Direct Bank Transfer</h5>
              </div>
              <p className="text-secondary mt-4">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>

            <div className="row mt-4">
              <div className="col-md-1">
                <span>
                  {" "}
                  <input type="checkbox" className="mt-2" />{" "}
                </span>
              </div>

              <div className="col-md-9">
                <h5 className="text-secondary">Direct Bank Transfer</h5>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-1">
                <span>
                  {" "}
                  <input type="checkbox" className="mt-2" />{" "}
                </span>
              </div>

              <div className="col-md-9 ">
                <h5 className="text-secondary">Cash On Delivery</h5>
              </div>
            </div>

              <p className="fs-6 mt-5">Your personal data will be used to support your experience  throughout this website, to manage access to your account, and  for other purposes described in our <strong>privacy policy.</strong> </p>

              <button type="submit" className="btn bg-white border-black w-75 fs-5 text-center mt-5 ms-5 border-1 ">Place order</button>

          </div>
        </div>
      </div>

      <Quality />
    </div>
  );
}
