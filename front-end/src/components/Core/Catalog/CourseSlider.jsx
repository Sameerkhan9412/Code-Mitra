import React, { useEffect, useState } from "react"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,FreeMode,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CourseSlider.css'


// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import CourseCard from "./CourseCard"


function Course_Slider({ Courses }) {
  return (
    <>
    {Courses.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          freeMode={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course}  />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl">No Course Found</p>
      )}
    </>
  )
}

export default Course_Slider