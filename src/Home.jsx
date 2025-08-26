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
                <p>Soulvers3 is a Christian music artist who released the album Revival (2024). In the name Soulvers3, the number 3 refers to the Holy Trinity. The artist's name is a combination of "soul" and "verse", indicating a focus on faith and scripture. Given this spiritual context, the number 3 would symbolize divine perfection, as seen in the Father, Son, and Holy Spirit.</p>
                <p>This interpretation reflects Soulvers3's ongoing focus on Christian themes, expressed throughout their music and presence on social media.</p>
                <h2>Music and themes</h2>
                <p>Soulvers3 has released the following, according to Apple Music:</p>
                <ul>
                    <li>Albums and EPs: The artist released the album Revival and the EP Warefare.</li>
                    <li>Key tracks: Some songs by Soulvers3 include Stay With Me, Seasons, Don't Leave and Narrow Path.</li>
                    <li>Christian focus: Social media posts confirm a Christian focus, mentioning biblical references like John 14:13 and themes of obedience to God.</li>
                </ul>
            </div>
            <img className="portrait" src="/portrait.png" />
        </motion.div>
    )
}

export default Home