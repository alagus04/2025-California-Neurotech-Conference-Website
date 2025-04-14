'use client';
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function ConferenceSchedule() {
  const [useLocalTime, setUseLocalTime] = useState(false);
  const [timezone, setTimezone] = useState('PST');

  useEffect(() => {
    // Get user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone);
  }, []);

  const convertTime = (timeStr: string) => {
    if (!useLocalTime) return timeStr;

    const [start, end] = timeStr.split(' - ');
    const [startTime, startPeriod] = start.split(/(?=[ap]m)/);
    const [endTime, endPeriod] = end.split(/(?=[ap]m)/);

    const conferenceDate = new Date();
    conferenceDate.setMonth(3); // April
    conferenceDate.setDate(26); // 26th
    conferenceDate.setFullYear(2025);

    const startDateTime = new Date(conferenceDate);
    const [startHour, startMinute] = startTime.split(':').map(Number);
    startDateTime.setHours(startPeriod === 'pm' ? startHour + 12 : startHour, startMinute);

    const endDateTime = new Date(conferenceDate);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    endDateTime.setHours(endPeriod === 'pm' ? endHour + 12 : endHour, endMinute);

    const formatTime = (date: Date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const period = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${minutes.toString().padStart(2, '0')}${period}`;
    };

    return `${formatTime(startDateTime)} - ${formatTime(endDateTime)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#c6e1f5]">
      <main>
        {/* Banner Image and Header */}
        <div className='relative w-full h-[50vh] sm:h-[60vh] md:h-1/2'>
          <Image
            src="/About.jpg"
            alt="image"
            width={2000}
            height={500}
            className="object-cover h-[50vh] sm:h-[60vh] md:h-1/2 md:-mt-32 w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl sm:text-5xl md:text-7xl leading-loose top-1/4 left-1/2 transform -translate-x-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 sm:mb-14">Schedule</h1>
            <Link href="/speakers">
              <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-md hover:bg-blue-800 transition duration-300">
                View All Speakers
              </button>
            </Link>
          </div>
        </div>

        {/* Map + Address Section */}
        <div className="flex flex-col items-center mt-6 sm:mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-3/4 gap-4 sm:gap-8 mb-4 sm:mb-6">
            {/* Map */}
            <div className="w-full md:w-1/2 h-48 sm:h-64">
              <iframe
                title="UCSD Map"
                className="w-full h-full rounded-xl shadow-md border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.3552580349563!2d-117.24145268481795!3d32.88455158093914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9549a0f7156d7%3A0x90275d6c6c2b1e4a!2s9615%20Scholars%20Dr%20N%2C%20San%20Diego%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1649903828003!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>

            {/* Address */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#e6f0f7] h-full shadow-xl rounded-xl p-3 sm:p-4 flex items-center justify-center transform transition-all duration-300 hover:-translate-y-1">
                <div className="bg-white border rounded-xl h-full w-full p-4 sm:p-6 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl font-bold">University of California, San Diego</h2>
                  <p className="text-base sm:text-lg mt-2">The Jeannie Hall</p>
                  <p className="text-base sm:text-lg">9615 Scholars Drive North</p>
                  <p className="text-base sm:text-lg">San Diego, CA 92093</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="w-full md:w-3/4 border-t-2 border-gray-400 mb-4 sm:mb-6" />
        </div>

        {/* Schedule List */}
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 mb-12">
          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 w-full md:w-4/5 shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200">
            <div className="flex justify-start mb-6">
              <button
                onClick={() => setUseLocalTime(!useLocalTime)}
                className="px-4 py-2 bg-white text-[#062a74] rounded-lg shadow-md hover:bg-gray-50 transition duration-300 flex items-center gap-2 border border-gray-200"
              >
                <FontAwesomeIcon icon={faClock} className="text-[#062a74]" />
                <span>{useLocalTime ? `View in PST (Conference Time)` : `View in ${timezone} (Your Time)`}</span>
              </button>
            </div>
            {[
              { 
                times: "8:00am - 8:30am",
                events: [
                  { event: 'Check-In, Poster Set-up, Breakfast', location: "Jeannie Lobby, Lab, Patio" }
                ]
              },
              { 
                times: "8:30am - 9:15am",
                events: [
                  { event: 'Opening + Keynote Speech by Spero Koulouras', location: "Jeannie Auditorium" }
                ]
              },
              { 
                times: "9:15am - 9:45am",
                events: [
                  { event: 'Speech by Dr. Erika Ross Ellison', location: "Jeannie Auditorium" }
                ]
              },
              { 
                times: "9:45am - 10:35am",
                events: [
                  { event: 'Industry Panel', location: "Jeannie Auditorium" },
                  { event: 'Academic Workshop', location: "Lab" }
                ]
              },
              { 
                times: "10:45am - 12:00pm",
                events: [
                  { event: 'Poster Session & Networking', location: "Jeannie Lobby" },
                  { event: 'AULI.TECH Demo', location: "Jeannie Lobby" }
                ]
              },
              { 
                times: "12:00pm - 12:40pm",
                events: [
                  { event: 'Poster Session & Lunch', location: "Jeannie Lobby, Lab, Patio" }
                ]
              },
              { 
                times: "12:40pm - 1:20pm",
                events: [
                  { event: 'Keynote Speech by Dr. Philip "Flip" Sabes', location: "Jeannie Auditorium" }
                ]
              },
              { 
                times: "1:45pm - 4:00pm",
                events: [
                  { event: 'Brain-Computer-Interface Competition', location: "Jeannie Auditorium" }
                ]
              },
              { 
                times: "4:05pm - 5:00pm",
                events: [
                  { event: 'Academic Panel', location: "Jeannie Auditorium" },
                  { event: 'Industry Workshop by JoJo Platt and Dr. Erika Ross Ellison', location: "Lab" }
                ]
              },
              { 
                times: "5:00pm - 5:30pm",
                events: [
                  { event: 'Closing Ceremony & Awards', location: "Jeannie Auditorium" }
                ]
              }
            ].map(({ times, events }, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-[0.8fr_2fr] gap-6 py-6 hover:bg-blue-50/50 rounded-xl transition-colors duration-200">
                  <div className="flex items-start justify-end pr-4">
                    <FontAwesomeIcon icon={faClock} className="text-[#062a74] mr-2 mt-1 text-xl" />
                    <span className="font-semibold text-[#062a74] text-xl">{convertTime(times)}</span>
                  </div>
                  <div className="pl-4">
                    {events.map(({ event, location }, eventIndex) => (
                      <div key={eventIndex} className={eventIndex > 0 ? "mt-8" : ""}>
                        <div className="font-bold text-2xl text-gray-800 hover:text-[#062a74] transition-colors duration-200">{event}</div>
                        <div className="text-gray-600 text-base italic mt-2 flex items-center gap-2">
                          <span>📍</span>
                          <span>{location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {index < 9 && <hr className="border-gray-200 my-2" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
