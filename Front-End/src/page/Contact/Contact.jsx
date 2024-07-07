import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './Contact.css';
import Banner from '../../Components/Banner/Banner';
import contactImage from './../../assets/New/couch2.jpg';

const Contact = () => {
  const validationSchema = Yup.object().shape({
    firstName:  Yup.string()
      .required('First Name is required')
      .min(3, 'First Name must have a minimum of 3 characters')
      .max(10, 'First Name should have a maximum of 10 characters'),
    lastName:  Yup.string()
      .required('Last Name is required')
      .min(3, 'Last Name must have a minimum of 3 characters')
      .max(10, 'Last Name should have a maximum of 10 characters'),

    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format'),

    subject: Yup.string()
      .required('Subject is required'),
    message: Yup.string()
      .required('Message is required'),  
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values, {setSubmitting}) => {
    console.log('Form data', values);

    setTimeout(() =>{
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <>
    <Banner title="Contact us" backgroundImage={contactImage}/>
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <Formik 
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
           
        >
          {({isSubmitting}) =>(
            <Form>
              <div className="form-control">
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName"/>
                <ErrorMessage name="firstName" component="div" className="error-message" />
              </div>

              <div className="form-control">
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName"/>
                <ErrorMessage name="lastName" component="div" className="error-message" />
              </div>

              <div className="form-control">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>


              <div className="form-control">
                <label htmlFor="subject">Subject:</label>
                <Field type="text" id="subject" name="subject"/>
                <ErrorMessage name="subject" component="div" className="error-message" />
              </div>


              <div className="form-control">
                <label htmlFor="message">Message:</label>
                <Field type="message" id="message" name="message"/>
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>

              <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Please wait...' : 'Submit'}
              </button>
              
            </Form>
          )}

        </Formik>
      </div>
      </>
  );
};

export default Contact;
