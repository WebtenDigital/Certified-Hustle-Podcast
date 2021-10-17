import React from 'react'
import {graphql} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hosts from '../components/Hosts'
import ListenOn from '../components/ListenOn'


export default function HomePage({data}) {
    return (
        <main className="mx-auto">
            <div id="header" className="px-4 pb-8 bg-podgreen-light">
                <div className="py-4 "><Nav/></div>
                <p className="font-ptsans font-bold text-3xl text-white text-center">Uncut conversations that will make your business journey easier.</p>
                <p className="py-6 font-semibold font-ptsans text-white text-center">We dive into the challenges that hustlepreneurs like yourself face daily and share their experiences on how they overcame.</p>
                <div id="The CTAs" className="w-1/2 mx-auto flex items-center justify-center space-x-4">
                    <button className="px-3 py-1 rounded-lg block bg-podgreen-dark"><a href="#sub" className="uppercase text-white font-sourcecode">subscribe</a></button>
                    <button className="px-5 py-1 block border-2 border-podgreen-dark rounded-lg font-bold"><a href="#the-episodes" className="uppercase text-podgreen-dark font-sourcecode">listen</a></button>
                </div>
            </div>
            {/* The Body Section */}
            <div className="px-4">
            {/* The Episodes */}
                <h2 className="pt-8 pb-2 text-podgreen text-3xl text-center font-ptsans font-bold">Episodes</h2>
                <div id="the-episodes">
                    {
                        data.allContentfulPodcastEpisode.nodes.map((item)=>{
                            return(
                                <div className="my-6 px-4 py-2 w-11/12 mx-auto bg-podgreen-light rounded-lg">
                                    <h3 className="text-gray-200 font-sourcecode text-sm uppercase">Episode {item.number}</h3>
                                    <h3 className="py-2 text-white font-bold font-ptsans text-lg leading-tight">{item.title}</h3>
                                    <div className="text-white font-ptsans leading-tight">{item.description}</div>
                                    <div className="py-2 flex items-center justify-between">
                                        <div className="px-4 py-1 text-gray-200 text-sm bg-podgreen-dark rounded-md font-sourcecode">{item.dateReleased}</div>
                                        <Link to={"/"+item.slug} className="px-6 py-1 text-sm block uppercase border-2 border-podgreen-dark font-sourcecode text-podgreen-dark rounded-md">listen now</Link>
                                    </div>                                    
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pt-4 pb-10 text-center"><Link to="/archives"><span className="px-4 py-2 uppercase text-white bg-podgreen font-sourcecode rounded-lg">view all episodes</span></Link></div>
                {/* The Hosts */}
                <h2 className="py-10 font-ptsans font-bold text-2xl text-podgreen text-center">Meet Your Hosts</h2>
                <Hosts/>
                {/* Listen On */}
                <div className="my-10"><ListenOn/></div>

                
                {/* Subscribe */}
                <div id="sub" className="px-4">
                    <h2 className="py-10 text-podgreen text-2xl text-center font-ptsans font-bold">Subscribe for Updates on New Episodes</h2>
                    <div className=""><StaticImage src="../images/sub.png" alt="subscribe man on rocket"/></div>
                    <p className="py-4 font-ptsans text-gray-700 leading-snug">Receive updates about new episodes right in your WhatsApp inbox. Follow the link below to join the updates-only Certified Hustle podcast group.</p>
                    <div className="my-2 w-10/12 mx-auto py-1 text-center bg-podgreen rounded-lg"><a href="https://chat.whatsapp.com/HqnHdIr4dTSHHaVdr9AnLJ" target="_blank" rel="noreferrer"><span className="px-8 py-2 uppercase text-white font-sourcecode ">Join</span></a></div>
                </div>
                
            </div>
            {/* Footer */}
            <div className="pt-10"><Footer/></div>

        </main>
    )
}

export const query = graphql`
query {
    allContentfulPodcastEpisode {
      nodes {
        number
        title
        slug
        description
        dateReleased(formatString: "MMM YYYY")
      }
    }
  }  
`