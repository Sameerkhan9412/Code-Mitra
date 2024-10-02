import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Core/Dashboard/Sidebar'
import Spinner from '../components/common/Spinner'

const Dashboard = () => {
    const {loading:authLoading}=useSelector((state)=>state.auth)
    const {loading:profileLoading}=useSelector((state)=>state.profile)
    if(authLoading||profileLoading){
        return <Spinner/>
    }
  return (
    <div className='relative flex min-h-[100vh]  pt-4 overflow-y-hidden'>
        <div className='h-[100vh] flex-1 overflow-auto border-2'>
            <Sidebar/>
            <div className=' mx-auto w-11/12 max-w-[1000px] py-10'>
            <Outlet/>
            </div>

        </div>
    </div>
  )
}

export default Dashboard