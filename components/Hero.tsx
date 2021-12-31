import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <main className="flex justify-center items-center w-full bg-white-100 h-screen">
            <div className="flex flex-col justify-center items-center ">
                <div className="image-box w-100 h-100 rounded-full">
                    <Image src="/favicon.ico" width="100%" height="100%" alt="profile_pic" />
                </div>
                <h3 className="my-2 font-extrabold text-2xl">Deepak Bisht</h3>
                <p className="max-w-xl my-5 text-center">
                    Hi, I am a software developer based out of Uttarakhand, India.I am passinate about the way things work on internet.Hi, I am a software developer based out of Uttarakhand, India.I am passinate about the way things work on internet.
                </p>
                <ul className="flex justify-between space-x-5 my-2 font-semibold">
                    <li className="px-4 py-2 cursor-pointer hover:brightness-50"><a href="#">Linkedin</a></li>
                    <li className="px-4 py-2 cursor-pointer hover:brightness-50"><a href="#">Instagram</a></li>
                    <li className="px-4 py-2 cursor-pointer hover:brightness-50"><a href="#">Twitter</a></li>
                </ul>
                <button className="mt-5 bg-gray-200 px-4 py-2 rounded-sm shadow-lg cursor-pointer hover:bg-gray-300 font-extrabold">Let's Connect</button>

            </div>
        </main>
    )
}

export default Hero
