import React from 'react';
import chrome from '../../assets/rhestr/img/logo-chrome.svg';
import firefox from '../../assets/rhestr/img/logo-firefox.svg';
import opera from '../../assets/rhestr/img/logo-opera.svg';
import bgdots from '../../assets/rhestr/img/bg-dots.svg';

const Install = () => {
  return (
    <section class="flex flex-col gap-8 w-[66%] h-[600px] m-auto text-center" id="install">
      <p class="text-3xl font-bold">Download the extension</p>
      <p class="text-lg text-center font-medium">
        We've got more browsers in the pipeline. Please do let us know if
        <br />
        you've got a favourite you'd like us to prioritize
      </p>
      <ul class="flex items-center justify-between">
        <li class="h-[300px] w-[300px] flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-xl bg-slate-50">
          <img src={ chrome } alt="" />
          <p class="font-semibold">Add to Chrome</p>
          <p class="text-sm">Minimum version 62</p>
          <img src={ bgdots } alt="" />
          <button className="font-semibold bg-[#5368df] text-white bottom-2 border-[#5368df] h-[40px] w-[250px] cursor-pointer rounded-md shadow-lg">Add & Install Extension</button>
        </li>
        <li class="h-[300px] w-[300px] flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-xl bg-slate-50">
          <img src={ firefox } alt="" />
          <p class="font-semibold">Add to Firefox</p>
          <p class="text-sm">Minimum version 55</p>
          <img src={ bgdots } alt="" />
          <button className="font-semibold bg-[#5368df] text-white bottom-2 border-[#5368df] h-[40px] w-[250px] cursor-pointer rounded-md shadow-lg">Add & Install Extension</button>
        </li>
        <li class="h-[300px] w-[300px] flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-xl bg-slate-50">
          <img src={ opera } alt="" />
          <p class="font-semibold">Add to Opera</p>
          <p class="text-sm">Minimum version 46</p>
          <img src={ bgdots } alt="" />
          <button className="font-semibold bg-[#5368df] text-white bottom-2 border-[#5368df] h-[40px] w-[250px] cursor-pointer rounded-md shadow-lg">Add & Install Extension</button>
        </li>
      </ul>
    </section>
  )
}

export default Install
