import React from 'react'

export default function Card() {
    return (
        <div className="card bg-white rounded-lg p-5 flex flex-col min-w-lg max-w-md shadow-xl m-2 sm:max-w-full lg:max-w-md cursor-pointer">
            <p className="text-xs font-light my-2 "><span>Data Structure and Algorithm</span> <span className="font-light opacity-50 italic">- July 12, 2021</span></p>
            <p className='text-sm font-extrabold mt-2 mb-1'>Breath Fisrt Serach - Binary Search Tree</p>
            <p className='text-xs my-1 opacity-70'>Today, In this post we are going to learn about breath first search in Binary Srach Tree with an example...</p>
            <div className='my-2'>
                <p className="font-light my-2 leading-4">
                    <span className="text-xs font-bold">Deepak Bisht</span><br />
                    <span className="text-xs font-light opacity-70">Software Developer</span>
                </p>
            </div>
        </div>
    )
}
