import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Home() {

    useEffect(() => {
        document.title = "Soulvers3 Records";
    }, []);
    
    return (
        <motion.div
            className='home'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <h1>Soulvers3 — Gospel Artist</h1>
            <div className="content">
                <div className="description">
                    <h2>About</h2>
                    <p>Soulvers3's musical style is best described as contemporary gospel with influences from R&B, hip-hop, and trap. The artist blends modern production techniques with spiritually focused lyrics to create music that is both sonically current and lyrically traditional.</p>
                    <h2>Music and themes</h2>
                    <p>Soulvers3 has released the following, according to Apple Music:</p>
                    <ul>
                        <li>Albums and EPs: The artist released the album <a href="https://music.apple.com/us/album/revival/1750821044">Revival</a> and the EP <a href="https://music.apple.com/us/album/warefare-ep/1768581391">Warefare</a>.</li>
                        <li>Key tracks: <a href="https://music.apple.com/us/album/stay-with-me-single/1725736451">Stay With Me</a>, <a href="https://music.apple.com/us/album/holy-waters-single/1744172315">Holy Waters</a>, <a href="https://music.apple.com/us/album/seasons-single/1756737119">Seasons</a>, <a href="https://music.apple.com/us/album/dont-leave-single/1746826949">Don't Leave</a> and <a href="https://music.apple.com/us/album/narrow-path-single/1738417826">Narrow Path</a>.</li>
                        <li>Christian focus: Soulvers3's social media posts highlight biblical references such as John 14:13 and emphasize themes of faith and obedience to God.</li>
                    </ul>
                </div>
                <img className="portrait" src="/portrait.png" />
            </div>
        </motion.div>
    )
}

export default Home