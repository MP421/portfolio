import React from 'react'
import croissant from '../../assets/sams-patisseries/croissant.jpg'
import coffee5 from '../../assets/sams-patisseries/coffee5.jpg'
import croissant2 from '../../assets/sams-patisseries/croissant2.jpg'
import eclair from '../../assets/sams-patisseries/eclair.jpg'
import macaron from '../../assets/sams-patisseries/macaron.jpg'
import millefeuille from '../../assets/sams-patisseries/millefeuille.jpg'
import operacake from '../../assets/sams-patisseries/operacake.jpg'
import painauchocolat from '../../assets/sams-patisseries/painauchocolat.jpg'
import profiteroles from '../../assets/sams-patisseries/profiteroles.jpg'
import tarteaucitron from '../../assets/sams-patisseries/tarteaucitron.jpg'
import tartetatin from '../../assets/sams-patisseries/tartetatin.jpg'

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
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-indigo-50 border-2 border-amber-600 shadow-lg hidden" id="full-menu">
        <p className="absolute top-[10px] right-[20px] text-3xl cursor-pointer font-sansfredoka" onClick={closeMenu}>x</p>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="grid grid-rows-3 grid-cols-3 px-7 pt-14 pb-6 gap-5">
            <li>
              <img src={croissant2} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Croissant" />
              <p className="mt-1">Croissant</p>
            </li>
            <li>
              <img src={eclair} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Éclair" />
              <p className="mt-1">Éclair</p>
            </li>
            <li>
              <img src={macaron} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Macaron" />
              <p className="mt-1">Macaron</p>
            </li>
            <li>
              <img src={tartetatin} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Tarte Tatin" />
              <p className="mt-1">Tarte Tatin</p>
            </li>
            <li>
              <img src={millefeuille} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Mille-Feuille" />
              <p className="mt-1">Mille-Feuille</p>
            </li>
            <li>
              <img src={painauchocolat} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Pain au Chocolat" />
              <p className="mt-1">Pain au Chocolat</p>
            </li>
            <li>
              <img src={tarteaucitron} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Tarte au Citron" />
              <p className="mt-1">Tarte au Citron</p>
            </li>
            <li>
              <img src={profiteroles} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Profiteroles" />
              <p className="mt-1">Profiteroles</p>
            </li>
            <li>
              <img src={operacake} className="h-[150px] w-[300px] object-cover object-center rounded-xl" alt="Opera Cake" />
              <p className="mt-1">Opera Cake</p>
            </li>
          </ul>
          <em className="text-xs pb-8">All our products are baked fresh daily. Please ask our team for allergen information.</em>
        </div>
      </div>
    </section>
  )
}