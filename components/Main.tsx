import React from 'react';
import Image from 'next/image';
import images from '../assets';

const Main = () => {
  return (
    <div className="flex p-[80px] h-[800px]  px-[190px] bg-[#1B1631]">
      <div className="container mx-auto ">
        <h1 className="mt-[100px] font-grad font-bold text-6xl text-cyan-50">
          Having SubDomains <br /> Made Easy
        </h1>
        <br />
        <p className=" text-2xl text-gray-400">
          Own your identity in the digital world.
        </p>
        <Image
          src={images.Home}
          alt="Logo"
          height={60}
          className="my-8 h-1000 w-1000"
        />
      </div>

      <div className=" items-center ">
        <Image
          src={images.Pic}
          alt="Image"
          height={2000}
          className="mt-9 h-100 w-100 float-right"
        />
      </div>
    </div>
  );
};

export default Main;
