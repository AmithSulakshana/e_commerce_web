import React from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'; 

const SingUp = () => {

    const initialValues = {
        userName: '',
        password: '',
    
    }

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('user name is required'),
        password: Yup.string().required('Pass is required'),
    
        
    })

    const handleSubmit = (data, { resetForm }) => {
        axios.post("http://localhost:3001/user", data)
            .then((res) => {
                alert(res.data);
                resetForm();
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    

  return (
    <div>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <label>USER NAME:</label>
                    <Field
                        type="text"
                        name="userName"
                        placeholder="Enter userName"
                        
                    />
                    <ErrorMessage name="userName" component="div"/>

                    <label>PASSWORD</label>
                    <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        
                    />
                    <ErrorMessage name="password" component="div"/>


                    <button type='submit'>Register</button>
                </Form>
            </Formik>
      
    </div>
  )
}

export default SingUp;
