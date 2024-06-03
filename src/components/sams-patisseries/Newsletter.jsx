import React from 'react'

const Newsletter = () => {
  return (
    <section className="w-full">
      <div className="w-[75%] flex flex-col items-center justify-between mx-auto">
        <p className="text-lg font-semibold">
          Sign up to Sam's Patisserie newsletter to
          <br/>
          stay up to date on our latest specialties
        </p>
        <form action="" className="flex">
          <input type="email" name="" className="bg-orange-50" id="" placeholder="Email address" />
          <label htmlFor="">
            <i className="fa-solid fa-arrow-right"></i>
          </label>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
