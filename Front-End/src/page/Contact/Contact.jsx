import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './Contact.css'
const Contact = () => {

  const initialValue ={
    firstName:'',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }
  const validateSchema = Yup.object({
    firstName:Yup.string().required('First Name is required').min(3,'First Name havve a minimum of 3 character').max(10,'First Name should have maximum of 10 character'),
    lastName:Yup.string().required('Last Name is required').min(3,'Last Name havve a minimum of 3 character').max(10,'Last Name should have maximum of 10 character'),
    email:Yup.string().required('Email is required').email('invalid email format'),
    subject:Yup.string().required('Subject is required'),
    message:Yup.string().required('Message is required')
    
  });

  
  const onSubmit = (values, {setSubmitting})=>{
    console.log('form data', values);
  
  setTimeout(() =>{
    alert(json.stringify(values, null, 2));
    setSubmitting(false);
  
  }, 1000);
};
  

  
   
  

   
  return (
    <>
      <div className='contact-form-container'>
        <h1>Contact us</h1>

        <Formik
        initialValue={initialValue}
        validateSchema={validateSchema}
        onSubmit={onSubmit}
        >
        {({isSubmitting}) => (

          
          <Form>
            <div className="form-control">
              <label htmlFor="firstName">First Name:</label>
               <Field type="text" id="firstName" 
                name='firstName'
                
                />
              <ErrorMessage name='firstName' component= 'div' className='error-message' />

            </div>

            <div className="form-control">
              <label htmlFor="lastName">Last Name:</label>
               <Field type="text" id="lastName" 
                name='lastName'
                
                />
                <ErrorMessage name='lastName' component= 'div' className='error-message' />

            </div>

            <div className="form-control">
              <label htmlFor="email">Email:</label>
               <Field type="email" id="email" 
                name='email'
               
                />
                <ErrorMessage name='email' component= 'div'  className='error-message'/>
            </div>


            <div className="form-control">
              <label htmlFor="subject">Subject:</label>
               <Field type="text" id="subject" 
                name='subject'
               
                />
               <ErrorMessage name='subject' component= 'div'  className='error-message'/>

            </div>


            <div className="form-control">
              <label htmlFor="message">Message:</label>
               <Field type="textarea" id="message" 
                name='message'
                
                />
                <ErrorMessage name='message' component= 'div'  className='error-message'/>

            </div>


            <button type='submit' disabled ={isSubmitting}>
              {isSubmitting ? 'Please wait...' : 'Submit'}
            </button>
          </Form>
        )}
        </Formik>
      </div>
    </>
  )
}

export default Contact
