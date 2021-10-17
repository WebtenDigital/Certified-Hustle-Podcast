import React from 'react'
import Connect from '../components/Connect'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function ConnectPage() {
    return (
        <div>
             {/* The Header */}
             <div className="pb-4 bg-podgreen-light">
                <div className="py-4 px-4"><Nav/></div>
                <p className="px-8 font-ptsans font-bold text-3xl text-white text-center">Connect With Us</p>
                <p className="px-8 py-6 font-semibold font-ptsans text-white text-center">Get in touch with the Certified Hustle community</p>
            </div>

            <div className="py-12"><Connect/></div>

            <Footer/>
        </div>
    )
}
