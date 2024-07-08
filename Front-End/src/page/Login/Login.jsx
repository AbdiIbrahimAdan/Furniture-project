import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
const initialValues = {
    email:'',
    password:''
};
 const validationSchema = Yup.object().shape({
    email:Yup.string().email('Invalid email address').required('Email is required'),
    password:Yup.string().required('Password is required')
 });

 const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/login', values, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
    if (response.status === 200){
      login();
      navigate ('/');
     }
    console.log(response.data);
    resetForm();
    alert('Login Successfully');
  } catch (error) {
    console.error('Signup failed:', error);
    alert('Failed to Login, please try again...')
  } finally {
    setSubmitting(false);
  }
};
  return (
    <>
      <div className='login-container'>
        <h2>Login</h2>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </>
  );
};

export default Login;
