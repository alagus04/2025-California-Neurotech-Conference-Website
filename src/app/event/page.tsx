'use client';
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function ConferenceSchedule() {
  return (
    <div className="min-h-screen flex flex-col bg-[#c6e1f5]">
      <main>
        {/* Banner Image and Header */}
        <div className='relative w-full h-[70vh] sm:h-[60vh] md:h-1/2'>
          <Image
            src="/About.jpg"
            alt="image"
            width={2000}
            height={500}
            className="object-cover sm:h-[60vh] md:h-1/2 md:-mt-32 h-[70vh] w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl sm:text-5xl md:text-7xl leading-loose top-1/4 left-1/2 transform -translate-x-1/2">
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl mb-14">Schedule</h1>
            <Link href="/speakers">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-blue-800 transition duration-300">
                View All Speakers
              </button>
            </Link>
          </div>
        </div>

        {/* Map + Address Section */}
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center w-3/4 gap-8 mb-6">
            {/* Map */}
            <div className="w-full md:w-1/2 h-64">
              <iframe
                title="UCSD Map"
                className="w-full h-full rounded-xl shadow-md border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.3552580349563!2d-117.24145268481795!3d32.88455158093914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9549a0f7156d7%3A0x90275d6c6c2b1e4a!2s9615%20Scholars%20Dr%20N%2C%20San%20Diego%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1649903828003!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>

            {/* Address */}
            <div className="w-full md:w-1/2">
            <div className="bg-[#e6f0f7] h-full shadow-xl rounded-xl p-4 flex items-center justify-center transform transition-all duration-300 hover:-translate-y-1">
              <div className="bg-white border rounded-xl h-full w-full p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold">University of California, San Diego</h2>
                <p className="text-lg mt-2">The Jeannie Hall</p>
                <p className="text-lg">9615 Scholars Drive North</p>
                <p className="text-lg">San Diego, CA 92093</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="w-3/4 border-t-2 border-gray-400 mb-6" />
        </div>

        {/* Schedule List */}
        <div className="flex flex-col justify-center items-center">
          {[
            { start_time: '8:00am', event: 'Check-In, Poster Set-up, Breakfast', times: "8:00am - 8:30am", location: "JEANNIE Lobby, Lab, Patio" },
            { start_time: '8:30am', event: 'Opening + Keynote Speech', times: "8:30am - 9:15am", location: "JEANNIE Auditorium" },
            { start_time: '9:15am', event: 'EMBS Speech', times: "9:15am - 9:45am", location: "JEANNIE Auditorium" },
            { start_time: '9:45am', event: 'Industry Panel', times: "9:45am - 10:35am", location: "JEANNIE Auditorium" },
            { start_time: '9:45am', event: 'Academic Workshop', times: "9:45am - 10:35am", location: "Lab" },
            { start_time: '10:45am', event: 'Poster Session & Networking', times: "10:45am - 12:00pm", location: "JEANNIE Lobby" },
            { start_time: '10:45am', event: 'AULI.TECH Demo', times: "10:45am - 12:00pm", location: "JEANNIE Lobby" },
            { start_time: '12:00pm', event: 'Poster Session & Lunch', times: "12:00pm - 12:40pm", location: "JEANNIE Lobby, Lab, Patio" },
            { start_time: '12:40pm', event: 'Keynote Speech', times: "12:40pm - 1:20pm", location: "JEANNIE Auditorium" },
            { start_time: '1:45pm', event: 'Brain-Computer-Interface Competition', times: "1:45pm - 4:00pm", location: "JEANNIE Auditorium" },
            { start_time: '4:05pm', event: 'Academic Panel', times: "4:05pm - 5:00pm", location: "JEANNIE Auditorium" },
            { start_time: '5:00pm', event: 'Closing Ceremony & Awards', times: "5:00pm - 5:30pm", location: "JEANNIE Auditorium" },
          ].map(({ start_time, event, times, location }, index) => (
            <div
              key={index}
              className="bg-[#e6f0f7] w-3/4 h-40 mt-4 grid grid-cols-[1fr_3fr] gap-10 items-center shadow-xl rounded-xl transform hover:translate-y-[-5px] transition-all duration-300"
            >
              {/* Time and clock */}
              <p className="text-left ml-10 mb-20 text-2xl font-semibold flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-3 text-2xl" />
                {times}
              </p>

              {/* Event and location */}
              <div className="bg-white mr-20 border rounded-xl h-32 flex flex-col justify-center pl-10">
                <p className="font-bold text-xl">{event}</p>
                <p className="text-gray-600 text-md mt-1 italic">📍 {location}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
