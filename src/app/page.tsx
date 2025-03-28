'use client';
import Image from 'next/image'
import ntb from '../../public/ntb.png'
import ntsc from '../../public/ntsc.png'
import crux from '../../public/crux.png'
import ntsd from '../../public/ntsd.png'
import ntd from '../../public/ntd.png'
import ntechx from '../../public/ntechx.png'
import ntechusc from '../../public/ntechusc.png'
import angry from '../../public/angry.png'
import home_1 from '../../public/home_1.png'
import main from '../../public/main.jpg'

import biosensors from '../../public/biosensors.jpg'
import postersesh from '../../public/postersesh.jpg'
import robothand from '../../public/robothand.jpg'
import audience from '../../public/audience.jpg'
import panel from '../../public/panel.jpg'

import Link from "next/link"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import Carousel from '../../components/Carousel';


export default function Home() {
  return (
    <main>
      {/*<h1 className="pt-64 p-10 text-6xl md:p-40 md:py-60 md:flex flex-row justify-between font-bold mb-1">California Neurotechnology Conference</h1>*/}

      {/* Image Container with Relative Positioning */}
      <div className="relative w-full mt-20">
      <Image
        src={main}
        width={3000}
        height={2000}
        alt="Main"
        className="object-cover sm:h-[80vh] md:h-2/3 h-[70vh] w-full"
      />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-start top-1/4 left-20 md:left-40 text-white text-xl md:text-7xl font-bold leading-loose">
        <h1 className="sm:text-4xl md:text-4xl lg:text-6xl">2025 California</h1>
        <h1 className="sm:text-4xl md:text-4xl lg:text-6xl">Neurotechnology</h1>
        <h1 className="sm:text-4xl md:text-4xl lg:text-6xl">Conference</h1>
        <div className='mt-4 md:mt-8'>
          <h2 className="sm:text-xl md:text-4xl">Saturday, April 26th, 2025</h2>
        </div>
        <div>
          <h2 className="sm:text-xl md:text-4xl">UC San Diego</h2>
        </div>
      </div>
    </div>

    <div className='h-screen flex flex-col md:flex-row justify-center items-center'>
     <div className='ml-10 flex flex-col font-bold text-4xl sm:text-5xl mb-6 sm:mb-10 text-center md:text-left md:w-[50%]'>
      <h2>Pioneering the</h2>
      <h2>future of</h2>
      <h2 className='font-bold bg-gradient-to-r from-[#131b90] via-[#66b9e8] to-[#99daff] bg-clip-text text-transparent mb-4'>
        neurotechnology.
      </h2>
      <p className='mt-6 font-normal text-lg sm:text-2xl md:w-[90%] leading-[1.5]'>
      The third annual California Neurotechnology Conference is coming to SoCal! Established in 2023, this is the only West-Coast conference bringing together students and experts for a day dedicated to expanding the frontiers of neurotechnology.
      </p>
    </div>
  <div className='flex justify-center md:w-[40%] mt-6 md:mt-0'>
    <Image 
      src="/poster.jpeg"
      width={1300}
      height={900}
      alt="poster"
    />
  </div>
</div>


      <div className="flex flex-row items-center justify-center place-items-center pt-8">
        <span className="flex font-outfit text-2xl">
          Presented By
        </span>
      </div>
      
      <div className="py-10 px-4 md:flex md:flex-row justify-between">
      <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
            <Image
              src={ntb}
              width={100}
              height={100}
              alt="Logo"
              className="rounded-full overscroll-hidden"
            />
          </div>

          <span className="font-outfit font-thin text-xs">
            Neurotech@Berkeley
          </span>
        </div>
      
        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={crux}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            CruX@LA
          </span>
        </div>

        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntd}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            Neurotech@Davis
          </span>
        </div>
      
        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntsd}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            Triton Neurotech@UCSD
          </span>
        </div>

        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntsc}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            NeuroTechSC@UCSC
          </span>
        </div>

        <div className='flex flex-col p-8 items-center'>
          <div className='h-24 w-24 flex items-center justify-center'>
              <Image
                src={ntechusc}
                width={100}
                height={100}
                alt="Logo"
                className="rounded-full overscroll-hidden"
              />
            </div>
          <span className="font-outfit font-thin text-xs">
            Neurotech USC
          </span>
        </div>
      </div>
      

      <div className="flex flex-col items-center justify-center place-items-center pb-11">
        <span className="flex font-outfit text-2xl p-11">
          In collaboration with
        </span>
        <Image
              src={ntechx}
              width={500}
              height={400}
              alt="Logo"
          />

      </div>

        
        <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
