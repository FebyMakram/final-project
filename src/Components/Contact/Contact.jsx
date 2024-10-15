import React from "react";
import style from "./Contact.module.css";
import Quality from "../Quality/Quality";
import NavbarLogo from "../../Assets/Images/NavbarLogo.png";
import location from "../../Assets/Images/location.png";
import phone from "../../Assets/Images/phone.png";
import time from "../../Assets/Images/time.png";
import { useFormik } from "formik";
import * as Yup from 'yup'


// done ///////////

export default function Contact() {

  const register = (values) =>{
    console.log ('form submitted')
    console.log( values)
  }

  let validationSchema =Yup.object ( {
        //  name
    name: Yup.string() 
    .required('insert your name')
    .min('3')
    .max( '10'),
      

    // email
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),

      // message
      message:Yup.string()
      .required('Message is required')
      
  })

  let formik =useFormik ({
    initialValues:{
      name : ' ',
      email :' ',
      message:' ',

    },
        // validate
    validationSchema ,
    onSubmit : register,
  }) 


  return (
    <div className="container-fluid">
      <div className={`${style.img} text-center `}></div>

      <div className={style.overlay}>
        <img src={NavbarLogo} className={style.logo} alt="logo" />
        <h2 className="fs-1 fw-bold ">Contact</h2>
        <p className="mt-2">
          {" "}
          <span className="fw-bold">Home</span>
          {" >"} Contact
        </p>
      </div>
      <div className="container  mt-5">
        <h2 className="mt-5 fs-2 fw-bold text-center">Get In Touch With Us</h2>
        <p className="text-secondary fs-6 mt-3 text-center mb-5">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>

        <div className="row ">
          {/* left part */}
          <div className="col-md-5 ">

            {/* adress */}
            <div className="row mt-5">
              <div className="col-md-2 ">
                <img src={location} className="" alt="adress" />
              </div>

              <div className="col-md-10">
              <h5>Address</h5>
              <p>
                236 5th SE Avenue, New <br /> York NY10000, United <br /> States
              </p>
              </div>
            </div>

               {/* phone */}
            <div className="row mt-5">
              <div className="col-md-2 ">
                <img src={phone} className=" " alt="phone" />
              </div>

              <div className="col-md-10">
              <h5>Phone</h5>
              <p>
              Mobile: +(84) 546-6789 <br/>
              Hotline: +(84) 456-6789
              </p>
              </div>
            </div>

             {/* time */}
             <div className="row mt-5">
              <div className="col-md-2 ">
                <img src={time} className="" alt="time" />
              </div>

              <div className="col-md-10">
              <h5>Working Time</h5>
              <p>
              Monday-Friday: 9:00 - 22:00 <br/>
              Saturday-Sunday: 9:00 - 21:00 <br/>
              </p>
              </div>
            </div>

          </div>
          {/* right part */}
          <div className="col-md-6">

              <form onSubmit={formik.handleSubmit} className={`${style.form}  mt-5`}>

                  {/* name */}
                  <div>
                <label htmlFor="name"  
                    className="form-label fs-5 mb-2" 
                    >Your name</label>

                <input 
                type="text" 
                className="form-control mb-4 mt-3 " 
                id="name"
                 name
                 placeholder="A b c"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
                />
                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger"> { formik.errors.name}</div>   : null  }
                </div>


                    {/* email */}
                    <div>
                <label htmlFor="email" className="form-label fs-5 mt-3"> Email address</label>
                <input
                 type="email" 
                 className="form-control mb-4 mt-3 "
                   id="email" 
                   email
                   placeholder="Abc@def.com"  
                    onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> { formik.errors.email}</div>   : null  }

                </div>

                    {/* subject */}
                <label htmlFor="subject " className="form-label fs-5 mt-3"  >Subject</label>
                <input type="text"  className="form-control mb-4 mt-3 "  placeholder="This is an optional" name="email" />

                {/* message */}
                <div>

                <label htmlFor="message" className="form-label fs-5 mt-3" >Message</label>
                <textarea 
                type="text" 
                className="form-control mb-4 mt-3 "
                 id="message" 
                 message
                 placeholder="Hi! i’d like to ask about" 
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> { formik.errors.email}</div>   : null  }

                </div>

                <button type="submit"   className={style.btn}>Submit</button>

            </form>
            
          </div>
        </div>
      </div>

      <Quality />
    </div>
  );
}
