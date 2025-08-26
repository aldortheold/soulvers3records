import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            className='home'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="description">
                <h1>About</h1>
                <p>Soulvers3 is a Christian music artist who released the album <a href="https://music.apple.com/us/album/revival/1750821044">Revival</a> (2024). In the name Soulvers3, the number 3 refers to the Holy Trinity. The artist's name is a combination of "soul" and "verse", indicating a focus on faith and scripture. Given this spiritual context, the number 3 would symbolize divine perfection, as seen in the Father, Son, and Holy Spirit.</p>
                <p>This interpretation reflects Soulvers3's ongoing focus on Christian themes, expressed throughout their music and presence on social media.</p>
                <h2>Music and themes</h2>
                <p>Soulvers3 has released the following, according to Apple Music:</p>
                <ul>
                    <li>Albums and EPs: The artist released the album <a href="https://music.apple.com/us/album/revival/1750821044">Revival</a> and the EP <a href="https://music.apple.com/us/album/warefare-ep/1768581391">Warefare</a>.</li>
                    <li>Key tracks: <a href="https://music.apple.com/us/album/stay-with-me-single/1725736451">Stay With Me</a>, <a href="https://music.apple.com/us/album/holy-waters-single/1744172315">Holy Waters</a>, <a href="https://music.apple.com/us/album/seasons-single/1756737119">Seasons</a>, <a href="https://music.apple.com/us/album/dont-leave-single/1746826949">Don't Leave</a> and <a href="https://music.apple.com/us/album/narrow-path-single/1738417826">Narrow Path</a>.</li>
                    <li>Christian focus: Soulvers3's social media posts highlight biblical references such as John 14:13 and emphasize themes of faith and obedience to God.</li>
                </ul>
            </div>
            <img className="portrait" src="/portrait.png" />
        </motion.div>
    )
}

export default Home