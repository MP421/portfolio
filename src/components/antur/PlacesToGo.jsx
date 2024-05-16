import React from 'react'
import wrexham from '../../assets/antur/img/wrexham.jpg'
import llandudno from '../../assets/antur/img/llandudno.jpg'
import bangor from '../../assets/antur/img/bangor.jpg'
import caernarfon from '../../assets/antur/img/caernarfon.jpg'

const PlacesToGo = () => {
  return (
    <section className="my-20 w-[85%] mx-auto">
      <p className="text-2xl font-bold">Places To Go</p>
      <p className="text-xl font-bold mt-1 mb-6">Popular Cities in North Wales</p>
      <ul className="flex items-center justify-evenly">
        <li className="">
          <img src={ wrexham } alt="" className="rounded-md object-cover object-center h-[300px] w-[300px]" />
          <p className="text-md font-bold mt-2">Wrexham</p>
        </li>
        <li className="">
          <img src={ llandudno } alt="" className="rounded-md object-cover object-center h-[300px] w-[300px]" />
          <p className="text-md font-bold mt-2">Llandudno</p>
        </li>
        <li className="">
          <img src={ bangor } alt="" className="rounded-md object-cover object-center h-[300px] w-[300px]" />
          <p className="text-md font-bold mt-2">Bangor</p>
        </li>
        <li className="">
          <img src={ caernarfon } alt="" className="rounded-md object-cover object-center h-[300px] w-[300px]" />
          <p className="text-md font-bold mt-2">Caernarfon</p>
        </li>
      </ul>
    </section>
  )
}

export default PlacesToGo
