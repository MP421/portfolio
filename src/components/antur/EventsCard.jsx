import React from 'react'

const EventsCard = ({ children }) => {
  return (
    <li className="bg-slate-50 rounded-lg shadow-md overflow-hidden h-96">
      {children}
    </li>
  )
}

export default EventsCard
