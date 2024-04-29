import React from 'react';

function SideBar() {
  return (
    <div className="flex lg:w-1/5 md:w-1/3 w-full flex-col justify-between items-center  bg-zinc-200 h-full min-h-screen px-3 py-8">
      <div className="flex flex-col items-center w-full">
        <h1 className=" text-2xl ">
          {' '}
          <span className=" font-semibold">9anoun</span>GPT
        </h1>
        <div className="w-3/4 cursor-pointer flex justify-start items-center mt-12 ">
          <div className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-xs  bg-zinc-300 ">
            <span className=" text-lg">&#xFF0B; </span> New Chat
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 cursor-pointer rounded-full bg-white px-4 py-2 w-3/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
          />
        </svg>

        <div className="text-xs w-full">Upgrade to Plus</div>
      </div>
    </div>
  );
}

export default SideBar;
