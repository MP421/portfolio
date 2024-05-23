import React from 'react'
import Card from './Card'
import snowdon from '../../assets/antur/img/snowdon-2.jpg'
import caernarfoncastle from '../../assets/antur/img/caernarfon-castle.jpg'
import bodnantgarden from '../../assets/antur/img/bodnant-garden.jpg'
import greatorme from '../../assets/antur/img/great-orme.jpg'
import portmeirionvillage from '../../assets/antur/img/portmeirion-village.jpg'
import zipworld from '../../assets/antur/img/zip-world.jpg'

const ThingsToDo = () => {
  return (
    <section className="my-20 w-[85%] mx-auto" id="things-to-do">
      <p className="text-2xl font-bold text-center md:text-left">Things To Do</p>
      <p className="text-xl font-bold mt-1 mb-6 text-center md:text-left">Top Attractions in North Wales</p>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start justify-between">
        <Card>
          <img src={snowdon} className="h-48 w-full object-cover object-center" alt="Snowdon" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Snowdon</p>
            <p className="text-md">
              With an elevation of 1,085 metres Snowdon is the highest mountain in Wales and offers some of the most stunning views you'll find anywhere in the world.
            </p>
          </div>
        </Card>
        <Card>
          <img src={caernarfoncastle} className="h-48 w-full object-cover object-center" alt="Caernarfon Castle" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Caernarfon Castle</p>
            <p className="text-md">
              One of many historic castles in North Wales, Caernarfon Castle is a UNESCO World Heritage Site and has 1,000 years of stories to tell involving Kings, Romans and political intrigue.
            </p>
          </div>
        </Card>
        <Card>
          <img src={bodnantgarden} className="h-48 w-full object-cover object-center" alt="Bodnant Garden" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Bodnant Garden</p>
            <p className="text-md">
              Located near the historical town of Conwy this majestic National Trust site contains many beautiful and unique plants, flowers and trees.
            </p>
          </div>
        </Card>
        <Card>
          <img src={greatorme} className="h-48 w-full object-cover object-center" alt="Great Orme" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Great Orme</p>
            <p className="text-md">
              The Great Orme is a majestic limestone headland towering  over the Irish Sea, offering stunning vistas, a rich natural habitat,  and archaeological treasures.
            </p>
          </div>
        </Card>
        <Card>
          <img src={portmeirionvillage} className="h-48 w-full object-cover object-center" alt="Portmeirion Village" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Portmeirion Village</p>
            <p className="text-md">
              First opened to the public in 1926, Portmeirion Village is a whimsical and picturesque Italian-inspired coastal village, renowned for its colourful architecture and lush gardens near the town of Porthmadog.
            </p>
          </div>
        </Card>
        <Card>
          <img src={zipworld} className="h-48 w-full object-cover object-center" alt="Zip World" />
          <div className="p-2">
            <p className="text-lg font-bold mb-1">Zip World</p>
            <p className="text-md">
              Get the adrenaline pumping as you zipline through the treetops with locations in Betws-Y-Coed, Penrhyn Quarry, Llechwedd and Conwy.
            </p>
          </div>
        </Card>
      </ul>
    </section>
  )
}

export default ThingsToDo
