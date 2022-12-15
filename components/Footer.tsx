import React from 'react';
import Image from 'next/image';
import images from '../assets';

const Footer = () => {
  return (
    <div className="flex  justify-center items-center px-[200px] py-[70px] bg-[#1B1631] ">
      <div>
        <Image
          src={images.Heart}
          alt="Logo"
          height={60}
          className="my-2 mx-auto"
        />
        <h1 className="mt-[50px] font-grad font-bold text-6xl text-cyan-50">
          Thanks for visiting
        </h1>
      </div>
      {/* <div className="">
        <span>© Unstoppable Domains Inc. All Rights Reserved.</span>
      </div> */}
    </div>
  );
};

export default Footer;
