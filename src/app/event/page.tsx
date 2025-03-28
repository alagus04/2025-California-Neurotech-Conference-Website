'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function ConferenceSchedule() {
  return (
    <div className="min-h-screen flex flex-col bg-[#c6e1f5]">
      {/* Add padding-top to avoid nav overlap */}
      <main className="pt-32 pb-24 px-6">
        <h1 className="font-sans text-5xl font-bold text-white mt-20 ml-64">Schedule</h1>
        
        {/* Centered White Box */}
        <div className="flex flex-col justify-center items-center mt-10">
            {/* Each time and event in a row */}
            {[
              { start_time: '8:00am', event: 'Check-In, Poster Set-up, Breakfast', times: "8:00am - 8:30am"},
              { start_time: '8:30am', event: 'Keynote Speech', times: "8:30am - 9:15am"},
              { start_time: '9:15am', event: 'Speech by Dr. Erika Ross Ellison', times: "9:15am - 9:45am" },
              { start_time: '9:45am', event: 'Industry Panel', times: "9:45am - 10:35am" },
              { start_time: '10:45am', event: 'Poster Session | Product Demonstrations', times: "10:45am - 12:00pm" },
              { start_time: '12:00pm', event: 'Poster Session | Lunch', times: "12:00pm - 12:40pm" },
              { start_time: '12:40pm', event: 'Keynote Speech', times: "12:40pm - 1:20pm"},
              { start_time: '1:45pm', event: 'Brain-Computer-Interface Competition', times: "1:45pm - 4:00pm" },
              { start_time: '4:05pm', event: 'Academic Panel', times: "4:05pm - 5:00pm"},
              { start_time: '5:00pm', event: 'Closing Ceremony + Awards', times: "5:00pm - 5:30pm" },
            ].map(({ start_time, event, times}, index) => (
              <div key={index} className="bg-[#e6f0f7] w-3/4 h-40 mt-4 grid grid-cols-[1fr_3fr] gap-10 items-center shadow-xl rounded-xl transform hover:translate-y-[-5px] transition-all duration-300">
                {/* Time aligned right */}
                <p className="text-left ml-10 mb-20 text-lg">
                  {start_time}
                </p>

                {/* Event aligned left */} 
                <div className='bg-white mr-20 border rounded-xl h-32 flex-grow'>
                  <p className = 'ml-10 mt-4'>
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {times}
                  </p>
                  <p className = 'ml-10 mt-8'>{event}</p>
                </div>
              </div>

            ))}
          </div>
      </main>
    </div>
  );
}
