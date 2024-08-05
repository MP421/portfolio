import React from 'react'

const Newsletter = () => {
  return (
    <section className="w-full my-20" id="newsletter">
      <div className="w-[75%] flex flex-col items-center justify-between mx-auto">
        <p className="text-lg font-semibold mb-8">
          Sign up to Sam's Patisserie newsletter to
          <br/>
          stay up to date on our latest specialties
        </p>
        <form action="" className="relative">
          <input type="email" name="" className="bg-orange-50 py-3 px-6 w-[350px] rounded-full" id="" placeholder="Email address" />
          <label htmlFor="">
            <i className="fa-solid fa-arrow-right absolute top-50% translate-y-[50%] right-0 translate-x-[-50%] bg-orange-500 p-1 rounded-full cursor-pointer"></i>
          </label>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
