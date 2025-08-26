import { useState, useRef } from 'react';
import SocialSvg from './components/SocialSvg';
import { motion } from 'framer-motion';

const releases = ["Warefare (EP)", "Revival (Album)", "Stay With Me (Single)", "Holy Waters (Single)", "Seasons (Single)", "Don't Leave (Single)", "Narrow Path (Single)"]

function Music() {

    const [release, setRelease] = useState("Warefare (EP)");
    const [menuOpen, setMenuOpen] = useState(false);

    const releasesRef = useRef(null);
    const arrowSvg = useRef(null);

    function toggleMenu() {
        arrowSvg.current.classList.toggle("open");
        if (!menuOpen) {
            setMenuOpen(true);
            releasesRef.current.show();
        }
        else {
            setMenuOpen(false);
            releasesRef.current.close();
        }
    };

    function changeEmbed(option) {
        setRelease(option);
        arrowSvg.current.classList.remove("open");
        setMenuOpen(false);
        releasesRef.current.close();
    }

    return (
        <motion.div
            className='music'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="embed">
                <button onClick={toggleMenu}>
                    <div className="current-social">
                        {release}
                    </div>
                    <svg ref={arrowSvg} className="social-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-360 280-560h400L480-360Z"/></svg>
                </button>
                {release === "Warefare (EP)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/warefare-ep/1768581391?theme=dark" />}
                {release === "Revival (Album)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/revival/1750821044?theme=dark" />}
                {release === "Stay With Me (Single)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/stay-with-me-single/1725736451?theme=dark" />}
                {release === "Holy Waters (Single)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/holy-waters-single/1744172315?theme=dark" />}
                {release === "Seasons (Single)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/seasons-single/1756737119?theme=dark" />}
                {release === "Don't Leave (Single)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/dont-leave-single/1746826949?theme=dark" />}
                {release === "Narrow Path (Single)" && <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/narrow-path-single/1738417826?theme=dark" />}
                <dialog className="releases" ref={releasesRef} closedby="any" onClose={() => {
                    arrowSvg.current.classList.remove("open");
                    setMenuOpen(false);
                }}>
                    <ul>{releases.map((item, index) =>
                        <div key={index} onClick={() => changeEmbed(item)} className="social-option">
                            <li>{item}</li>
                        </div>
                    )}</ul>
                </dialog>
            </div>
            <div>
                <div className="description">
                    <h1>Music</h1>
                    <p>Listen to Soulvers3's latest releases through the AppleMusic embed or on any of the following platforms:</p>
                </div>
                <div className="music-links">
                    <a href="https://music.apple.com/us/artist/soulvers3/1718812098" style={{ color: "#eed88e" }}>
                        <SocialSvg social="Apple Music" color="#eed88e" />
                        Apple Music
                    </a>
                    <a href="https://music.apple.com/us/artist/soulvers3/1718812098" style={{ color: "#f0dd94" }}>
                        <SocialSvg social="YouTube" color="#f0dd94" />
                        YouTube
                    </a>
                    <a href="https://www.boomplay.com/artists/80889796" style={{ color: "#f4e39b" }}>
                        <SocialSvg social="Boomplay" color="#f4e39b" />
                        Boomplay
                    </a>
                    <a href="https://www.boomplay.com/artists/80889796" style={{ color: "#f5e59e" }}>
                        <SocialSvg social="Amazon Music" color="#f5e59e" />
                        Amazon Music
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Music