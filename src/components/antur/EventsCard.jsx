import React from 'react'

const EventsCard = ({ children }) => {
  return (
    <li className="border-2 border-slate-200 rounded-xl overflow-hidden mb-6 h-[450px] w-[375px]">
      {children}
    </li>
  )
}

export default EventsCard
