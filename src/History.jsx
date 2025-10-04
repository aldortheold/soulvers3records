import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialSvg from './components/SocialSvg';

function Contact() {

    useEffect(() => {
        document.title = "History — Soulvers3 Records";
    }, []);

    return (
        <motion.div
            className='history'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <img src="/fact-pic-2.webp" className="portrait" />
            <div className="description">
                <h1>History</h1>
                <h2>Testimony Recap</h2>
                <p style={{ fontStyle: "italic" }}>"For most of my life, I did things on my own. Wanted recognition, popularity, anything that made me feel like I was the main character of my story; what I never concluded is that this life is not about me, or you; it's about recognizing that everything you see around you was made by one person, one perfect Jesus, one ideal God, and one perfect Holy Spirit, I received the gospel shortly after making this conclusion in my story."</p>
                <p style={{ fontStyle: "italic" }}>— Soulvers3.</p>
                <h2 style={{ marginTop: "40px" }}>Before Soulvers3 came out as a music artist for the gospel:</h2>
                <ul>
                    <li>Soulvers3 was a worldly YouTuber with a desire for fame and fortune. (The channel today no longer exists).</li>
                    <li>Soulvers3 had a lot of awful friendships and relationships that lead him down a path of needing God in their life.</li>
                    <li>Soulvers3 knew of the Gospel for most of their life but never took it serious as he does today.</li>
                </ul>
                <h2 style={{ marginTop: "40px" }}>Join SoulCity!</h2>
                <p>If you're looking to get to know Soulvers3 on a personal level and connect with other believers, followers, brothers and sisters in the Faith, and you're looking to increase your relationship with Jesus Christ,&nbsp;&nbsp;join SoulCity today!</p>
                <p>Sincerely, from Soulvers3.</p>
                <div className="socials"  style={{ marginBottom: "40px" }}>
                    <a href="https://discord.gg/zJAsRxJkZk">
                        <SocialSvg social="Discord" color="var(--link-color)" />
                        Join Server
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact