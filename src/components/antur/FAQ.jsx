import React from 'react'

const FAQ = () => {
  return (
    <section className="w-[85%] mx-auto">
      <p className="text-2xl font-bold mb-4">Top 5 Questions & Answers</p>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Where can I find further information on a particular attraction or accommodation?
        </div>
        <div className="collapse-content"> 
          <p>Please visit each attractions' own website for more specific information on booking and availability.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          How do I get to North Wales?
        </div>
        <div className="collapse-content"> 
          <p>North Wales is easily accessible from the M53, M54 and M56, then the A55 Expressway takes across every major town and city across the North Wales coast ultimately taking you to Holyhead on Anglesey with routes to Dublin by ferry.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          What's the best way to travel around North Wales?
        </div>
        <div className="collapse-content"> 
          <p>The train travels along the entirety of the North Wales coastline from Chester to Holyhead and stops at all notable towns and cities. For more difficult to reach places cycling is the best option for those who want to take in the beautiful scenery.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          What can I expect in terms of the weather?
        </div>
        <div className="collapse-content"> 
          <p>Bright, clear and warm sunny days and mild the rest of the year round but almost always great visibility to enjoy some of the best views you'll find anywhere in the world.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Do I need to be able to speak Welsh to get by?
        </div>
        <div className="collapse-content"> 
          <p>No. Almost all residents in Wales speak English as either their first or second language, although locals always appreciate those who show an interest in learning.</p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
