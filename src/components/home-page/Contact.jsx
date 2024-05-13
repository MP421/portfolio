import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="flex flex-col justify-center mt-20 w-[90%] mx-auto text-[#1E1E1E]" id="contact">
        <h3 className="text-center text-3xl font-bold">Send me a message</h3>
        <p className="w-1/2 mx-auto mt-2 mb-4 text-lg font-bold tracking-wide">
          If you have a project in mind or a question or proposal, or would just like to say
          hello? Get in touch by emailing me at -email- or through filling in the form below.
        </p>
        <form action="" className="flex flex-col mx-auto my-6 gap-2 w-1/3">
          <label htmlFor=""></label>
          <input type="text" name="" id="" className="border-b-2 border-b-black p-2" placeholder='Your name' />
          <label htmlFor=""></label>
          <input type="email" name="" id="" className="border-b-2 border-b-black p-2" placeholder='Your email address' />
          <label htmlFor=""></label>
          <input type="text" name="" id="" className="border-b-2 border-b-black p-2" placeholder='Your message' />
        </form>
        <button type="submit" className="rounded-md bg-[#1E1E1E] text-[#39AEF0] w-1/4 mx-auto mt-6 py-3 font-bold hover:text-white duration-100">Send Message</button>
      </section>
    </>
  )
}

export default Contact
