import React from 'react'
import lila from '../../assets/sams-patisseries/lilamontgomery.jpg'
import ava from '../../assets/sams-patisseries/avasinclair.jpg'
import maya from '../../assets/sams-patisseries/mayathompson.jpg'

export default function Reviews() {
  return (
    <section className="w-[70%] mx-auto mt-20" id="reviews">
      <p className="text-[#B75E38] text-center mb-8">REVIEWS</p>
      <div className="flex items-center justify-between gap-20">
        <div className="w-1/3 h-[300px]">
          <div className="flex items-center gap-4">
            <img src={lila} className="h-[100px] w-[100px] object-cover object-center rounded-full" alt="" />
            <div>
              <p className="text-lg">Lila Montgomery</p>
              <p>7 reviews</p>
            </div>
          </div>
          <p className="mt-4">
            Sam's Patisserie is a gem! The aroma of freshly baked goods hits you the moment
            you walk in. Their pastries are always fresh and delicious, and the staff is
            incredibly friendly and attentive. It's my go-to spot for a sweet treat!
          </p>
        </div>
        <div className="w-1/3 h-[300px]">
          <div className="flex items-center gap-4">
            <img src={ava} className="h-[100px] w-[100px] object-cover object-center rounded-full" alt="" />
            <div>
              <p className="text-lg">Ava Sinclair</p>
              <p>3 reviews</p>
            </div>
          </div>
          <p className="mt-4">
            Sam's Patisserie never disappoints! The bread is always warm and fresh, and their
            cakes are to die for. The service is top-notch, with staff who go out of their
            way to make you feel welcome. Highly recommend!
          </p>
        </div>
        <div className="w-1/3 h-[300px]">
          <div className="flex items-center gap-4">
            <img src={maya} className="h-[100px] w-[100px] object-cover object-center rounded-full" alt="" />
            <div>
              <p className="text-lg">Maya Thompson</p>
              <p>4 reviews</p>
            </div>
          </div>
          <p className="mt-4">
            Sam's Patisserie is simply amazing! The freshness of their baked goods is unmatched,
            and the flavors are exquisite. The staff is always cheerful and ready to help. It's
            a delightful experience every time I visit.
          </p>
        </div>
      </div>
    </section>
  )
}