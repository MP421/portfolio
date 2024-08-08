import React from 'react'

export default function Ankle() {
  return (
    <section className="mt-20 w-full h-[375px] bg-slate-950 text-slate-50">
      <div className="h-full mx-auto flex items-center justify-around">
        <ul className="w-1/3">
          <li className="font-semibold text-xl">Antur</li>
          <li className="mt-2 mb-4 font-semibold">Adventure in North Wales</li>
          <li className="italic">North Wales is an adventure holiday destination in the UK</li>
        </ul>
        <ul className="w-1/3 flex flex-col gap-2">
          <li className="hover:font-semibold">
            <a href="#articles">Explore</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#places-to-go">Destinations</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#things-to-do">Activities</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#latest-events">Events</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#hero">About</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#testimonials">Reviews</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#faq">Questions</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#contact">Latest</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
