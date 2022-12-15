import React from 'react';
import Image from 'next/image';
import images from '../assets';

const Mid = () => {
  return (
    <>
      <div className="flex px-[200px] py-[90px] bg-[#504A6B]">
        <div className="flex justify-center items-center w-[25%]">
          <div>
            <h2 className=" text-sm font-semibold text-center text-white">
              2.9M+
            </h2>
            <h2 className="mt-3 text-sm text-[#8E88AB]">Domains Registered+</h2>
          </div>
        </div>
        <div className="flex justify-center items-center w-[25%]">
          <div>
            <h2 className=" text-sm font-semibold text-center text-white">
              2K+
            </h2>
            <h2 className="mt-3 text-sm text-[#8E88AB]">
              Coins + Tokens Supported
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center w-[25%]">
          <div>
            <h2 className=" text-sm font-semibold text-center text-white">
              600+
            </h2>
            <h2 className="mt-3 text-sm text-[#8E88AB]">Integrations</h2>
          </div>
        </div>
        <div className="flex justify-center items-center w-[25%]">
          <div>
            <h2 className=" text-sm font-semibold text-center text-white">
              700+
            </h2>
            <h2 className="mt-3 text-sm text-[#8E88AB]">Partners</h2>
          </div>
        </div>
      </div>
      {/* gas one */}

      <div className="flex border-y-2 justify-center items-center px-[200px] py-[90px] bg-[#504A6B]">
        <div>
          <h2 className="my-[60px] text-[30px] font-semibold text-center text-white">
            Your Name for Web 3
          </h2>
          <h2 className="mt-3 inline text-l text-[#8E88AB]">
            <Image
              src={images.Dollar}
              alt="Logo"
              height={20}
              style={{ display: 'inline-block' }}
            />
            &nbsp;&nbsp;&nbsp; Simple Payments&nbsp;&nbsp; /&nbsp;&nbsp;&nbsp;
            <Image
              src={images.Profile}
              alt="Logo"
              height={20}
              style={{ display: 'inline-block' }}
            />
            &nbsp;&nbsp; Web3 Username &nbsp;&nbsp;/ &nbsp;&nbsp;&nbsp;
            <Image
              src={images.Domain}
              alt="Logo"
              height={20}
              style={{ display: 'inline-block' }}
            />
            &nbsp;&nbsp;&nbsp; Website URL
          </h2>
        </div>
      </div>

      {/* gas one */}

      <div className="flex px-[200px] py-[90px] bg-[#504A6B]">
        <div className="flex justify-center items-center w-[25%]">
          <div>
            <Image
              src={images.Dollar}
              alt="Logo"
              height={30}
              className="my-8 mx-auto"
            />
            <h2 className=" text-sm font-semibold text-center text-white">
              No renewal fees
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center w-[25%]">
          <div>
            <Image
              src={images.Polygon}
              alt="Logo"
              height={30}
              className="my-8 mx-auto"
            />
            <h2 className=" text-sm font-semibold text-center text-white">
              No gas fees on Polygon
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center w-[25%]">
          <div>
            <Image
              src={images.Five}
              alt="Logo"
              height={30}
              className="my-8 mx-auto"
            />

            <h2 className=" text-sm font-semibold text-center text-white">
              Starting at $5+
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center w-[25%]">
          <div>
            <Image
              src={images.Domain}
              alt="Logo"
              height={30}
              className="my-8 mx-auto"
            />
            <h2 className=" text-sm font-semibold text-center text-white">
              Get Your SubDomains
            </h2>
          </div>
        </div>
      </div>

      {/* gas one */}

      {/* Search Bar */}

      <div className="flex border-y-2 justify-center items-center px-[200px] py-[70px] bg-[#504A6B]">
        <div>
          <Image
            src={images.UD}
            alt="Logo"
            height={30}
            className="my-8 mx-auto"
          />
          <h2 className="my-7 text-[30px] font-semibold text-center text-white">
            Type Your Name
          </h2>
          <div className="flex">
            <input
              type="text"
              className="text-white pl-4 bg-[#423A62] w-[700px] h-[72px]"
              placeholder="Enter your name here"
            />
            <button className="btn btn-blue w-[90px] h-[72px] text-white bg-[#775AF0]">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* gas one */}
    </>
  );
};

export default Mid;
