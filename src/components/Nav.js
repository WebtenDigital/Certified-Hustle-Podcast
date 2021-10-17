import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

export default function Nav() {
    const [showmenu, setShowMenu] = React.useState(false);

    const handleClick = function(){
        setShowMenu((prevstate)=>{
            return(!prevstate);
        });
    }

    return (
        <main className=" flex items-center justify-between">
            {/* The mobile nav */}
            <div className="w-14 h-14 rounded-lg">
                <Link to="/"><StaticImage src="../images/podlogo.png" alt="podcast logo" className="rounded-full"/></Link>
                </div>
            <div>
                <button onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>   
                </button>             
            </div>    
            {showmenu && (<div id="The Mobile Menu" className="pt-8 pb-12 px-8 w-full absolute left-2 top-16 right-0 bg-gray-200 rounded-l-md">
                <div className="pb-4 pt-2 border-b border-gray-500"><Link to="/starthere"><span className="uppercase font-sourcecode text-podgreen-dark">Start Here</span></Link></div>
                <div className="pb-4 pt-2 border-b border-gray-500"><Link to="/archives"><span className="uppercase font-sourcecode text-podgreen-dark">Archives</span></Link></div>
                <div className="pb-4 pt-2 border-b border-gray-500"><Link to="/connect"><span className="uppercase font-sourcecode text-podgreen-dark">Connect</span></Link></div>
            </div>)}
        </main>
    )
}
