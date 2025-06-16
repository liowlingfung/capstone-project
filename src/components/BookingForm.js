import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';

function BookingForm() {
  const initialValues ={
          date: Date,
          time: '17:00',
          guestCount: 0,
          occassion: 'Birthday'
      }
      const validationSchema = Yup.object({
          date: Yup.date()
            .typeError('Please pick a date')
            .required('Please pick a date'),
          time: Yup.string()
            .required('Please pick a time'),
          guestCount: Yup.number()
            .min(1,`You can't reserve a table with no one`)
            .required('Input the number of guests'),
          occassion: Yup.string()
            .required('Please pick a occassion')
      });
      // Simulate an API call
      const submitHandler = (values, {setSubmitting, resetForm }) => {
          setTimeout(() => {
              alert(`
                Booking successful, date is on : ${values.date}
                at ${values.time}. The total number of guest is "${values.guestCount}"
                for a/an ${values.occassion} event!
              `);
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
       <h2 style={{marginBottom:"30px"}}>Book Now</h2>
           <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={submitHandler}
           >
       {({isSubmitting}) => (
           <Form>
               <div style={{marginBottom:"30px"}}>
                   <label htmlFor="date" style={{ display: 'block', marginBottom: '5px' }}>Choose date:</label>
                   <Field type="date" id="date" name="date" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}/>
                   <ErrorMessage name="date" component="div" style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }} />
               </div>
               <div style={{ marginBottom: '30px' }}>
                   <label htmlFor="time" style={{ display: 'block', marginBottom: '5px' }}>Time:</label>
                   <Field as="select" type="time" id="time" name="time" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                     <option value='17:00'>17:00</option>
                     <option value='18:00'>18:00</option>
                     <option value='19:00'>19:00</option>
                     <option value='20:00'>20:00</option>
                     <option value='21:00'>21:00</option>
                     <option value='22:00'>22:00</option>
                   </Field>
                   <ErrorMessage name="time" component="div" style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }} />
               </div>
               <div style={{ marginBottom: '30px' }}>
                   <label htmlFor="guestCount" style={{ display: 'block', marginBottom: '5px' }}>Number of Guests:</label>
                   <Field type="number" id="guestCount" name="guestCount" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
                   <ErrorMessage name="guestCount" component="div" style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }} />
               </div>
               <div style={{ marginBottom: '30px' }}>
                   <label htmlFor="occassion" style={{ display: 'block', marginBottom: '5px' }}>Occassion:</label>
                   <Field as="select" type="occassion" id="occassion" name="occassion" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                     <option value='birthday'>Birthday</option>
                     <option value='anniversary'>Anniversary</option>
                   </Field>
                   <ErrorMessage name="occassion" component="div" style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }} />
               </div>
               <button type="submit" disabled={isSubmitting}>
                   {isSubmitting ? 'Booking...' : 'Make your reservation'}
               </button>
           </Form>
       )}
       </Formik>
      </section>
    </>
  )
}

export default BookingForm