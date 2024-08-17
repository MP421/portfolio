import React from 'react'
import coffeebean from '../../assets/sams-patisseries/coffee-bean-roast-brew-svgrepo-com.svg'
import chef from '../../assets/sams-patisseries/chef-svgrepo-com.svg'
import award from '../../assets/sams-patisseries/award-ui-web-svgrepo-com.svg'
import eco from '../../assets/sams-patisseries/eco4-svgrepo-com.svg'

import choctart from '../../assets/sams-patisseries/chocolatetart.jpg'
import coffee1 from '../../assets/sams-patisseries/coffee1.jpg'

export default function Gallery() {
  return (
    <section className="">
      <div className="bg-[#B75E38] text-slate-100">
        <ul className="">
          <li className="">
            <img src={coffeebean} className="" alt="" />
            <p className="">FRESH DAILY</p>
            <p className="">Everything we offer is baked in store</p>
          </li>
          <li className="">
            <img src={chef} className="" alt="" />
            <p className="">HAND CRAFTED</p>
            <p className="">By our team of master pastry chefs</p>
          </li>
          <li className="">
            <img src={award} className="" alt="" />
            <p className="">EXPERT SERVICE</p>
            <p className="">Award winning and industry leading service</p>
          </li>
          <li className="">
            <img src={eco} className="" alt="" />
            <p className="">ECO</p>
            <p className="">All our cups are made from 100% recycled material</p>
          </li>
        </ul>
        <ul className="">
          <li className="">
            <img src="" className="" alt="" />
            <img src="" className="" alt="" />
          </li>
          <li className="">
            <p className="">Gallery</p>
          </li>
          <li className="">
            <img src="" className="" alt="" />
          </li>
        </ul>
      </div>
      <div className="">
        <img src={choctart} className="" alt="" />
        <img src={coffee1} className="" alt="" />
      </div>
    </section>
  )
}
