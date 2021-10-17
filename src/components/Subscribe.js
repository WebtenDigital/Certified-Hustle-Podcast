import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Subscribe() {
    return (
            <div id="sub" className="px-4 bg-gray-300">
                <h2 className="py-10 text-podgreen-dark text-2xl text-center font-ptsans font-bold">Subscribe for Updates on New Episodes</h2>
                <div className=""><StaticImage src="../images/sub.png" alt="subscribe man on rocket"/></div>
                <p className="py-4 font-ptsans text-gray-700 leading-snug">Receive updates about new episodes right in your WhatsApp inbox. Follow the link below to join the updates-only Certified Hustle podcast group.</p>
                <div className="w-10/12 mx-auto py-1 text-center bg-podgreen rounded-lg"><a href="https://chat.whatsapp.com/HqnHdIr4dTSHHaVdr9AnLJ" target="_blank" rel="noreferrer"><span className="px-8 py-2 uppercase text-white font-sourcecode ">Join</span></a></div>
            </div>
    )
}
