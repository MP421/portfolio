import React from 'react'
import article1 from '../../assets/antur/img/article1.jpg'
import article2 from '../../assets/antur/img/article2.jpg'
import article3 from '../../assets/antur/img/article3.jpg'
import article4 from '../../assets/antur/img/article4.jpg'
import article5 from '../../assets/antur/img/article5.jpg'

const Articles = () => {
  return (
    <section className="my-20 w-[85%] mx-auto" id="articles">
      <p className="text-2xl font-bold text-center md:text-left">Explore North Wales</p>
      <p className="text-xl font-bold mt-1 mb-6 text-center md:text-left">Read handpicked articles to inspire you</p>
      <div className="flex items-center h-[500px] w-[full]">
        <div className="h-full w-1/2">
          <img src={article1} className="h-3/4 w-full object-cover object-center rounded-2xl" alt="Why North Wales is the Perfect Destination for a Unique Summer Trip: A Must-Read Guide" />
          <p className="font-semibold my-4">Why North Wales is the Perfect Destination for a Unique Summer Trip: A Must-Read Guide</p>
          <a href="https://ourcrossings.com/2023/10/16/some-of-the-best-things-to-see-and-do-in-north-wales-must-read-guide/" className="underline" target="_blank">Read Article</a>
        </div>
        <div className="h-full w-1/2 grid grid-rows-2 grid-cols-2 gap-4 ml-6">
          <div className="">
            <img src={article5} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="The 10 best places to stay in North Wales" />
            <p className="font-semibold my-1">The 10 best places to stay in North Wales</p>
            <a href="https://www.walescottageholidays.co.uk/guides/best-places-stay-north-wales" className="underline" target="_blank">Read Article</a>
          </div>
          <div className="">
            <img src={article3} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="Why North Wales is worthy of your Bucket List" />
            <p className="font-semibold my-1">Why North Wales is worthy of your Bucket List</p>
            <a href="https://www.ourbeautifuladventure.co.uk/blog/why-north-wales-is-worthy-of-your-bucket-list" className="underline" target="_blank">Read Article</a>
          </div>
          <div className="">
            <img src={article4} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="Famous Welsh Myths and Legends" />
            <p className="font-semibold my-1">Famous Welsh Myths and Legends in North Wales</p>
            <a href="https://www.twinkl.co.uk/teaching-wiki/welsh-myths-and-legends" className="underline" target="_blank">Read Article</a>
          </div>
          <div className="">
            <img src={article2} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="Our ultimate guide to climbing the mountains of North Wales" />
            <p className="font-semibold my-1">Our ultimate guide to climbing the mountains of North Wales</p>
            <a href="https://www.walescottageholidays.co.uk/guides/north-wales-mountain-guide" className="underline" target="_blank">Read Article</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
