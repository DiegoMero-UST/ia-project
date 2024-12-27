'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

const listItems = [
  <li key={1} className="flex flex-col gap-3">
    <Image
      src='/casestudy1.png'
      width={400}
      height={200}
      alt="Case 1"
    />
    <h4 className="text-2xl">Company 1</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
  <li key={2} className="flex flex-col gap-3">
  <Image
    src='/casestudy1.png'
    width={400}
    height={200}
    alt="Case 1"
  />
  <h4 className="text-2xl">Company 1</h4>
  <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
  <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
</li>,
<li key={3} className="flex flex-col gap-3">
    <Image
      src='/casestudy1.png'
      width={400}
      height={200}
      alt="Case 1"
    />
    <h4 className="text-2xl">Company 1</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      onSlideChange={handleSlideChange}
    >
      {listItems.map((item, index) => (
        <SwiperSlide key={index} className='p-5'>
          <div className="p-4 bg-white rounded-lg shadow">
            {item}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}