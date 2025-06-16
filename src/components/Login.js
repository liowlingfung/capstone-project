import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
    const initialValues ={
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 6 characters')
            .required('Password is required'),
    });
    // Simulate an API call
    const submitHandler = (values, {setSubmitting, resetForm }) => {
        setTimeout(() => {
            alert(`Login successful for email : ${values.email}`);
            setSubmitting(false);
            resetForm();
        }, 1000)
    }
  return (
    <>
    <section style={
        {
            maxWidth: '400px',
            margin: '50px auto',
            padding: '50px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 5px 15px grey',
            backgroundColor:'#495e57',
            color:'white'
        }}>
        <h2 style={{marginBottom:"30px"}}>Login</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
            >
        {({isSubmitting}) => (
            <Form>
                <div style={{marginBottom:"30px"}}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <Field type="email" id="email" name="email" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} placeholder='eg: abc@email.com'/>
                    <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <Field type="password" id="password" name="password" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
                    <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </Form>
        )}
        </Formik>
    </section>
    </>
  )
}

export default Login