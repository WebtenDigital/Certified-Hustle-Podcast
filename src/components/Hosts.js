import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Hosts() {
    return (
            <div className="px-10 py-6 w-11/12 mx-auto bg-gray-200 rounded-lg">
                    <div id="Joanne" className="border-b border-gray-500">
                        <div className="flex items-center space-x-6">
                            <div><StaticImage src="../images/joanph.jpg" alt="Joan Placeholder" className="h-20 w-20 rounded-full"/></div>
                            <div>
                                <h3 className="pb-2 text-xl text-podgreen font-bold font-sourcecode uppercase">Joanne</h3>
                                <p className="font-ptsans text-podgreen leading-tight">Founder, Certified Hustler</p>
                            </div>
                        </div>
                        <p className="py-4 font-ptsans text-gray-700 leading-snug">Joanne is a hustlepreneur in Uganda. A true artist at heart, she has a number of past and existing hustle businesses under her belt. While she has some answers, she is also still looking like the rest of us.</p>
                    </div>
                    <div id="Jojoe" className="pt-4">
                        <div className="flex items-center space-x-6">
                            <div><StaticImage src="../images/jojoeph.jpg" alt="Jojoe Placeholder" className="h-20 w-20 rounded-full"/></div>
                            <div>
                                <h3 className="pb-2 text-xl text-podgreen font-bold font-sourcecode uppercase">Jojoe</h3>
                                <p className="font-ptsans text-podgreen leading-tight">Founder, Certified Hustler</p>
                            </div>
                        </div>
                        <p className="pt-4 font-ptsans text-gray-700 leading-snug">Jojoe is a hustlepreneur also located in Uganda. Never having written a CV in his life, he started looking for answers right out of school. 4 years later, he believes he has found some insights, but still has a lot of questions to be answered too.</p>
                    </div>
                </div> 
            )
}
