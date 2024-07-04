import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const Login = ({onSubmit}) => {
const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword: ''
};
 const validationSchema = Yup.object().shape({
    firstName:Yup.string().required('First Name is required'),
    lastName:Yup.string().required('Last Name is required'),
    email:Yup.string().email('Invalid email address').required('Email is required'),
    password:Yup.string().required('Password is required').min(6, 'Password must be at least 6 character'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'), null],  'Passwords Must match').required('Confirm Password is required')
 });
  return (
    <>
      <div>
        <h2>Sign up</h2>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
          <Form>


          <div>
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" className='error' />

            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" className='error' />

            </div>


          <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className='error' />

            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className='error' />

            </div>

            <div>
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <Field type="password" id="confirmpassword" name="confirmpassword" />
                <ErrorMessage name="confirmpassword" component="div" className='error' />

            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
