'use client';
import Image from 'next/image';

export default function Speakers() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f2f6fe]">
      <div className='opacity-90 w-full relative'>
        <Image
          src="/About.jpg"
          alt="image"
          width={2000}
          height={500}
          className="object-cover sm:h-[60vh] md:h-2/3 h-[70vh] w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-start top-1/4 left-10 md:left-40  mt-40 text-white text-xl sm:text-5xl md:text-7xl font-bold leading-loose">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-20 sm:mb-14">Our Speakers</h1>
        </div>
      </div>

      {/* Grid Layout for Speakers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:mt-2 mt-14 px-4">
        {/* Speaker 1 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/Philip_Sabes.jpg"
            alt="Philip Sabes"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-6 text-xl font-semibold">Dr. Philip Sabes</h2>
          <p className="text-sm text-gray-500">Cofounder of Neuralink, Starfish Neuroscience, Integral, Professor Emeritus @ UCSF</p>
        </div>

        {/* Speaker 2 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/Spero_Koulouras.png"
            alt="Spero Koulouras"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-5 text-xl font-semibold">Spero Koulouras</h2>
          <p className="text-sm text-gray-500">Founder, Autonomous Living Technologies</p>
        </div>

        {/* Speaker 3 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/Gert_Cauwenberghs.png"
            alt="Gert Cauwenberghs"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-5 text-xl font-semibold">Dr. Gert Cauwenberghs</h2>
          <p className="text-sm text-gray-500">Professor of Bioengineering @ UCSD, Co-Director of Institute for Neural Computation</p>
        </div>

        {/* Speaker 4 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/Erika.jpeg"
            alt="Erika Ross Ellison"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-6 text-xl font-semibold">Dr. Erika Ross Ellison</h2>
          <p className="text-sm text-gray-500">President of IEEE EMBS, Vice President, Clinical, Regulatory, and Quality at ONWARD</p>
        </div>
      </div>

      {/* Another Grid Layout for Speakers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14 mb-14 px-4">
        {/* Speaker 5 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/Albert_Rizzo.jpg"
            alt="Albert Rizzo"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-3 text-xl font-semibold">Dr. Albert Rizzo</h2>
          <p className="text-sm text-gray-500">Research Professor of Psychiatry & Behavioural Sciences @ USC, Assistant Director of Institute of Creative Technologies</p>
        </div>

        {/* Speaker 6 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/JoJo_Platt.jpg"
            alt="JoJo Platt"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-3 text-xl font-semibold">JoJo Platt</h2>
          <p className="text-sm text-gray-500">US Partnerships Lead @ Corundrum Neuroscience</p>
        </div>

        {/* Speaker 7 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <Image
            src="/Arash_Adami.jpg"
            alt="Arash Adami"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-3 text-xl font-semibold">Dr. Arash Adami</h2>
          <p className="text-sm text-gray-500">Founder and CEO @ Alpha Fiber, Faculty Lecturer in Neuroscience @ UCSF</p>
        </div>

        {/* Speaker 8 */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 h-[350px] md:h-[400px] transform hover:translate-y-[-5px] transition-all duration-300">
          <img
            src="/Ruthie.jpeg"
            alt="Ruthie Forney"
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
          <h2 className="mt-3 text-xl font-semibold">Ruthie Forney</h2>
          <p className="text-sm text-gray-500">VP of Products @ Precision Neuroscience</p>
        </div>
      </div>
    </main>
  );
}

