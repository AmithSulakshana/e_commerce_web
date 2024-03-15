import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; 

const AddProduct = () => {
    const initialValues = {
        ProductsName:'',
        ProductsStyle:'casual',
        ProductsType:'',
        Price:'',
        newPrice:'',
        colour:'',
        size:'XX-Small',
        frontImage:'',
        backImage:'',
        sideImage:'',
        gender:'male',
        rate:0,
    }

    const validationSchema = Yup.object().shape({
        ProductsName: Yup.string().required('Product name is required'),
    });

    const handleSubmit = (data,{ resetForm }) =>{
           axios.post("http://localhost:3001/product",data).then((res)=>{
            console.log(res)
           })
           resetForm()
           alert("Item Added succesfully")
    }

    return (
        <div className='addproduct-main'>
            <p className='addproduct-para1'>Add Product</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ getFieldProps, errors, touched }) => (
                    <Form className='form-main'>
                        
                        <label className='form-label1'>Product Name: </label>
                        <Field
                            {...getFieldProps('ProductsName')}
                            type="text"
                            placeholder="Enter Product Name"
                            className={errors.ProductsName && touched.ProductsName ? 'error-input' : 'error-input2'}
                        />
                       
                        <ErrorMessage name='ProductsName' component="div" className='error1'/>

                        <label className='form-label1'>Product Style: </label>
                        <Field
                            {...getFieldProps('ProductsStyle')}
                            as="select"
                            className='error-input2'
                        >
                            <option value="casual">Casual</option>
                            <option value="formal">Formal</option>
                            <option value="party">Party</option>
                            <option value="gym">Gym</option>

                        </Field>

                        <label className='form-label1'>Product Type: </label>
                        <Field
                            {...getFieldProps('ProductsType')}
                            type="text"
                            placeholder="Enter Product Type"
                            className='error-input2'
                        />

                        <label className='form-label1'>Product Price: </label>
                        <Field
                            {...getFieldProps('Price')}
                            type="text"
                            placeholder="Enter Product Price"
                            className='error-input2'
                        />

                        <label className='form-label1'>New Price: </label>
                        <Field
                            {...getFieldProps('newPrice')}
                            type="text"
                            placeholder="Enter Product new price"
                            className='error-input2'
                        />

                        <label className='form-label1'>Product Colour: </label>
                        <Field
                            {...getFieldProps('colour')}
                            type="text"
                            placeholder="Enter Product colour"
                            className='error-input2'
                        />

                        <label className='form-label1'>Product Size: </label>
                        <Field
                            {...getFieldProps('size')}
                            as="select"
                            className='error-input2'
                        >
                            <option value='XX-Small'>XX-Small</option>
                            <option value='X-Small'>X-Small</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='X-Large'>X-Large</option>
                            <option value='XX-Large'>XX-Large</option>
                            <option value='3X-Large'>3X-Large</option>
                            <option value='4X-Large'>4X-Large</option>
                        </Field>    

                        <label className='form-label1'>Front Image: </label>
                        <Field
                            {...getFieldProps('frontImage')}
                            type="text"
                            placeholder="Enter Product Front Image"
                            className='error-input2'
                        />

                        <label className='form-label1'>Back Image: </label>
                        <Field
                            {...getFieldProps('backImage')}
                            type="text"
                            placeholder="Enter Product Back Image"
                            className='error-input2'
                        />

                        <label className='form-label1'>Side Image: </label>
                        <Field
                            {...getFieldProps('sideImage')}
                            type="text"
                            placeholder="Enter Product Side Image"
                            className='error-input2'
                        />

                        <label className='form-label1'>Gender: </label>
                        <Field
                            {...getFieldProps('gender')}
                            as="select"
                            placeholder="Enter Product Gender"
                            className='error-input2'
                        >
                           
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </Field>

                        <label className='form-label1'>Rate: </label>
                        <Field
                            {...getFieldProps('rate')}
                            type="text"
                            placeholder="Enter Product Rate"
                            className='error-input2'
                        />

                        <button type='submit'>Add Item</button>
                       
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddProduct;
