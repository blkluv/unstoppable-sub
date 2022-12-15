import Image from 'next/image';
import images from '../assets';
import { Loading } from '@nextui-org/react';

const Loader = () => (
  <div className="flex  flex-col w-full my-4  ">
    <Loading type="points" />
    <Image
      className="mx-auto items-center justify-center "
      src={images.UDLove}
      alt="loader"
      width={100}
    />
  </div>
);

export default Loader;
