import React from 'react'

const Pricing = () => {
  return (
    <section className="flex items-center justify-center gap-6 w-[80%] mx-auto my-28" id="pricing">
      <div className="w-1/3 border-4 border-indigo-950 rounded-xl shadow-lg bg-slate-50">
        <p className="text-lg font-semibold text-center mt-3">Single</p>
        <p className="text-xl font-semibold text-center mt-2 mb-1">£<span className="text-4xl">0</span>.00</p>
        <p className="text-sm text-center">/Month</p>
        <p className="text-xs text-center">cancel anytime</p>
        <p className="bg-indigo-950 text-slate-50 py-2 my-4 text-center font-semibold">Perfect for solo users</p>
        <ul className="h-[250px] list-disc pl-8">
          <li>1 user</li>
          <li>Cross browser compatibility</li>
          <li>Calendar and Email integration</li>
          <li>Take your productivity to the next level</li>
        </ul>
        <a href="#" className="flex justify-center mb-6 py-2 font-semibold border-2 border-indigo-950 rounded-2xl w-1/2 mx-auto">Select Plan</a>
      </div>
      <div className="w-1/3 border-4 border-indigo-950 rounded-xl shadow-lg bg-slate-50">
        <p className="text-lg font-semibold text-center mt-3">Professional</p>
        <p className="text-xl font-semibold text-center mt-2 mb-1">£<span className="text-4xl">10</span>.99</p>
        <p className="text-sm text-center">/Month</p>
        <p className="text-xs text-center">cancel anytime</p>
        <p className="bg-indigo-950 text-slate-50 py-2 my-4 text-center font-semibold">Best value</p>
        <ul className="h-[250px] list-disc pl-8">
          <li>10 users</li>
          <li>Cross browser compatibility</li>
          <li>Calendar and Email integration</li>
          <li>Take your productivity to the next level</li>
          <li>24/7 customer support</li>
        </ul>
        <a href="#" className="flex justify-center mb-6 py-2 font-semibold border-2 border-indigo-950 rounded-2xl w-1/2 mx-auto">Select Plan</a>
      </div>
      <div className="w-1/3 border-4 border-indigo-950 rounded-xl shadow-lg bg-slate-50">
        <p className="text-lg font-semibold text-center mt-3">Enterprise</p>
        <p className="text-xl font-semibold text-center mt-2 mb-1">£<span className="text-4xl">18</span>.99</p>
        <p className="text-sm text-center">/Month</p>
        <p className="text-xs text-center">cancel anytime</p>
        <p className="bg-indigo-950 text-slate-50 py-2 my-4 text-center font-semibold">Most features</p>
        <ul className="h-[250px] list-disc pl-8">
          <li>100 users</li>
          <li>Cross browser compatibility</li>
          <li>Calendar and Email integration</li>
          <li>Take your productivity to the next level</li>
          <li>24/7 customer support</li>
          <li>Super charged by AI to turn your team into a task completing monster!</li>
        </ul>
        <a href="#" className="flex justify-center mb-6 py-2 font-semibold border-2 border-indigo-950 rounded-2xl w-1/2 mx-auto">Select Plan</a>
      </div>
    </section>
  )
}

export default Pricing
