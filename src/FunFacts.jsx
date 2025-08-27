import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Contact() {

    useEffect(() => {
        document.title = "Fun Facts — Soulvers3 Records";
    }, []);

    return (
        <motion.div
            className='fun-facts'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <img src="/portrait.png" className="portrait" />
            <div className="description">
                <h1>Fun Facts</h1>
                <h2>What's the genre of Soulvers3's music?</h2>
                <p>Soulvers3s music falls under the Christian and Gospel genres. The artist uses modern production techniques and is also active as a DJ and beatmaker, infusing contemporary sounds into the music.</p>
                <p>This is evident in the themes and titles of the music:</p>
                <ul>
                    <li>The album <a href="https://music.apple.com/us/album/revival/1750821044">Revival</a> and the single <a href="https://music.apple.com/us/album/holy-waters-single/1744172315">Holy Waters</a> are explicitly Christian themes.</li>
                    <li>The EP <a href="https://music.apple.com/us/album/warefare-ep/1768581391">Warefare</a> likely refers to spiritual warfare, a common topic in Christian music.</li>
                    <li>The single <a href="https://music.apple.com/us/album/narrow-path-single/1738417826">Narrow Path</a> points to a biblical reference of following Jesus.</li>
                </ul>
                <h2>Before Soulvers3 came out as a music artist for the gospel:</h2>
                <ul>
                    <li>Soulvers3 was a worldly YouTuber with a desire for fame and fortune. (The channel today no longer exists).</li>
                    <li>Soulvers3 had a lot of awful friendships and relationships that lead him down a path of needing God in their life.</li>
                    <li>Soulvers3 knew of the Gospel for most of their life but never took it serious as he does today.</li>
                </ul>
                <h2>What does 3 mean in Soulvers3?</h2>
                <p>In the name Soulvers3, the number 3 refers to the Holy Trinity. The artist's name is a combination of "soul" and "verse", indicating a focus on faith and scripture. Given this spiritual context, the number 3 would symbolize divine perfection, as seen in the Father, Son, and Holy Spirit.</p>
            </div>
        </motion.div>
    )
}

export default Contact