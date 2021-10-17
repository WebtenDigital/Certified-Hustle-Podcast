import React from 'react'
import {Link} from 'gatsby'

export default function Footer() {
    return (
        <main className="bg-podgreen-dark">
            <div className="py-6 w-11/12 mx-auto flex items-center justify-between  ">
                <div><Link to="/"><span className="uppercase font-sourcecode text-gray-100 tracking-tight">home</span></Link></div>
                <div><Link to="/starthere"><span className="uppercase font-sourcecode text-gray-100 tracking-tighter">start here</span></Link></div>
                <div><Link to="/archives"><span className="uppercase font-sourcecode text-gray-100 tracking-tight">archives</span></Link></div>
                <div><Link to="/connect"><span className="uppercase font-sourcecode text-gray-100 tracking-tight">connect</span></Link></div>
            </div>
            <p className="text-center pb-2 uppercase font-sourcecode text-xs text-white tracking-tighter"> &copy; certified hustle podcast. all rights reserved. 2021</p>
        </main>
    )
}
