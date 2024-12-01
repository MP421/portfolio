import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-[90%] mx-auto mt-28 pb-4 text-slate-700">
      <p className="text-sm">All rights reserved &copy; 2024 Jonathan Owen</p>
      <ul className="flex items-center justify-center gap-6">
        <li>
          <a href="https://github.com/MP421" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jonathan-owen-fullstack-specialist/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/fullstackjon.bsky.social" target="_blank">
            <i class="fa-brands fa-bluesky"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
