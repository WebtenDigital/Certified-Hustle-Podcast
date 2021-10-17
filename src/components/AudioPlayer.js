import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

export default function AudioPlayer(props) {

    return (
        <div>
            <div id="the player" className="pt-3 bg-podgreen rounded-lg">
                <div className="flex items-center">
                    {/* left side */}
                    <div id="left-the image" className="px-2">
                        <StaticImage src="../images/subdef.png" alt="podcast logo" className="w-24"/>
                    </div>
                    <div id="right-the rest">
                        {/* the rest */}
                        <h3 className="text-xs uppercase text-gray-200 font-semibold">certified hustle podcast</h3>
                        <h2 className="py-1 text-white font-bold leading-tighter">{props.title}</h2>
                    </div> 
                </div>
                 {/* the controls */}
                <div className="py-1"><audio src={props.soundurl} controls className="px-2 py-1 w-full rounded-md"><track kind="captions" srclang="en" label="english_captions"/></audio></div>                                
            </div>
            
        </div>
    )
}
