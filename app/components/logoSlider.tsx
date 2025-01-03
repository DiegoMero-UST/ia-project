'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const listItems = [
  <li key={1}>
    <Image
      src='/Airtable-Logo.png'
      layout='responsive'
      width={100}
      height={100}
      alt="Airtable"
    />
  </li>,
  <li key={2}>
    <Image
      src='/Asana-Logo.png'
      layout='responsive'
      width={100}
      height={100}
      alt="Asana"
    />
  </li>,
  <li key={3}>
    <Image
      src='/Dynamics-Logo.png'
      layout='responsive'
      width={100}
      height={100}
      alt="Dynamics"
    />
  </li>,
  <li key={4}>
    <Image
      src='/HubSpot-Logo.png'
      layout='responsive'
      width={100}
      height={100}
      alt="HubSpot"
    />
  </li>,
  <li key={5}>
    <Image
      src='/Jira-logo.png'
      layout='responsive'
      width={100}
      height={100}
      alt="Jira"
    />
  </li>,
  <li key={6}>
    <Image
      src='/NetSuite-Logo.png'
      layout='responsive'
      width={100}
      height={100}
      alt="NetSuite"
    />
  </li>,
  <li key={7}>
    <Image
      src='/Trello-Logo-.png'
      layout='responsive'
      width={100}
      height={100}
      alt="Trello"
    />
  </li>,
];


export default function ImageSlider() {
  return (
    <div className='container mx-auto my-10 p-4 max-w-4xl'>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={5}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {listItems.map((item, index) => (
          <SwiperSlide key={index}>
            <ul className="p-4 w-[130px] h-auto grayscale hover:grayscale-0">
              {item}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}