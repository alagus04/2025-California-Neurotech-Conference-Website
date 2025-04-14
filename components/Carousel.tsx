import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Image from 'next/image';

import Philip_Sabes from '../public/Philip_Sabes.jpg';
import JoJo_Platt from '../public/JoJo_Platt.jpg';
import Gert_Cauwenberghs from '../public/Gert_Cauwenberghs.png';
import Spero_Koulouras from '../public/Spero_Koulouras.png';
import Erika from '../public/Erika.jpeg';
import Albert_Rizzo from '../public/Albert_Rizzo.jpg';
import Arash_Adami from '../public/Arash_Adami.jpg';
import Ruthie from '../public/Ruthie.jpeg';
import Kuzum from '../public/kuzum.jpg';

export default function CarouselComponent() {
  const speakers = [
    { image: Philip_Sabes, name: "Dr. Philip Sabes", description: "Cofounder of Neuralink, Starfish Neuroscience, Integral" },
    { image: Spero_Koulouras, name: "Spero Koulouras", description: "Founder & Chairman of Autonomous Living Technologies" },
    { image: Gert_Cauwenberghs, name: "Dr. Gert Cauwenberghs", description: "Professor of Bioengineering @ UCSD" },
    { image: Erika, name: "Dr. Erika Ross Ellison", description: "President of IEEE EMBS" },
    { image: Albert_Rizzo, name: "Dr. Albert Rizzo", description: "Research Professor of Psychiatry & Behavioural Sciences @ USC" },
    { image: JoJo_Platt, name: "JoJo Platt", description: "US Partnerships Lead @ Corundrum Neuroscience" },
    { image: Arash_Adami, name: "Dr. Arash Adami", description: "Founder and CEO @ Alpha Fiber" },
    { image: Ruthie, name: "Ruthie Forney", description: "VP of Products @ Precision Neuroscience" },
    { image: Kuzum, name: "Dr. Duygu Kuzum", description: "Professor of Electrical and Computer Engineering @ UCSD" }
  ];

  return (
    <Carousel 
      show={4} 
      slide={1} 
      transition={0.5} 
      infinite={true} 
      useArrowKeys={true} 
      autoSwipe={2000} 
      swiping={true} 
      responsive={true}
    >
      {speakers.map((speaker, index) => (
        <div key={index} className="flex flex-col items-center text-center p-2">
          {/* Image container to enforce circular shape */}
          <div className="w-48 h-48 rounded-full overflow-hidden flex justify-center items-center border-4 border-gray-300">
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Speaker Name */}
          <p className="mt-2 font-semibold text-white">{speaker.name}</p>
        </div>
      ))}
    </Carousel>
  );
}
