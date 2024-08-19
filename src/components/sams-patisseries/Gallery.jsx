import React from 'react'
import coffeebean from '../../assets/sams-patisseries/coffee-bean-roast-brew-svgrepo-com.svg'
import chef from '../../assets/sams-patisseries/chef-svgrepo-com.svg'
import award from '../../assets/sams-patisseries/award-ui-web-svgrepo-com.svg'
import eco from '../../assets/sams-patisseries/eco4-svgrepo-com.svg'
import coffee3 from '../../assets/sams-patisseries/coffee3.jpg'
import coffee2 from '../../assets/sams-patisseries/coffee2.jpg'
import coffee4 from '../../assets/sams-patisseries/coffee4.jpg'
import choctart from '../../assets/sams-patisseries/chocolatetart.jpg'
import coffee1 from '../../assets/sams-patisseries/coffee1.jpg'

export default function Gallery() {
  return (
    <section className="relative" id="gallery">
      <div className="bg-[#B75E38] text-slate-100">
        <ul className="w-[1000px] flex items-center justify-between mx-auto py-20">
          <li className="w-[200px]">
            <img src={coffeebean} className="h-[75px] w-[75%]" alt="" />
            <p className="mt-2 mb-1">FRESH DAILY</p>
            <p className="">Everything we offer is baked in store</p>
          </li>
          <li className="w-[200px]">
            <img src={chef} className="h-[75px] w-[75%]" alt="" />
            <p className="mt-2 mb-1">HAND CRAFTED</p>
            <p className="">By our team of master pastry chefs</p>
          </li>
          <li className="w-[200px]">
            <img src={award} className="h-[75px] w-[75%]" alt="" />
            <p className="mt-2 mb-1">EXPERT SERVICE</p>
            <p className="">Award winning and industry leading service</p>
          </li>
          <li className="w-[200px]">
            <img src={eco} className="h-[75px] w-[75%]" alt="" />
            <p className="mt-2 mb-1">ECO</p>
            <p className="">All our cups are made from 100% recycled material</p>
          </li>
        </ul>
        <ul className="h-[500px] w-[1200px] flex items-center mx-auto">
          <li className="h-full w-[300px]">
            <img src={coffee3} className="h-1/2 w-full object-cover object-center" alt="" />
            <img src={coffee2} className="h-1/2 w-full object-cover object-center" alt="" />
          </li>
          <li className="h-full w-[600px] bg-[#202738] flex flex-col items-center justify-center">
            <p className="text-4xl text-[#B75E38]">Gallery</p>
            <p className="text-xl my-10">
              Take a closer look at
              <br/>
              what our expert chefs
              <br/>
              make on a daily basis
            </p>
            <button className="bg-[#B75E38] h-[40px] w-[175px] rounded-full">VIEW MORE</button>
          </li>
          <li className="h-full w-[300px]">
            <img src={coffee4} className="h-full w-full object-cover object-center" alt="" />
          </li>
        </ul>
      </div>
      <div className="flex items-center mx-auto h-[250px] w-[1200px]">
        <img src={choctart} className="h-full w-[900px] object-cover object-center" alt="" />
        <img src={coffee1} className="h-full w-[300px] object-cover object-center" alt="" />
      </div>
    </section>
  )
}