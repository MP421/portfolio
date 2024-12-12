import React, { useState } from 'react';
import features_tab_1 from '../../assets/rhestr/img/illustration-features-tab-1.svg';
import features_tab_2 from '../../assets/rhestr/img/illustration-features-tab-2.svg';
import features_tab_3 from '../../assets/rhestr/img/illustration-features-tab-3.svg';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="w-[95%] my-16 m-auto flex flex-col items-center gap-12 md:w-[75%]" id="features">
      <h2 className="text-3xl font-bold">Features</h2>
      <p className="text-lg text-center font-medium">
        Our aim is to make it quick and easy for you to access your
        <br />
        favourite websites. Your bookmarks sync between your devices
        <br />
        so you can access them on the go.
      </p>
      <ul className="w-[70%] flex items-center justify-between border-b-2 border-b-[#9194a1] text-xl">
        <li
          className={`cursor-pointer w-full text-center hover:text-[#fa5757] ${activeTab === 0 ? 'font-bold border-b-4 border-[#fa5757]' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Simple Bookmarking
        </li>
        <li
          className={`cursor-pointer w-full text-center hover:text-[#fa5757] ${activeTab === 1 ? 'font-bold border-b-4 border-[#fa5757]' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Speedy Searching
        </li>
        <li
          className={`cursor-pointer w-full text-center hover:text-[#fa5757] ${activeTab === 2 ? 'font-bold border-b-4 border-[#fa5757]' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Easy Sharing
        </li>
      </ul>
      <div>
        <div className={`flex items-center justify-between text-lg gap-20 ${activeTab === 0 ? '' : 'hidden'}`}>
          <img src={features_tab_1} className="w-1/2" alt="Simple Bookmarking" />
          <div className="flex flex-col gap-8 w-[500px]">
            <h3 className="text-xl font-medium">Bookmark in one click</h3>
            <p className="text-[#9194a1] font-medium">
              Organize your bookmarks however you like. Our
              <br />
              simple drag-and-drop interface gives you complete
              <br />
              control over how you manage your favourite sites.
            </p>
            <button className="bg-[#5368df] text-white border-2 border-[#5368df] w-[150px] h-[40px] rounded-[5px] shadow-xl cursor-pointer">More info</button>
          </div>
        </div>
        <div className={`flex items-center justify-between text-lg gap-20 ${activeTab === 1 ? '' : 'hidden'}`}>
          <img src={features_tab_2} className="w-1/2" alt="Speedy Searching" />
          <div className="flex flex-col gap-8 w-[500px]">
            <h3 className="text-xl font-medium">Intelligent search</h3>
            <p className="text-[#9194a1] font-medium">
              Our powerful search feature will help you find saved
              <br />
              sites in no time at all. No need to trawl through all of
              <br />
              your bookmarks.
            </p>
            <button className="bg-[#5368df] text-white border-2 border-[#5368df] w-[150px] h-[40px] rounded-[5px] shadow-xl cursor-pointer">More info</button>
          </div>
        </div>
        <div className={`flex items-center justify-between text-lg gap-20 ${activeTab === 2 ? '' : 'hidden'}`}>
          <img src={features_tab_3} className="w-1/2" alt="Easy Sharing" />
          <div className="flex flex-col gap-8 w-[500px]">
            <h3 className="text-xl font-medium">Share your bookmarks</h3>
            <p className="text-[#9194a1] font-medium">
              Easily share your bookmarks and collections with
              <br />
              others. Create a shareable link that you can send at
              <br />
              the click of a button.
            </p>
            <button className="bg-[#5368df] text-white border-2 border-[#5368df] w-[150px] h-[40px] rounded-[5px] shadow-xl cursor-pointer">More info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
