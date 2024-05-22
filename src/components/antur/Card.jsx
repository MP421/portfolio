import React from 'react'

const Card = ({ children }) => {
  return (
    <li className="border-2 border-slate-200 rounded-xl overflow-hidden mb-6 h-[500px] w-[450px]">
      {children}
    </li>
  )
}

export default Card
