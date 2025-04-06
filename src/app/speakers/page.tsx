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
      description: "Cofounder of Neuralink, Starfish Neuroscience, Integral",
      writeup: "Dr. Philip Sabes is a Professor Emeritus at UCSF, and has founded some of the most groundbreaking startups in the neurotech space. Dr. Sabes holds two bachelor's degrees in Physics and Mathematics from the University of Washington and Cambridge University, a PhD in Brain and Cognitive Science from MIT where he studied machine learning and motor control, and a postdoc from Caltech and the Salk Institute. In 2000, Dr. Sabes joined the UCSF Department of Physiology as a Professor. The Sabes Lab studied how sensory and motor experience shapes movement control, and also built new tools for brain-interfacing. Dr. Sabes was asked to build the founding team of Neuralink, and in 2017, he retired from UCSF to work full-time there, where he built on his brain-interfacing work started in his lab. In 2020, Dr. Sabes co-founded Starfish Neuroscience which is working on non-invasive neuromodulation and advanced implantable brain interfaces. He is currently working on his newest startup: Integral Neurotechnologies. "
    },
    {
      name: "Spero Koulouras",
      image: "/Spero_Koulouras.png",
      description: "Founder & Chairman of Autonomous Living Technologies",
      writeup: "Spero Koulouras is the founder and chairman of Autonomous Living Technologies (AULI.TECH), which is on a mission to leverage AI and robotics to create affordable, assistive devices. Since graduating from the University of Michigan with a degree in Computer Engineering in 1982, Mr. Koulouras has accumulated 40+ years of industry experience leading engineering teams in AI, telecom, and automation. After being diagnosed with ALS in 2019, Mr. Koulouras switched gears and dedicated his career to improving quality of life for impaired individuals through engineering. AULI.TECH recently released Cato, a wearable device that recognizes miniscule movements and unlocks complex commands to navigate life using AI. Mr. Koulouras's aim, as he shared in a heartfelt interview, is to create products that \"adapt to the disability, rather than have a person adapting to the product.\" "
    },
    {
      name: "Dr. Gert Cauwenberghs",
      image: "/Gert_Cauwenberghs.png",
      description: "Professor of Bioengineering @ UCSD",
      writeup: "Dr. Gert Cauwenberghs is a Professor of Bioengineering, and Co-Director of the Institute for Neural Computation at UC San Diego. He specialises in micropower mixed-signal VLSI circuits and systems, neuron-silicon interfaces, brain-computer interfaces, and large-scale computation. Dr. Cauwenberghs received his M.Eng from the University of Brussels, and his Ph.D in Electrical Engineering from Caltech. Prior to joining UCSD, he held positions as Professor of Electrical and Computer Engineering at Johns Hopkins University, and as Visiting Professor of Brain and Cognitive Science at MIT. Currently, the Cauwenberghs Group is doing ground-breaking work in developing parallel microchips that emulate the structure and function of adaptive neural circuits in silicon, which have embedded mechanisms of synaptic plasticity. "
    },
    {
      name: "Dr. Erika Ross Ellison",
      image: "/Erika.jpeg",
      description: "President of IEEE EMBS",
      writeup: ""
    },
    {
      name: "Dr. Albert Rizzo",
      image: "/Albert_Rizzo.jpg",
      description: "Research Professor of Psychiatry & Behavioural Sciences @ USC",
      writeup: ""
    },
    {
      name: "JoJo Platt",
      image: "/JoJo_Platt.jpg",
      description: "US Partnerships Lead @ Corundrum Neuroscience",
      writeup: "With 15+ years of experience in the neurotechnology space, JoJo Platt is a recognized leader in bridging the gap between medtech, commercialization and investment. She is the US Partnerships Lead for Corundum Neuroscience, where she works with venture capitalist companies to identify promising early-stage startups, focusing on the areas of sleep, stress and anxiety, and novel sensing technologies. She also serves on the organizing committees of the industry's most significant conferences, including IEEE's Neural Engineering Conference and EMBC, BioElectronic Medicine Forum, Neurotech Leaders Forum, and is a founding chair of the Cleveland NeuroDesign Entrepreneurs Workshop."
    },
    {
      name: "Dr. Arash Adami",
      image: "/Arash_Adami.jpg",
      description: "Founder and CEO @ Alpha Fiber",
      writeup: "Arash Adami is a neuroscientist with over 15+ years of experience in both industry and academia. Dr. Adami is the Founder and CEO of Alpha Fiber, a healthtech startup providing the only real-time solution for detecting concussions in athletes using computer vision. He is also a faculty lecturer in Neuroscience at San Diego State University. Dr. Adami received his Ph.D in Neuroscience in 2013 from UC Riverside, where he studied the neuroscience of traumatic brain injury and MRI physics. Since then, he worked for 5+ years in regulatory affairs, pharmaceutical consulting and scientific writing, before founding his own company, combining his passions in neuroscience, physics and sports."
    },
    {
      name: "Ruthie Forney",
      image: "/Ruthie.jpeg",
      description: "VP of Products @ Precision Neuroscience",
      writeup: "Ruthie Forney is the Vice President of Product at Precision Neuroscience, where she leads product strategy and development to advance brain–computer interface (BCI) technology aimed at restoring connection and autonomy to people living with neurological conditions.\n\nWith over 15 years of experience in healthcare and health technology, Ruthie has built and scaled high-impact products at every stage—from early-stage startups to global tech giants. Before joining Precision, she was Senior Director of Product at Viz.ai, where she led the development of AI-powered care pathways in partnership with top pharmaceutical and medtech companies, and drove the life sciences product roadmap for regulatory-cleared algorithms and clinical workflow tools.\n\nPrior to that, at Amazon, Ruthie led the design and delivery of clinical service lines for Amazon Care, scaling virtual care offerings nationwide. She later held a strategic leadership role in Amazon Books, where she helped expand the Strategic Account Services program internationally into the Canadian marketplace.\n\nEarlier, Ruthie was an early team member at EverlyWell (now Everly Health), where she helped shape go-to-market strategy for lab testing products and led enterprise partnerships as the company scaled from pre–Series A to unicorn status.\n\nShe holds a Master's in Healthcare Administration and a Bachelor's in Social Work. Based in Seattle, Ruthie is passionate about building innovative, human-centered products that improve care access and health outcomes."
    },
    {
      name: "Dr. Dugyu Kuzum",
      image: "/kuzum.jpg",
      description: "Professor of Electrical and Computer Engineering @ UCSD",
      writeup: ""
    }
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

      {/* Keynote Speakers Section */}
      <div className="w-full px-4 mt-10">
        <h2 className="text-4xl font-bold text-center mb-8">Keynote Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.slice(0, 2).map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg p-8 w-full transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 cursor-pointer relative group border border-gray-100"
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="relative">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={128}
                  height={128}
                  className="rounded-full w-48 h-48 object-cover mb-4 ring-4 ring-white shadow-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">{speaker.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{speaker.description}</p>
              <div className="flex-grow"></div>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSpeaker(speaker);
                }}
                className="transition-colors duration-300 cursor-pointer font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Speakers Section */}
      <div className="w-full px-4 mt-16">
        <h2 className="text-4xl font-bold text-center mb-8">Panelists</h2>
        {/* First Row - 4 Panelists */}
        <div className="flex justify-center gap-8 mb-8">
          {speakers.slice(2).map((speaker, index) => {
            const isAcademic = ["Dr. Gert Cauwenberghs", "Dr. Albert Rizzo", "Dr. Dugyu Kuzum"].includes(speaker.name);
            const isBottomRow = ["Dr. Arash Adami", "Ruthie Forney", "Dr. Dugyu Kuzum"].includes(speaker.name);
            if (isBottomRow) return null;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg p-8 w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 cursor-pointer relative group border border-gray-100"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                {/* Floating Label */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium shadow-lg ${
                    isAcademic 
                      ? 'bg-white text-purple-800 shadow-purple-200' 
                      : 'bg-white text-blue-800 shadow-blue-200'
                  }`}>
                    {isAcademic ? 'Academic' : 'Industry'}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="rounded-full w-48 h-48 object-cover mb-4 ring-4 ring-white shadow-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">{speaker.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{speaker.description}</p>
                <div className="flex-grow"></div>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSpeaker(speaker);
                  }}
                  className="transition-colors duration-300 cursor-pointer font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn More
                </div>
              </div>
            );
          })}
        </div>
        {/* Bottom Row - 3 Panelists */}
        <div className="flex justify-center gap-8 mb-16">
          {speakers.slice(2).map((speaker, index) => {
            const isAcademic = ["Dr. Gert Cauwenberghs", "Dr. Albert Rizzo", "Dr. Dugyu Kuzum"].includes(speaker.name);
            const isBottomRow = ["Dr. Arash Adami", "Ruthie Forney", "Dr. Dugyu Kuzum"].includes(speaker.name);
            if (!isBottomRow) return null;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg p-8 w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 cursor-pointer relative group border border-gray-100"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                {/* Floating Label */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium shadow-lg ${
                    isAcademic 
                      ? 'bg-white text-purple-800 shadow-purple-200' 
                      : 'bg-white text-blue-800 shadow-blue-200'
                  }`}>
                    {isAcademic ? 'Academic' : 'Industry'}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="rounded-full w-48 h-48 object-cover mb-4 ring-4 ring-white shadow-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">{speaker.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{speaker.description}</p>
                <div className="flex-grow"></div>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSpeaker(speaker);
                  }}
                  className="transition-colors duration-300 cursor-pointer font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn More
                </div>
              </div>
            );
          })}
        </div>
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

