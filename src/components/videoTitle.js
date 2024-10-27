import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className='pt-56 px-12 absolute bg-gradient-to-r from-black  w-screen aspect-video '>
        <h1 className='text-6xl text-white font-bold'>{props.title}</h1>
        <p className='py-6 px-2 text-lg  text-white w-[30%]'>{props.overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 mx-2 px-12 text-xl hover:bg-opacity-80 rounded-lg'>▶️Play</button>
            <button className='bg-gray-500 text-white p-4 mx-2 px-8 text-xl hover:bg-opacity-50 rounded-lg'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle