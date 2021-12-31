import React from 'react'
import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
function Header() {
    return (
        <header className="flex justify-between items-center w-full px-2 py-4 fixed top-0 shadow-lg bg-white z-10">
            <div className="container w-full flex justify-between items-center mx-auto">
                <div className="logo flex">
                    <p className="font-bold">Deepak</p>
                </div>
                <nav className="flex flex-grow justify-between items-center">
                    <ul className="flex justify-between items-center gap-5 ml-auto">
                        <li className="flex justify-between items-center font-bold space-x-1 uppercase"><HomeIcon className="h-4 w-4" /><a href="#">Home</a></li>
                        <li className="flex justify-between items-center font-bold space-x-1 uppercase"><MailIcon className="h-4 w-4" /><a href="#">About Me</a></li>
                        <li className="flex justify-between items-center font-bold space-x-1 uppercase"><PhoneIcon className="h-4 w-4" /><a href="#">Let Talk</a></li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header
