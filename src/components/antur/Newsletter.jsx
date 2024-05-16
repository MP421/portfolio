import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-slate-950 text-slate-50 p-20">
      <section className="flex items-center justify-between w-[85%] mx-auto">
        <section className="w-1/2">
          <p className="text-2xl font-bold mb-6">Antur Newsletter</p>
          <p className="text-lg">Subscribe to our newsletter to get the latest news on events and adventures in North Wales.</p>
        </section>
        <form action="" className="w-1/2 flex flex-col items-center justify-center">
          <label htmlFor=""></label>
          <input type="email" name="" id="" className="bg-transparent border-b-2 border-slate-50 pl-1 pb-1 w-2/3" placeholder='Email Address' />
          <div className="mt-4 mb-6 flex items-center gap-3 w-2/3">
            <input type="checkbox" name="" id="" className="accent-slate-50" />
            <label htmlFor="" className="text-xs">Check this box to consent to being contacted about the latest news and events in North Wales.</label>
          </div>
          <button className="flex justify-center w-1/3 py-1 bg-slate-50 text-slate-950 font-bold text-lg rounded-md hover:bg-slate-300 duration-100">Subscribe</button>
        </form>
      </section>
    </section>
  )
}

export default Newsletter
