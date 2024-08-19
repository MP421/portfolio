import React from 'react'
import croissant from '../../assets/sams-patisseries/croissant.jpg'
import coffee5 from '../../assets/sams-patisseries/coffee5.jpg'

export default function Menu() {
  const fullMenuOverlay = document.getElementById('full-menu');

  function showMenu() {  
    fullMenuOverlay.classList.remove('hidden');
  }

  function closeMenu() {
    fullMenuOverlay.classList.add('hidden');
  }

  return (
    <section className="w-[1200px] mx-auto my-20 flex flex-col relative" id="menu">
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
      <button className="mt-12 bg-[#B75E38] text-slate-100 py-3 w-[225px] rounded-full mx-auto" onClick={showMenu}>SEE FULL MENU</button>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-2/3 w-1/2 rounded-3xl bg-green-200 hidden" id="full-menu">
        <p className="absolute top-[10px] right-[15px] cursor-pointer" onClick={closeMenu}>x</p>
        <div className="">
          <p>Menu</p>
          <ul className="grid grid-rows-3 grid-cols-3">
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
            <li className="">menu item</li>
          </ul>
        </div>
      </div>
    </section>
  )
}