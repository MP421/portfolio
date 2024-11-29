import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-[90%] mx-auto mt-28 pb-4 text-slate-700">
      <p className="text-sm">All rights reserved &copy; 2024 Jonathan Owen</p>
      <ul className="flex items-center justify-center gap-6">
        <li>
          <a href="" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i class="fa-brands fa-bluesky"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
