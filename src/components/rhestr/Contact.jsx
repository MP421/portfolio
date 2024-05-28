import React from 'react'

const Contact = () => {
  return (
    <section className="w-[80%] mx-auto my-20" id="contact">
      <p className="text-center mb-8 font-medium">To learn more about how rhestr will super charge your productivity to the next level please contact us below</p>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label for="name" className="block mb-2 text-sm font-medium">Your name</label>
          <input type="text" id="name" className="shadow-sm text-sm rounded-lg block w-full p-2.5 bg-slate-50" required />
        </div>
        <div className="mb-5">
          <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
          <input type="email" id="email" className="shadow-sm text-sm rounded-lg block w-full p-2.5 bg-slate-50" required />
        </div>
        <label for="message" className="block mb-2 text-sm font-medium">Your message</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg bg-slate-50 mb-6" placeholder="Leave a comment..."></textarea>
        <button type="submit" className="text-slate-50 bg-indigo-950 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center mx-auto">Send message</button>
      </form>
    </section>
  )
}

export default Contact
