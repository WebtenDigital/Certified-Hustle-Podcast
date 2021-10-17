import React from 'react'
import { Link } from 'gatsby'

export default function ListenOn() {
    return (
        <div className="py-4 w-9/12 mx-auto bg-gray-200 text-center rounded-lg">
            <h3 className="text-podgreen text-xl font-bold font-ptsans">Listen to the Podcast From:</h3>
            <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark  font-sourcecode uppercase">Apple Podcasts</span></Link></div>
            <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark font-sourcecode uppercase">Stitcher</span></Link></div>
            <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark font-sourcecode uppercase">SoundCloud</span></Link></div>
        </div>
    )
}
