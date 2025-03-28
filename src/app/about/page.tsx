'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Organizers = [
  {
    name: "Pranav Sakhuja",
    image: "/Pranav Sakhuja.jpeg",
    linkedin: "https://www.linkedin.com/in/pranavsakhuja/"
  },
  {
    name: "Kelly Peng",
    image: "/Kelly Peng.jpg",
    linkedin: "https://www.linkedin.com/in/kelly-x-peng/"
  },
  {
    name: "Jeevan Karandikar",
    image: "/Jeevan Karandikar.jpg",
    linkedin:"https://www.linkedin.com/in/jeevankarandikar/"
  },
  {
    name: "Sadhana Jeyakumar",
    image: "/Sadhana_Jeyakumar.jpg",
    linkedin: "https://www.linkedin.com/in/sadhana-jeyakumar/",
  },
  {
    name: "Siya Jatia",
    image: "/Siya Jatia.jpg",
    linkedin: "https://www.linkedin.com/in/siya-jatia-7952381b5/"
  },
  {
    name: "Hazel Huang",
    image: "/Hazel Huang.jpg",
    linkedin: "https://www.linkedin.com/in/hazel-huang-5453b6326/"
  },
  {
    name: "Anisha Narurkar",
    image: "/Anisha Narurkar.jpeg",
    linkedin: "https://www.linkedin.com/in/anisha-narurkar-81b178261/"
  },
  {
    name: "Sanvi Verma",
    image: "/Sanvi Verma.jpg",
    linkedin: "https://www.linkedin.com/in/sanvi-verma/"
  },
  {
    name: "Alagappan Sellappan",
    image: "/Alagappan Sellappan.png",
    linkedin: "https://www.linkedin.com/in/alsellappan/"
  }
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative flex flex-center">
        {/* Our Mission Section */}
        <Image
          src="/About.jpg"
          width={2000}
          height={1000}
          alt="Logo"
          className="object-cover sm:h-[60vh] md:h-2/3 h-[70vh] w-full" // Set dynamic height based on viewport size
    />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mt-40 md:mt-32 text-4xl md:text-7xl font-bold leading-loose text-center px-4">About Us</h1>
          <p className="mt-4 md:mt-20 text-xl md:text-4xl text-center w-[80%] md:w-[60%] px-4">
            Established in 2023, CNTC is California&apos;s Only Student-Run Annual Neurotechnology Conference.
          </p>
        </div>
      </div>

      {/* Organizers Section */}
      <div className="bg-[#f4f4f4] py-16">
        <h1 className="text-left ml-8 md:ml-56 text-4xl md:text-6xl font-bold mb-10">Our Team</h1>
        {/* Flex container */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 px-8">
          {Organizers.map((organizer, index) => (
            <Link
              key={index}
              href={organizer.linkedin}
              target="_blank"
              className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="w-36 h-36 relative mb-4">
                <Image
                  src={organizer.image}
                  alt={organizer.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">{organizer.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
