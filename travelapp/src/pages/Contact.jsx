import axios from 'axios';
import { useState } from 'react';

export const Contact = () => {
  const [message , setMessage] = useState();
  
  const url = import.meta.env.VITE_contact_backend_url; // API endpoint URL  
  const handleFormSubmit = (formData) => {

    const formInputData = Object.fromEntries(formData.entries()); // Convert FormData to plain object
    // console.log(formInputData); // Log the form data for debugging

    // Use axios.put() with the correct parameters
    axios.post(url, formInputData)
      .then(response => {
        // console.log('Data sent successfully:', response.data);
      
        setMessage("Success!!")
      })
      .catch(error => {
        // console.error('Error sending data:', error);
        setMessage("Error!!")
      });
  };

  return (
    <main>
      <div  className="container">
      {message && <p>{message}</p>}

      <h1 className="page-header">Contact Us</h1>

      <form action={handleFormSubmit} className="contact-form">
        <input type="text" required autoComplete="True" placeholder="Enter Your Name" name="username" />
        <input type="email" required autoComplete="True" placeholder="Enter Your Email" name="email" />
        <textarea name="message" rows="10"></textarea>
        <button>Submit Form</button>
      </form>
      </div>
    </main>
  )
}
