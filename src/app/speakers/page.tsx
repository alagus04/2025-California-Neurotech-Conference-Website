'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<{
    name: string;
    image: string;
    description: string;
    writeup: string;
  } | null>(null);
  

  const speakers = [
    {
      name: "Dr. Philip Sabes",
      image: "/Philip_Sabes.jpg",
      description: "Cofounder of Neuralink, Starfish Neuroscience, Integral, Professor Emeritus @ UCSF",
      writeup: "Dr. Philip Sabes is a Professor Emeritus at UCSF, and has founded some of the most groundbreaking startups in the neurotech space. Dr. Sabes holds two bachelor's degrees in Physics and Mathematics from the University of Washington and Cambridge University, a PhD in Brain and Cognitive Science from MIT where he studied machine learning and motor control, and a postdoc from Caltech and the Salk Institute. In 2000, Dr. Sabes joined the UCSF Department of Physiology as a Professor. The Sabes Lab studied how sensory and motor experience shapes movement control, and also built new tools for brain-interfacing. Dr. Sabes was asked to build the founding team of Neuralink, and in 2017, he retired from UCSF to work full-time there, where he built on his brain-interfacing work started in his lab. In 2020, Dr. Sabes co-founded Starfish Neuroscience which is working on non-invasive neuromodulation and advanced implantable brain interfaces. He is currently working on his newest startup: Integral Neurotechnologies. "
    },
    {
      name: "Spero Koulouras",
      image: "/Spero_Koulouras.png",
      description: "Founder, Autonomous Living Technologies",
      writeup: "Spero Koulouras is the founder and chairman of Autonomous Living Technologies (AULI.TECH), which is on a mission to leverage AI and robotics to create affordable, assistive devices. Since graduating from the University of Michigan with a degree in Computer Engineering in 1982, Mr. Koulouras has accumulated 40+ years of industry experience leading engineering teams in AI, telecom, and automation. After being diagnosed with ALS in 2019, Mr. Koulouras switched gears and dedicated his career to improving quality of life for impaired individuals through engineering. AULI.TECH recently released Cato, a wearable device that recognizes miniscule movements and unlocks complex commands to navigate life using AI. Mr. Koulouras’s aim, as he shared in a heartfelt interview, is to create products that “adapt to the disability, rather than have a person adapting to the product.” "
    },
    {
      name: "Dr. Gert Cauwenberghs",
      image: "/Gert_Cauwenberghs.png",
      description: "Professor of Bioengineering @ UCSD, Co-Director of Institute for Neural Computation",
      writeup: "Dr. Gert Cauwenberghs is a Professor of Bioengineering, and Co-Director of the Institute for Neural Computation at UC San Diego. He specialises in micropower mixed-signal VLSI circuits and systems, neuron-silicon interfaces, brain-computer interfaces, and large-scale computation. Dr. Cauwenberghs received his M.Eng from the University of Brussels, and his Ph.D in Electrical Engineering from Caltech. Prior to joining UCSD, he held positions as Professor of Electrical and Computer Engineering at Johns Hopkins University, and as Visiting Professor of Brain and Cognitive Science at MIT. Currently, the Cauwenberghs Group is doing ground-breaking work in developing parallel microchips that emulate the structure and function of adaptive neural circuits in silicon, which have embedded mechanisms of synaptic plasticity. "
    },
    {
      name: "Dr. Erika Ross Ellison",
      image: "/Erika.jpeg",
      description: "President of IEEE EMBS, VP, Clinical, Regulatory, and Quality at ONWARD",
      writeup: ""
    },
    {
      name: "Dr. Albert Rizzo",
      image: "/Albert_Rizzo.jpg",
      description: "Research Professor of Psychiatry & Behavioural Sciences @ USC, Assistant Director of Institute of Creative Technologies",
      writeup: ""
    },
    {
      name: "JoJo Platt",
      image: "/JoJo_Platt.jpg",
      description: "US Partnerships Lead @ Corundrum Neuroscience",
      writeup: "With 15+ years of experience in the neurotechnology space, JoJo Platt is a recognized leader in bridging the gap between medtech, commercialization and investment. She is the US Partnerships Lead for Corundum Neuroscience, where she works with venture capitalist companies to identify promising early-stage startups, focusing on the areas of sleep, stress and anxiety, and novel sensing technologies. She also serves on the organizing committees of the industry’s most significant conferences, including IEEE’s Neural Engineering Conference and EMBC, BioElectronic Medicine Forum, Neurotech Leaders Forum, and is a founding chair of the Cleveland NeuroDesign Entrepreneurs Workshop."
    },
    {
      name: "Dr. Arash Adami",
      image: "/Arash_Adami.jpg",
      description: "Founder and CEO @ Alpha Fiber, Faculty Lecturer in Neuroscience @ UCSF",
      writeup: "Arash Adami is a neuroscientist with over 15+ years of experience in both industry and academia. Dr. Adami is the Founder and CEO of Alpha Fiber, a healthtech startup providing the only real-time solution for detecting concussions in athletes using computer vision. He is also a faculty lecturer in Neuroscience at San Diego State University. Dr. Adami received his Ph.D in Neuroscience in 2013 from UC Riverside, where he studied the neuroscience of traumatic brain injury and MRI physics. Since then, he worked for 5+ years in regulatory affairs, pharmaceutical consulting and scientific writing, before founding his own company, combining his passions in neuroscience, physics and sports."
    },
    {
      name: "Ruthie Forney",
      image: "/Ruthie.jpeg",
      description: "VP of Products @ Precision Neuroscience",
      writeup: ""
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f2f6fe]">
            <div className='opacity-90 w-full relative'>
        <Image
          src="/About.jpg"
          alt="image"
          width={2000}
          height={500}
          className="object-cover sm:h-[60vh] md:h-1/2 md:-mt-32 h-[70vh] w-full"
        />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl sm:text-5xl md:text-7xl leading-loose top-1/4 left-1/2 transform -translate-x-1/2">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl mb-14">Our Speakers</h1>
          <p className='text-3xl md:w-[80%] text-center'>
            Explore the brilliant minds at CNTC, driving innovation in neurotechnology and neuroscience in academia and industry.
          </p>
        </div>
      </div>

      {/* Grid Layout for Speakers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mt-10">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedSpeaker(speaker)}
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={128}
              height={128}
              className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
            />
            <h2 className="mt-3 text-xl font-semibold">{speaker.name}</h2>
            <p className="text-sm text-gray-500">{speaker.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl p-6 md:p-10 shadow-lg w-11/12 md:w-1/2 lg:w-1/2 text-center">
            {/* Close Button - Positioned at Top Right of Modal */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            
            <Image
              src={selectedSpeaker.image}
              alt={selectedSpeaker.name}
              width={150}
              height={150}
              className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">{selectedSpeaker.name}</h2>
            <p className="text-gray-600 mt-2">{selectedSpeaker.description}</p>
            <p className='mt-10'>{selectedSpeaker.writeup}</p>
          </div>
        </div>
      )}

    </main>
  );
}

