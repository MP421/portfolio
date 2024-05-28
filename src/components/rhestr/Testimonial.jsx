import React from 'react'
import evan_jones from '../../assets/rhestr/img/evanjones.jpg'
import lucy_evans from '../../assets/rhestr/img/lucyevans.jpg'
import hugo_williams from '../../assets/rhestr/img/hugowilliams.jpg'

const Testimonial = () => {
  return (
    <section className="flex items-center justify-between gap-10 w-[80%] mx-auto my-28" id="users">
      <div className="w-1/3 h-[475px] bg-blue-50 border-4 border-indigo-950 shadow-lg rounded-xl">
        <img src={ evan_jones } alt="" className="mx-auto h-28 w-28 object-cover rounded-full border-4 border-indigo-950 -mt-[60px]" />
        <div className="p-4">
          <p className="text-xl font-bold">Evan Jones</p>
          <p className="text-lg font-bold mb-2">Senior Data Science Consultant</p>
          <p className="text-lg tracking-wider">
            “I love rhestr! It helps me organize my tasks and projects in a simple and intuitive
            way. I can set deadlines, priorities, reminders, and notes for each task. I can also
            sync my lists across all my devices and share them with others. Rhestr is the best
            to do list app I have ever used.”
          </p>
        </div>
      </div>
      <div className="w-1/3 h-[475px] bg-blue-50 border-4 border-indigo-950 shadow-lg rounded-xl">
        <img src={ lucy_evans } alt="" className="mx-auto h-28 w-28 object-cover rounded-full border-4 border-indigo-950 -mt-[60px]" />
        <div className="p-4">
          <p className="text-xl font-bold">Lucy Evans</p>
          <p className="text-lg font-bold mb-2">Global Marketing Strategy Director</p>
          <p className="text-lg tracking-wider">
            “Rhestr is a game-changer for me. It has improved my productivity and efficiency by a
            lot. I can easily create and manage multiple lists for different aspects of my life,
            such as work, school, personal, etc. Rhestr also has a beautiful and user-friendly
            design that makes it a pleasure to use.”
          </p>
        </div>
      </div>
      <div className="w-1/3 h-[475px] bg-blue-50 border-4 border-indigo-950 shadow-lg rounded-xl">
        <img src={ hugo_williams } alt="" className="mx-auto h-28 w-28 object-cover rounded-full border-4 border-indigo-950 -mt-[60px]" />
        <div className="p-4">
          <p className="text-xl font-bold">Hugo Williams</p>
          <p className="text-lg font-bold mb-2">Chief Innovation Officer</p>
          <p className="text-lg tracking-wider">
            “If you are looking for a to do list app that does it all, look no further than rhestr.
            It is a powerful and versatile app that lets you customize your lists to suit your needs
            and preferences. You can add tags, colors, icons, subtasks, attachments, and more to each
            task. You can also sort, filter, search, and archive your lists with ease.”
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
