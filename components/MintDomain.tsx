import React, { useState } from 'react';
import { Modal, Button, Text, useTheme } from '@nextui-org/react';

import Image from 'next/image';
import images from '../assets';
import { Loader } from '../components';
import { ethers } from 'ethers';
import { ExternalProvider } from '@ethersproject/providers';

import subDomainAbi from '../utils/subDomain.json';

const MintDomain = () => {
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // Modal part
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hash, setHash] = useState('');

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  // ethers js part connect to blockchain start here

  const subDomainAddress = '0xAD9d8988E2d36a9fC693b4Ea0fd5c55759fDE4b1';
  const subDomainAddressABI = subDomainAbi;

  let subDomainContract: ethers.Contract;
  let provider: ethers.providers.Web3Provider;
  if (typeof window !== 'undefined') {
    provider = new ethers.providers.Web3Provider(
      window.ethereum as unknown as ExternalProvider
    );

    const signer = provider.getSigner();

    subDomainContract = new ethers.Contract(
      subDomainAddress,
      subDomainAddressABI,
      signer
    );
  }

  const demoArray = name.split('.');

  const mintNow = async () => {
    setVisible(true);
    setIsLoading(true);
    try {
      const gasPrice = await provider.getGasPrice();
      const tx = await subDomainContract.functions[
        'issueWithRecords(address,string[],string[],string[])'
      ](address, demoArray, [], [], { gasPrice }).then((receipt) =>
        receipt.wait()
      );
      const proposeTx = {
        hash: tx.transactionHash,
      };

      setHash(tx.transactionHash);
      console.log(proposeTx);
      setIsLoading(false);
      setAddress('');
      setName('');
    } catch (error) {
      // setIsLoading(false);
      console.error(error);
    }
  };

  const handleAddress = async (e: any) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const SubName = async (e: any) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="py-[200px] flex justify-center items-center bg-[#1B1631]">
      <div className="p-[100px] rounded-xl bg-[#211f33]  ">
        <div className="flex justify-center items-center ">
          <Image
            src={images.Fevicon}
            alt="Logo"
            className="flex justify-center items-center"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h1 className="font-grad font-semibold text-[30px] ">
            Mint SubDomain
          </h1>
        </div>
        <br />
        <input
          type="text"
          className="text-white mt-[70px] mb-[45px] pl-4 bg-[#211f33] border rounded w-[400px] h-[42px]"
          placeholder="Enter your address"
          required
          pattern="[a-z0-9]+[a-z0-9.]+\.[a-z]{2,}$"
          onChange={handleAddress}
        />
        <br />
        <input
          type="text"
          className="text-white mb-[45px] pl-4 bg-[#211f33] border rounded w-[400px] h-[42px]"
          placeholder="subdomain.domain.tld"
          required
          onChange={SubName}
        />
        <br />
        <button
          className="rounded btn btn-blue w-[100px] h-[42px] text-white bg-[#775AF0]"
          onClick={mintNow}
        >
          Mint
        </button>
        {/* </form> */}

        <Modal
          closeButton
          css={{
            // background: '$1B1631',
            background: 'rgb(27, 22, 49)',

            // fontSize: '$sm',
            // padding: '$2 $4',
          }}
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Body>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Text
                  className="mx-auto"
                  b
                  id="modal-title"
                  size={18}
                  css={{
                    // background: '$1B1631',
                    color: '$white',

                    // fontSize: '$sm',
                    // padding: '$2 $4',
                  }}
                >
                  Your SubDomains is Here
                </Text>
                <Button
                  flat
                  color="secondary"
                  auto
                  onClick={() =>
                    window.open(`https://polygonscan.com/tx/${hash}`, '_blank')
                  }
                >
                  View on explorer
                </Button>
              </>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default MintDomain;
