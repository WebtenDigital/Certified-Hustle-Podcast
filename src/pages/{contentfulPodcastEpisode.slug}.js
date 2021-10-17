import React from 'react'
import {graphql} from 'gatsby'
import Nav from '../components/Nav'
import {Link} from 'gatsby'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import AudioPlayer from '../components/AudioPlayer'

export default function PodcastEpisodePage({data}) {

    return (
        <main>
             {/* The Header */}
             <div className="px-4 pb-4 bg-podgreen-light">
                <div className="py-4"><Nav/></div>
                <p className="px-2 font-ptsans font-bold text-3xl text-white">{`Episode ${data.contentfulPodcastEpisode.number} | ${data.contentfulPodcastEpisode.title}`}</p>
                <div className="px-2 py-6"><Link to="/archives"><span className="px-4 py-2 uppercase text-sm text-white bg-podgreen font-sourcecode rounded-lg">back to all episodes</span></Link></div>
            </div>
            {/* The body */}
            <div className="font-ptsans">
                <div className="px-6 pt-10">
                    <p className="text-podgreen-dark font-ptsans">{data.contentfulPodcastEpisode.description}</p>
                </div>
                {/* The audio player */}
                <section id="the player" className="px-6 py-6">
                    <AudioPlayer soundurl={data.contentfulPodcastEpisode.episodeAudio.file.url} title={data.contentfulPodcastEpisode.title}/>
                </section>
                {/* Listen on */}
                <div className="py-6">
                    <div className="py-4 w-9/12 mx-auto bg-gray-200 text-center rounded-lg">
                    <h3 className="text-podgreen text-xl font-bold font-ptsans">Listen to This Episode On:</h3>
                    <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark  font-sourcecode uppercase">Apple Podcasts</span></Link></div>
                    <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark font-sourcecode uppercase">Stitcher</span></Link></div>
                    <div className="my-3 py-1 w-8/12 mx-auto border-2 border-podgreen rounded-md"><Link to="#"><span className="px-6 py-1 font-bold text-sm text-podgreen-dark font-sourcecode uppercase">SoundCloud</span></Link></div>
                </div>
                    
                </div>
                
            </div>
            {/* subscribe */}
            <div className="pt-10"><Subscribe/></div>
            {/* Footer */}
            <div className="pt-10 bg-gray-300"><Footer/></div>
        </main>
    )
}

export const query = graphql`
query ($id: String!) {
    contentfulPodcastEpisode(id: {eq: $id}) {
      number
      title
      description
      episodeAudio {
        file {
          url
        }
      }
    }
  }  
`