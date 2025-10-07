import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className=' text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className=' w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-sm text=gray-600'>
          <p>Doctors play a vital role in our lives, offering care, guidance, and expertise to help us maintain our health and well-being. They undergo years of rigorous training to diagnose illnesses, prescribe treatments, and support patients through some of their most challenging times. With compassion and commitment, doctors serve as the foundation of a healthy society, working tirelessly to ensure the best outcomes for their patients.</p>
          <p>Every doctor brings a unique set of skills and experience, often specializing in specific fields like cardiology, pediatrics, dermatology, or surgery. Beyond medical knowledge, doctors build lasting relationships with their patients, earning trust through active listening, clear communication, and personalized care. Their ability to make informed decisions and provide critical support makes them irreplaceable in the healthcare system.!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Modern doctors are embracing technology to improve patient care and accessibility. From virtual consultations to electronic health records, they are constantly evolving with advancements in the medical field. As healthcare continues to change, doctors remain committed to lifelong learning and innovation—ensuring that quality care reaches people wherever and whenever they need it.</p>
        </div>
      </div>
      <div className=' text-xl my-4'>
        <p>WHY <span className=' text-shadow-gray-700 font-semibold'>CHOOSE US</span>  </p>
      </div>

      <div className=' flex flex-col md:flex-row mb-20'>
        {/* Apply the bg-color to hover it */}
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streanmliened Appointment Scheduling That First Into Your Buy Lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Access To A Network Of Trusted Healthcare Professional In Your Area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Tailared Recommendations And Reminder To Help Your On Top Of Your Health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
