import React, { useState, useEffect } from 'react';
import refresh from '../../assets/apod/refresh.svg';
import scrolltobottom from '../../assets/apod/scroll-to-bottom.svg';

const API = 'https://api.nasa.gov/planetary/apod?api_key=';
const key = import.meta.env.VITE_APOD;
const count = '&count=1';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API + key + count);

        if (!res.ok) {
          throw new Error('Something went wrong.');
        }

        const data = await res.json();
        setData(data[0]);
      } catch (error) {
        console.error('Error: ', error);
        alert('Error: ', error);
      }
    }

    fetchData();

    setTimeout(() => {
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('apod-content').style.display = 'block';
    }, 4000);
  }, []);

  const handleRegenerate = () => {
    window.location.reload();
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight
    });
  };

  if (!data) return null;

  return (
    <div>
      <div id="welcome" className="relative h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="h-[96px] w-[96px] border-[8px] border-slate-400 border-t-[8px] border-t-orange-300 rounded-full animate-spin"></div>
        </div>
      </div>
      <div id="apod-content" className="hidden bg-slate-200">
        <div className="relative h-[100dvh] w-[100dvw] overflow-x-hidden">
          <img id="pic" className="absolute top-0 left-0 h-full w-full object-cover object-center" alt="NASA Picture Of The Day" src={data.hdurl} />
          <div className="absolute top-[5%] left-[50%] translate-y-[5%] translate-x-[-50%] h-[90%] w-[90%] text-slate-200">
            <p id="title" className="text-[36px] font-bold w-3/4 pl-8 transition-all hover:bg-slate-800/5 hover:backdrop-blur-xl hover:rounded-[20px] md:text-[72px]">{data.title}</p>
          </div>
          <div id="regenerate-btn" className="absolute top-[5%] right-[5%] h-[42px] w-[42px] flex items-center justify-center bg-slate-200 rounded-[10px] cursor-pointer" onClick={handleRegenerate}>
            <img src={ refresh } alt="Regenerate picture button" />
          </div>
          <div id="scroll-to-bottom-btn" className="absolute bottom-[5%] right-[5%] h-[42px] w-[42px] bg-slate-200 rounded-[10px] cursor-pointer" onClick={handleScrollToBottom}>
            <img src={ scrolltobottom } alt="Scroll to bottom button" />
          </div>
        </div>
        <div className="w-full h-[8px] bg-orange-300"></div>
        <div id="scroll-to-bottom" className="bg-slate-100 text-slate-800">
          <div className="w-[97.5%] flex items-center mx-auto py-20 md:w-[80%]">
            <div className="flex justify-center">
              <div className="w-1/5 uppercase text-sm font-semibold md:text-md">
                <p className="mb-10 pb-2 w-[40px] border-b-4 border-b-orange-300 md:w-[50px]">Date</p>
                <p className="pb-2 w-[92.5px] border-b-4 border-b-orange-300 md:w-[120px]">Description</p>
              </div>
              <div className="w-4/5 text-lg tracking-wider leading-relaxed">
                <p id="date" className="mb-10">{data.date}</p>
                <p id="explanation">{data.explanation}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-[100dvw] bg-orange-300 text-slate-700 font-medium">
          <div className="h-full w-[90%] mx-auto flex items-center justify-between md-[80%]">
            <div>
              <p>NASA Astronomy Picture of the Day</p>
            </div>
            <ul className="flex items-center gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
