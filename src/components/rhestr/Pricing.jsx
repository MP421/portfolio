import React from 'react'

const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 w-[80%] my-16 mx-auto" id="pricing">
      <p className="text-3xl font-bold">Our pricing plans</p>
      <p className="text-lg text-center font-medium">
        We offer flexibility for our users because we know
        <br />
        your needs are dynamic and ever changing
      </p>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="w-[95%] border-2 border-indigo-950 rounded-xl shadow-lg bg-slate-50 md:w-[1/3]">
          <p className="text-lg font-semibold text-center mt-3">Single</p>
          <p className="text-xl font-semibold text-center mt-2 mb-1">£<span className="text-4xl">0</span>.00</p>
          <p className="text-sm text-center">/Month</p>
          <p className="text-xs text-center underline">cancel anytime</p>
          <p className="bg-indigo-950 text-slate-50 py-2 my-4 text-center font-semibold">Perfect for solo users</p>
          <ul className="h-[200px] list-disc pl-8">
            <li>1 user</li>
            <li>Cross browser compatibility</li>
            <li>Calendar and Email integration</li>
            <li>Take your productivity to the next level</li>
          </ul>
          <a href="#" className="flex justify-center mb-6 py-2 font-semibold border-2 border-indigo-950 rounded-2xl w-1/2 mx-auto">Select Plan</a>
        </div>
        <div className="w-[95%] border-2 border-indigo-950 rounded-xl shadow-lg bg-slate-50 md:w-[1/3]">
          <p className="text-lg font-semibold text-center mt-3">Professional</p>
          <p className="text-xl font-semibold text-center mt-2 mb-1">£<span className="text-4xl">10</span>.99</p>
          <p className="text-sm text-center">/Month</p>
          <p className="text-xs text-center underline">cancel anytime</p>
          <p className="bg-indigo-950 text-slate-50 py-2 my-4 text-center font-semibold">Best value</p>
          <ul className="h-[200px] list-disc pl-8">
            <li>10 users</li>
            <li>Cross browser compatibility</li>
            <li>Calendar and Email integration</li>
            <li>Take your productivity to the next level</li>
            <li>24/7 customer support</li>
          </ul>
          <a href="#" className="flex justify-center mb-6 py-2 font-semibold border-2 border-indigo-950 rounded-2xl w-1/2 mx-auto">Select Plan</a>
        </div>
        <div className="w-[95%] border-2 border-indigo-950 rounded-xl shadow-lg bg-slate-50 md:w-[1/3]">
          <p className="text-lg font-semibold text-center mt-3">Enterprise</p>
          <p className="text-xl font-semibold text-center mt-2 mb-1">£<span className="text-4xl">18</span>.99</p>
          <p className="text-sm text-center">/Month</p>
          <p className="text-xs text-center underline">cancel anytime</p>
          <p className="bg-indigo-950 text-slate-50 py-2 my-4 text-center font-semibold">Most features</p>
          <ul className="h-[200px] list-disc pl-8">
            <li>100 users</li>
            <li>Cross browser compatibility</li>
            <li>Calendar and Email integration</li>
            <li>Take your productivity to the next level</li>
            <li>24/7 customer support</li>
            <li>Super charged by AI to turn your team into a task completing monster!</li>
          </ul>
          <a href="#" className="flex justify-center mb-6 py-2 font-semibold border-2 border-indigo-950 rounded-2xl w-1/2 mx-auto">Select Plan</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing
