import React from 'react'
import EventsCard from './EventsCard'
import llangollen from '../../assets/antur/img/llangollen-international-musical-eisteddfod.jpg'
import gwylfwyd from '../../assets/antur/img/gwyl-fwyd-food-festival.jpg'
import slateman from '../../assets/antur/img/slateman-triathlon-&-duathlon.webp'
import aquasphere from '../../assets/antur/img/aquasphere-snowman-swim.jpeg'

const LatestEvents = () => {
  return (
    <section className="my-20 w-[85%] mx-auto">
      <p className="text-2xl font-bold mb-6">Latest Events</p>
      <ul className="flex items-center justify-between">
        <EventsCard>
          <img src={llangollen} alt="" className="h-1/2 w-full object-cover object-center" />
          <div className="h-1/2 p-2">
            <p className="text-xl font-bold mb-1">Llangollen International Musical Eisteddfod</p>
            <p className="text-lg">Kicking off the summer each July this festival celebrates global music, dance, and cultural exchange.</p>
          </div>
        </EventsCard>
        <EventsCard>
          <img src={gwylfwyd} alt="" className="h-1/2 w-full object-cover object-center" />
          <div className="h-1/2 p-2">
            <p className="text-xl font-bold mb-1">Gŵyl Fwyd Caernarfon Food Festival</p>
            <p className="text-lg">Every May a vibrant culinary celebration takes over Caernarfon showcasing local food producers, chefs, and artisans.</p>
          </div>
        </EventsCard>
        <EventsCard>
          <img src={slateman} alt="" className="h-1/2 w-full object-cover object-center" />
          <div className="h-1/2 p-2">
            <p className="text-xl font-bold mb-1">Slateman Triathlon & Duathlon</p>
            <p className="text-lg">Held in Snowdonia, Wales featuring stunning landscapes and demanding courses for athletes of all levels.</p>
          </div>
        </EventsCard>
        <EventsCard>
          <img src={aquasphere} alt="" className="h-1/2 w-full object-cover object-center" />
          <div className="h-1/2 p-2">
            <p className="text-xl font-bold mb-1">Aquasphere Snowman Swim</p>
            <p className="text-lg">An exhilarating open water swimming event attracting swimmers from around the world to test their skills in the stunning natural landscape.</p>
          </div>
        </EventsCard>
      </ul>
    </section>
  )
}

export default LatestEvents
