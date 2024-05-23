import React from 'react'
import EventsCard from './EventsCard'
import llangollen from '../../assets/antur/img/llangollen-international-musical-eisteddfod.jpg'
import gwylfwyd from '../../assets/antur/img/gwyl-fwyd-food-festival.jpg'
import slateman from '../../assets/antur/img/slateman-triathlon-&-duathlon.webp'
import aquasphere from '../../assets/antur/img/aquasphere-snowman-swim.jpeg'

const LatestEvents = () => {
  return (
    <section className="my-20 w-[85%] mx-auto" id="latest-events">
      <p className="text-2xl font-bold text-center md:text-left mb-6">Latest Events</p>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
        <EventsCard>
          <img src={llangollen} alt="Llangollen International Musical Eisteddfod" className="h-48 w-full object-cover object-center" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Llangollen International Musical Eisteddfod</p>
            <p className="text-md">Kicking off the summer each July this festival celebrates global music, dance, and cultural exchange.</p>
          </div>
        </EventsCard>
        <EventsCard>
          <img src={gwylfwyd} alt="Gŵyl Fwyd Caernarfon Food Festival" className="h-48 w-full object-cover object-center" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Gŵyl Fwyd Caernarfon Food Festival</p>
            <p className="text-md">Every May a vibrant culinary celebration takes over Caernarfon showcasing local food producers, chefs, and artisans.</p>
          </div>
        </EventsCard>
        <EventsCard>
          <img src={slateman} alt="Slateman Triathlon & Duathlon" className="h-48 w-full object-cover object-center" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Slateman Triathlon & Duathlon</p>
            <p className="text-md">Held in Snowdonia, Wales featuring stunning landscapes and demanding courses for athletes of all levels.</p>
          </div>
        </EventsCard>
        <EventsCard>
          <img src={aquasphere} alt="Aquasphere Snowman Swim" className="h-48 w-full object-cover object-center" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Aquasphere Snowman Swim</p>
            <p className="text-md">An exhilarating open water swimming event attracting swimmers from around the world to test their skills in the stunning natural landscape.</p>
          </div>
        </EventsCard>
      </ul>
    </section>
  )
}

export default LatestEvents
