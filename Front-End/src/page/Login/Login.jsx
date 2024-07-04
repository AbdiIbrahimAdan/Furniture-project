import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const Login = ({onSubmit}) => {
const initialValues = {
    email:'',
    password:''
};
 const validationSchema = Yup.object().shape({
    email:Yup.string().email('Invalid email address').required('Email is required'),
    password:Yup.string().required('Password is required')
 });
  return (
    <>
      <div>
        <h2>Login</h2>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
          <Form>

          <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className='error' />

            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className='error' />

            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login
