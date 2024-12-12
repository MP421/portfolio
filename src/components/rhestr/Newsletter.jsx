import React from 'react'

const Newsletter = () => {
  return (
    <section className="text-center bg-[#5368df] text-white h-[350px] flex flex-col items-center justify-center gap-6" id="newsletter">
    <p className="text-[.75em] leading-[.25em]">35,000+ ALREADY JOINED</p>
    <p className="text-[2em] font-bold">
      Stay up-to-date with what
      <br />
      we're doing
    </p>
    <div className="flex gap-[1em] h-[75px]">
      <div>
        <input type="email" className="h-[50px] border-none rounded-[5px] w-[300px] pl-[1em]" placeholder="Enter your email address" />
      </div>
      <button className="h-[50px] border-none rounded-[5px] bg-[#fa5757] text-white w-[150px] cursor-pointer border-2 border-[#fa5757] hover:transition-all hover:bg-white hover:text-[#fa5757]">Contact Us</button>
    </div>
  </section>
  )
}

export default Newsletter
