import Image from 'next/image';
import React from 'react'
import about1 from "@/public/images/about1.png"

const OrganicFood1 = () => {
  return (
    <>
      <section className='my-20'>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-fit gap-15">
            <div className="xl:mt-24">
              <h2 className="text-3xl sm:text-4xl md:grid-cols-5 xl:text-[56px] font-semibold text-black_main leading-[120%] max-w-135 mb-8">
                100% Trusted Organic Food Store
              </h2>
              <p className="text-base sm:text-lg text-secondary_color leading-[150%] max-w-150">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div>
              <Image src={about1} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrganicFood1