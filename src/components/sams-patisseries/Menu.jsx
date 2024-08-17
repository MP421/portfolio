import React from 'react'
import croissant from '../../assets/sams-patisseries/croissant.jpg'
import coffee5 from '../../assets/sams-patisseries/coffee5.jpg'

export default function Menu() {
  return (
    <section className="w-[1200px] mx-auto my-20 flex flex-col" id="menu">
      <p className="text-[#B75E38] text-center">OUR MENU</p>
      <div className="flex items-center mt-10">
        <div className="w-[600px]">
          <img src={croissant} className="object-cover object-center h-[600px] w-full" alt="" />
          <p className="text-2xl mt-4 mb-2">Hazelnut croissant</p>
          <p className="w-[90%]">The perfect blend of crisp, flaky pastry and rich, nutty flavour, baked to perfection every morning.</p>
        </div>
        <div className="w-[600px]">
          <img src={coffee5} className="object-cover object-center h-[600px] w-full" alt="" />
          <p className="text-2xl mt-4 mb-2">Fresh house blend</p>
          <p className="w-[90%]">Crafted from a carefully selected mix of premium beans, this medium roast offers a well-balanced flavour with subtle notes of chocolate and caramel.</p>
        </div>
      </div>
      <button className="mt-12 bg-[#B75E38] text-slate-100 py-3 w-[225px] rounded-full mx-auto">SEE FULL MENU</button>
    </section>
  )
}