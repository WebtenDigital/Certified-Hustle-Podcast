import React from 'react'
import Nav from '../components/Nav'
import Hosts from '../components/Hosts'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import { Link } from 'gatsby'

export default function StartHere() {
    return (
        <main className="">
            {/* The Header */}
            <div className="pb-4 bg-podgreen-light">
                <div className="py-4 px-4"><Nav/></div>
                <p className="px-8 font-ptsans font-bold text-3xl text-white">This is The Certified Hustle Podcast</p>
                <p className="px-8 py-6 font-semibold font-ptsans text-white">The no-bullshit version of hustle business that you never had</p>
            </div>
            {/* The body */}
            <div id="the body" className="px-8">
                <div className="pt-12 pb-6">
                    <p className="text-2xl text-podgreen font-ptsans font-bold">We understand the making it in this country is hard</p>
                    <p className="pt-4 font-ptsans text-podgreen-dark leading-snug">There are a lot of TV programs, radio shows and even internet podcasts that discuss how to make your business work in Uganda. We have heard a lot of them, if not all, in a never-ending search for answers.
                        However, we were frustrated at how haphazard the information is out there, and so we decided to create our own no-bullshit version. We try to be as candid, accurate and most importantly as practical as possible with the information we share.
                    </p>
                </div>
                <div className="py-6">
                    <p className="text-2xl text-podgreen font-ptsans font-bold">Our mission is to make the journey easier for someone else</p>
                    <p className="pt-4 font-ptsans text-podgreen-dark leading-snug">We bring guests to the show because we realize that we don’t know everything ourselves--if we even know that much at all. We are also still on our journey of trying to make it in Uganda without necessarily getting a job.
                        Someone else out there has gone through what you are going through right now with your hustle business. So we make sure to get some answers from their experiences, which might be helpful for your situation too.
                    </p>
                </div>
                <div className="py-6">
                    <p className="text-2xl text-podgreen font-ptsans font-bold">Who is this podcast meant for?</p>
                    <p className="pt-4 font-ptsans text-podgreen-dark leading-snug">The Certified Hustle podcast is for anyone that wants more than an unsecure monthly salary, and believes there is a way out there to make it work.
                        It is for the entrepreneur at heart who desires practical and repeatable advice that can be applied in our context ,and is willing to put in the work to make it happen.
                        It is for anyone that has a desire to learn and also to share with others going through the same journey. 
                        We hope you gain and learn from this, half as much as we enjoy bringing it for you.
                    </p>
                </div>
                <div className="py-6">
                    <p className="text-2xl text-podgreen font-ptsans font-bold">So, without further ado...</p>
                    <div className="pt-6"><Link to="/archives"><span className="px-4 py-2 uppercase text-white bg-podgreen font-sourcecode rounded-lg">view all episodes</span></Link></div>
                </div>
            </div>
            {/* Meet Your Hosts */}
            <div className="px-4">
                <h2 className="py-10 font-ptsans font-bold text-2xl text-podgreen text-center">Meet Your Hosts</h2>
                <Hosts/>
            </div>
            {/* Subscribe */}
            <div className="pt-20">
                <Subscribe/>
            </div>
            {/* Footer */}
            <div className="pt-10 bg-gray-300"><Footer/></div>

        </main>
    )
}
