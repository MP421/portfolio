import React from 'react'
import testimonial from '../../assets/antur/img/testimonial.jpg'

export default function Testimonial() {
  return (
    <section className="my-20 w-full h-[600px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${testimonial})` }} id="testimonials">
      <div className="h-full w-[85%] mx-auto rounded-3xl flex flex-col justify-center md:flex-row md:items-end md:justify-normal gap-5 pb-5">
        <div className="w-full md:w-1/3 h-[30%] md:h-[200px] bg-white rounded-2xl py-4 px-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-indigo-300 h-[40px] w-[40px] rounded-full">
              <p className="font-semibold text-xl">E</p>
            </div>
            <div>
              <p>Emily Thompson</p>
              <p className="text-sm">UK</p>
            </div>
          </div>
          <p className="mt-6">
            “North Wales is the ultimate adventure playground, offering breathtaking landscapes and thrilling activities at every turn!”
          </p>
        </div>
        <div className="w-full md:w-1/3 h-[30%] md:h-[200px] bg-white rounded-2xl py-4 px-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-blue-300 h-[40px] w-[40px] rounded-full">
              <p className="font-semibold text-xl">J</p>
            </div>
            <div>
              <p>James O'Connor</p>
              <p className="text-sm">USA</p>
            </div>
          </div>
          <p className="mt-6">
            “From zip-lining to mountain climbing, North Wales provided an unforgettable adventure holiday that exceeded all my expectations.”
          </p>
        </div>
        <div className="w-full md:w-1/3 h-[30%] md:h-[200px] bg-white rounded-2xl py-4 px-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-green-300 h-[40px] w-[40px] rounded-full">
              <p className="font-semibold text-xl">S</p>
            </div>
            <div>
              <p>Sophie Williams</p>
              <p className="text-sm">CAN</p>
            </div>
          </div>
          <p className="mt-6">
            “Every moment in North Wales was filled with excitement and awe, making it the perfect destination for any adventure seeker.”
          </p>
        </div>
      </div>
    </section>
  )
}
