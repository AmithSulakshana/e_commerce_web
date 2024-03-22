import axios from 'axios';
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/reducers/UserSlice';
import { addToCart } from '../../store/reducers/CartSlice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'; 


const Logging = () => {
    
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const initialValues = {
      userName:'',
      password:''
    }

    const validationSchema = Yup.object().shape({
      userName:Yup.string().required("userName is required"),
      password: Yup.string().min(7, "Password must be at least 7 characters long").required("Password is required"),
    })

    const handleClick = (data) =>{

        axios.post("http://localhost:3001/user/login",data).then((response)=>{
            if(response.data.error) alert(response.data.error);

            else{
              localStorage.setItem("accessToken", response.data.token);
              dispatch(loginSuccess({ userName:response.data.userName, id: response.data.id }));
              navigate("/");
              alert("loging success")
                 
              axios.get("http://localhost:3001/cart/subprice", {
                headers: { accessToken: localStorage.getItem("accessToken") },
                params: { }
              })
              .then((res) => {
                  dispatch(addToCart({quntity:res.data.totalquntity })) 
                  
              })
            }  
        })  
    }

  return (
    <div className='logging-main'>
      <div className='logging-div1'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleClick}>
          {({ getFieldProps, errors, touched }) => (
            <Form className='logging-form'>
              <div>
                <label className='logging-label1'>User Name: </label><br/>
                <Field
                    {...getFieldProps('userName')}
                    type='text'
                    placeholder = "Enter Your Name"
                    className={errors.userName && touched.userName ? 'error':'error2'}
                >

                </Field>
                <ErrorMessage name='userName' component='div' className='error1'/>
               
              </div>

              <div>
                <label className='logging-label1'>Password: </label><br/>
                 <Field
                    {...getFieldProps('password')}
                    type='password'
                    placeholder = "Enter Your pasword"
                    className={errors.password && touched.password ? 'error':'error2'}
                 >

                 </Field>
                 <ErrorMessage name='password' component='div' className='error1'/><br/>
                 <button type='submit' className='logging-button'>LOGIN</button>
              </div>
                
            </Form>

          )
          }
        </Formik>
      </div>

      <div className='logging-div2'>
            <div className='logging-div2-row1'>
                Facebook
            </div>
            <div className='logging-div2-row2'>
                 Google
            </div>
      </div>

    </div>
  )
}

export default Logging;
