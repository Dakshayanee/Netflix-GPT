import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-4 text-lg w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4  px-12  text-xs  rounded-lg hover:bg-opacity-20'> ▶️Play</button>
            <button className='mx-2 bg-gray-500 text-white p-4  px-12  text-xs bg-opacity-50 rounded-lg'> ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle