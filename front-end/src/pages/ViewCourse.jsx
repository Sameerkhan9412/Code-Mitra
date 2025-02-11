import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/ViewCourseSlice';
import VideoDetailsSidebar from '../components/Core/ViewCourse/VideoDetailsSidebar';
import CourseReviewModel from '../components/Core/ViewCourse/CourseReviewModal';

const ViewCourse = () => {
    const [reviewModal,setReviewModal]=useState(false);
    const {courseId}=useParams();
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    useEffect(()=>{
        const setCourseSpecificDetails=async()=>{

            const courseData=await getFullDetailsOfCourse(courseId,token);
            dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
            dispatch(setEntireCourseData(courseData.courseDetails));
            dispatch(setCompletedLectures(courseData.completedVideos));
            let lectures=0;
            courseData.courseDetails?.courseContent?.forEach((sec)=>{
                lectures+=sec.SubSection.length
            })
            dispatch(setTotalNoOfLectures(lectures));
        }
        setCourseSpecificDetails();
    },[])
  return (
    <>
    <div className='relative flex min-h-[100vh] pt-9'>
        <VideoDetailsSidebar setReviewModal={setReviewModal}/>
        <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto' >
            <div className='mx-6'>
            <Outlet/>
            </div>
        </div>
    </div>
    {reviewModal && <CourseReviewModel setReviewModal={setReviewModal}/>}

    </>
  )
}

export default ViewCourse