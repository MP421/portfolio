import React from 'react';
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
  const items = [
    { icon: html_icon, label: 'HTML' },
    { icon: css_icon, label: 'CSS' },
    { icon: javascript_icon, label: 'JavaScript' },
    { icon: tailwind_icon, label: 'Tailwind' },
    { icon: typescript_icon, label: 'TypeScript' },
    { icon: react_icon, label: 'React' },
    { icon: ai_icon, label: 'AI' },
    { icon: git_icon, label: 'Git' },
    { icon: figma_icon, label: 'Figma' },
  ];

  return (
    <div className="overflow-hidden bg-[#1E1E1E] h-[150px]">
      <div className="animate-scroll h-full flex items-center justify-center">
        {[...items, ...items].map((item, index) => (
          <li key={index} className="flex flex-col items-center text-md mx-8 whitespace-nowrap">
            <img src={item.icon} alt={item.label} className="mb-3 h-[32px] object-cover object-center" />
            {item.label}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Banner;
