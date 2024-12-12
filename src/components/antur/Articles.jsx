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
      <div className="flex flex-col md:flex-row items-center h-auto md:h-[500px] w-full">
        <div className="h-full md:w-1/2">
          <img src={article1} className="h-3/4 md:h-full w-full object-cover object-center rounded-2xl" alt="Why North Wales is the Perfect Destination for a Unique Summer Trip: A Must-Read Guide" />
          <p className="font-semibold my-4 text-center md:text-left">Why North Wales is the Perfect Destination for a Unique Summer Trip: A Must-Read Guide</p>
          <a href="https://ourcrossings.com/2023/10/16/some-of-the-best-things-to-see-and-do-in-north-wales-must-read-guide/" className="underline block text-center md:text-left" target="_blank">Read Article</a>
        </div>
        <div className="h-full md:w-1/2 grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 md:ml-6 mt-16 md:mt-0">
          <div>
            <img src={article5} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="The 10 best places to stay in North Wales" />
            <p className="font-semibold my-1 text-center md:text-left">The 10 best places to stay in North Wales</p>
            <a href="https://www.walescottageholidays.co.uk/guides/best-places-stay-north-wales" className="underline block text-center md:text-left" target="_blank">Read Article</a>
          </div>
          <div>
            <img src={article3} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="Why North Wales is worthy of your Bucket List" />
            <p className="font-semibold my-1 text-center md:text-left">Why North Wales is worthy of your Bucket List</p>
            <a href="https://www.ourbeautifuladventure.co.uk/blog/why-north-wales-is-worthy-of-your-bucket-list" className="underline block text-center md:text-left" target="_blank">Read Article</a>
          </div>
          <div>
            <img src={article4} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="Famous Welsh Myths and Legends" />
            <p className="font-semibold my-1 text-center md:text-left">Famous Welsh Myths and Legends in North Wales</p>
            <a href="https://www.twinkl.co.uk/teaching-wiki/welsh-myths-and-legends" className="underline block text-center md:text-left" target="_blank">Read Article</a>
          </div>
          <div>
            <img src={article2} className="h-2/3 w-full object-cover object-center rounded-2xl" alt="Our ultimate guide to climbing the mountains of North Wales" />
            <p className="font-semibold my-1 text-center md:text-left">Our ultimate guide to climbing the mountains of North Wales</p>
            <a href="https://www.walescottageholidays.co.uk/guides/north-wales-mountain-guide" className="underline block text-center md:text-left" target="_blank">Read Article</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
