import React from 'react'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'
import Nav from '../components/Nav'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

export default function Archives({data}) {
    const [show2021Episodes, setShow2021Episodes] = React.useState(false);
    const [show2022Episodes, setshow2022Episodes] = React.useState(true);

    const handle2021Click=function(){
        setShow2021Episodes((prevstate)=>{
            return (!prevstate);
        })
    }

    const handle2022Click=function(){
        setshow2022Episodes((prevstate)=>{
            return (!prevstate);
        })
    }

    return (
        <main>
            {/* The Header */}
            <div className="pb-4 bg-podgreen-light">
                <div className="py-4 px-4"><Nav/></div>
                <p className="px-8 font-ptsans font-bold text-3xl text-white">Certified Hustle Podcast Archives</p>
                <p className="px-8 py-6 font-semibold font-ptsans text-white">Every single episode.</p>
            </div>
            
            {/* Archives Accordion */}
            <div id="the accordion" className="py-8">
                {/* 2022 */}
                <div id="2022" className="px-4 w-11/12">
                    <div className="py-4 flex items-center justify-between">
                        <h3 className="text-podgreen-dark text-3xl font-bold font-ptsans">2022</h3>
                        {show2022Episodes && (<button id="up" onClick={handle2022Click}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-podgreen-dark h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </button>)}
                        {!show2022Episodes && (<button id="down" onClick={handle2022Click}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-podgreen-dark h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>)}
                    </div>
                    {/* The episodes */}
                    {show2022Episodes && (
                        <div id="the episodes">
                        {data.allContentfulPodcastEpisode.nodes.filter((item)=>{return(item.dateReleased==='2022')}).map((item)=>{
                            return(<Link to={'/'+item.slug}><p className="py-2 font-bold text-podgreen font-ptsans">{`Episode ${item.number} | ${item.title}`}</p></Link>)
                        }   
                        )}
                    </div>
                    )}
                    {/* The line */}
                    <div id="the line" className="py-2 border-b-2 border-podgreen-dark"></div>
                </div>

                {/* 2021 */}
                <div id="2021" className="px-4 w-11/12">
                    <div className="py-4 flex items-center justify-between">
                        <h3 className="text-podgreen-dark text-3xl font-bold font-ptsans">2021</h3>
                        {show2021Episodes && (<button id="up" onClick={handle2021Click}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-podgreen-dark h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </button>)}
                        {!show2021Episodes && (<button id="down" onClick={handle2021Click}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-podgreen-dark h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>)}
                    </div>
                    {/* The episodes */}
                    {show2021Episodes && (
                        <div id="the episodes">
                        {data.allContentfulPodcastEpisode.nodes.filter((item)=>{return(item.dateReleased==='2021')}).map((item)=>{
                            return(<Link to={'/'+item.slug}><p className="py-2 font-bold text-podgreen font-ptsans">{`Episode ${item.number} | ${item.title}`}</p></Link>)
                        }   
                        )}
                    </div>
                    )}

                    <div id="the line" className="py-2 border-b-2 border-podgreen-dark"></div>
                </div>
            </div>
            {/* Find Podcast On: */}
            <div className="pt-4 pb-12">
                <div className="py-4 w-9/12 mx-auto bg-gray-200 text-center rounded-lg">
                    <h3 className="text-podgreen text-xl font-bold font-ptsans">Find the Podcast On:</h3>
                    <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark  font-sourcecode uppercase">Apple Podcasts</span></Link></div>
                    <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark font-sourcecode uppercase">Stitcher</span></Link></div>
                    <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark font-sourcecode uppercase">SoundCloud</span></Link></div>
                </div>
            </div>
            {/* Subscribe */}
            <div>
                <Subscribe/>
            </div>
            {/* Footer */}
            <div className="pt-10 bg-gray-300"><Footer/></div>
        </main>
    )
}

export const query=graphql`
query {
    allContentfulPodcastEpisode {
      nodes {
        number
        title
        dateReleased(formatString: "YYYY")
        slug
      }
    }
  }  
`