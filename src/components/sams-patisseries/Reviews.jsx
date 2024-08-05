import React from 'react'
import Emily from '../../assets/sams-patisseries/emily.jpg'
import James from '../../assets/sams-patisseries/james.jpg'
import Stephen from '../../assets/sams-patisseries/stephen.jpg'

const Reviews = () => {
  return (
    <section className="w-[75%] flex justify-between mx-auto bg-[#D8658A] rounded-xl mt-20 p-10 gap-12 shadow-lg" id="reviews">
      <div className="w-1/3 flex flex-col gap-2">
        <img src={ Emily } alt="" className="h-[75px] w-[75px] rounded-full object-cover object-center" />
        <p className="font-medium">Emily R.</p>
        <ul className="flex items-center">
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-regular fa-star text-yellow-400"></i>
          </li>
        </ul>
        <p className="tracking-wide">
          "Sam's Patisserie is a hidden gem! The pastries are not only beautiful but absolutely delicious. Every bite
          is a perfect blend of flavor and texture. Highly recommend the almond croissants!"
        </p>
      </div>
      <div className="w-1/3 flex flex-col gap-2">
        <img src={ James } alt="" className="h-[75px] w-[75px] rounded-full object-cover object-center" />
        <p className="font-medium">James H.</p>
        <ul className="flex items-center">
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
        </ul>
        <p className="tracking-wide">
          "I am in love with Sam's Patisserie! The quality and freshness of the ingredients are evident in every pastry.
          The macarons are a must-try - they melt in your mouth and leave you wanting more."
        </p>
      </div>
      <div className="w-1/3 flex flex-col gap-2">
        <img src={ Stephen } alt="" className="h-[75px] w-[75px] rounded-full object-cover object-center" />
        <p className="font-medium">Stephen L.</p>
        <ul className="flex items-center">
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
          <li>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </li>
        </ul>
        <p className="tracking-wide">
          "From the moment you walk into Sam's Patisserie, you know you're in for a treat. The atmosphere is warm and inviting,
          and the pastries are out of this world. My personal favorite is the chocolate éclairs - simply divine!"
        </p>
      </div>
    </section>
  )
}

export default Reviews
