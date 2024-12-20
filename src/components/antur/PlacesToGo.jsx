import React from 'react'
import wrexham from '../../assets/antur/img/wrexham.jpg'
import llandudno from '../../assets/antur/img/llandudno.jpg'
import bangor from '../../assets/antur/img/bangor.jpg'
import caernarfon from '../../assets/antur/img/caernarfon.jpg'

const PlacesToGo = () => {
  return (
    <section className="my-20 w-[85%] mx-auto" id="places-to-go">
      <p className="text-2xl font-bold text-center md:text-left">Places To Go</p>
      <p className="text-xl font-bold mt-1 mb-6 text-center md:text-left">Popular Cities in North Wales</p>
      <ul className="flex flex-col gap-6 items-center justify-between sm:flex-col md:flex-row">
        <li>
          <img src={ wrexham } alt="" className="rounded-md object-cover object-center h-[240px] w-[320px]" />
          <p className="text-md font-bold mt-2 text-center md:text-left">Wrexham</p>
        </li>
        <li>
          <img src={ llandudno } alt="" className="rounded-md object-cover object-center h-[240px] w-[320px]" />
          <p className="text-md font-bold mt-2 text-center md:text-left">Llandudno</p>
        </li>
        <li>
          <img src={ bangor } alt="" className="rounded-md object-cover object-center h-[240px] w-[320px]" />
          <p className="text-md font-bold mt-2 text-center md:text-left">Bangor</p>
        </li>
        <li>
          <img src={ caernarfon } alt="" className="rounded-md object-cover object-center h-[240px] w-[320px]" />
          <p className="text-md font-bold mt-2 text-center md:text-left">Caernarfon</p>
        </li>
      </ul>
    </section>
  )
}

export default PlacesToGo
