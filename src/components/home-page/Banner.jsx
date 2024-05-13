import React from 'react'
import html_icon from '../../assets/home-page/html.svg';
import css_icon from '../../assets/home-page/css.svg';
import javascript_icon from '../../assets/home-page/javascript.svg';
import tailwind_icon from '../../assets/home-page/tailwind.svg';
import typescript_icon from '../../assets/home-page/typescript.svg';
import react_icon from '../../assets/home-page/react.svg';
import ai_icon from '../../assets/home-page/ai.svg';
import git_icon from '../../assets/home-page/git.svg';
import figma_icon from '../../assets/home-page/figma.svg';

const Banner = () => {
  return (
    <ul className="flex items-center justify-evenly bg-[#1E1E1E] text-[#39AEF0] h-[180px]">
      <li className="flex flex-col items-center text-sm">
        <img src={ html_icon } alt="" className="mb-3" />
        HTML
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ css_icon } alt="" className="mb-3" />
        CSS
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ javascript_icon } alt="" className="mb-3" />
        JavaScript
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ tailwind_icon } alt="" className="mb-3" />
        tailwind
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ typescript_icon } alt="" className="mb-3" />
        TypeScript
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ react_icon } alt="" className="mb-3" />
        React
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ ai_icon } alt="" className="mb-3" />
        AI
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ git_icon } alt="" className="mb-3" />
        Git
      </li>
      <li className="flex flex-col items-center text-sm">
        <img src={ figma_icon } alt="" className="mb-3" />
        Figma
      </li>
    </ul>
  )
}

export default Banner
