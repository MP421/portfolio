import React from 'react'
import evan_jones from '../../assets/rhestr/img/evanjones.jpg'
import lucy_evans from '../../assets/rhestr/img/lucyevans.jpg'
import hugo_williams from '../../assets/rhestr/img/hugowilliams.jpg'

const Counter = () => {
  return (
    <section className="flex items-center justify-center w-[80%] h-[150px] mx-auto bg-blue-100 rounded-xl border-2 border-indigo-950">
      <ul className="flex items-center">
        <li className="-mr-8">
          <img src={ evan_jones } className="h-20 w-20 object-cover rounded-full border-4 border-indigo-950" alt="" />
        </li>
        <li className="-mr-8">
          <img src={ lucy_evans } className="h-20 w-20 object-cover rounded-full border-4 border-indigo-950" alt="" />
        </li>
        <li>
          <img src={ hugo_williams } className="h-20 w-20 object-cover rounded-full border-4 border-indigo-950" alt="" />
        </li>
      </ul>
      <p className="text-lg font-semibold ml-6">+73,753 rhestr users have rocketed their productivity into the stratosphere! Join them today</p>
    </section>
  )
}

export default Counter
