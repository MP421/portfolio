import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch('https://fullstackspecialist.vercel.app/api/send-email', {  // http://localhost:3001/api/send-email
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      const errorText = await response.text();
      alert('Failed to send email: ' + errorText);
      console.log(errorText);
    }
  } catch (error) {
    console.error('Error occurred during fetch:', error);
    alert('Failed to send email.');
  }
  };

  return (
    <>
      <section className="flex flex-col justify-center mt-20 w-[90%] mx-auto text-[#1E1E1E]" id="contact">
        <h3 className="text-center text-3xl font-bold">Send me a message</h3>
        <p className="w-[52.5%] mx-auto my-4 text-lg font-bold tracking-wide leading-relaxed">
          If you have a project in mind or a question or proposal, or would just like to say
          hello? Get in touch by emailing me at <span class="text-indigo-100 hover:underline">
          fullstackspecialisttoday@gmail.com</span> or through filling in the form below.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto my-6 gap-2 w-1/3 leading-relaxed">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border-2 border-b-slate-900 p-2 pl-3 bg-slate-100 rounded-t-lg placeholder:text-slate-700" placeholder='Your name' />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border-2 border-b-slate-900 p-2 pl-3 bg-slate-100 rounded-t-lg placeholder:text-slate-700" placeholder='Your email address' />
          <label>Message</label>
          <input type="text" name="message" value={formData.message} onChange={handleChange} required className="border-2 border-b-slate-900 p-2 pl-3 bg-slate-100 rounded-t-lg placeholder:text-slate-700" placeholder='Your message' />
          <button type="submit" className="rounded-md bg-[#1E1E1E] text-[#5190e0] w-1/2 mx-auto mt-6 py-3 font-bold hover:text-white duration-100">Send Message</button>
        </form>
      </section>
    </>
  )
}

export default Contact
