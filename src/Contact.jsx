import { useEffect } from 'react';
import SocialSvg from './components/SocialSvg';
import { motion } from 'framer-motion';

function Contact() {

    useEffect(() => {
        document.title = "Contact Soulvers3";
    }, []);

    return (
        <motion.div
            className='contact'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="description">
                <h1>Soulvers3's Links</h1>
                <p>Discover and follow Soulvers3 across social media platforms to keep up with the latest music, news, and behind-the-scenes moments.</p>
                <div className="socials">
                    <a href="https://www.instagram.com/officialsoulvers3/">
                        <SocialSvg social="Instagram" color="var(--link-color)" />
                        Instagram
                    </a>
                    <a href="https://www.youtube.com/channel/UCJvFIExkiwMVmXp6Kud0ahw">
                        <SocialSvg social="YouTube" color="var(--link-color)" />
                        YouTube
                    </a>
                    <a href="https://www.tiktok.com/@officialsoulvers3">
                        <SocialSvg social="TikTok" color="var(--link-color)" />
                        TikTok
                    </a>
                </div>
                <h1 style={{ marginTop: "40px" }}>Contact Soulvers3</h1>
                <p>For inquiries, collaborations, or professional requests, please reach out via email at soulstudios20@gmail.com:</p>
                <div className="socials">
                    <a href="mailto:soulstudios20@gmail.com">
                        <SocialSvg social="Email" color="var(--link-color)" />
                        Contact Soulvers3 via Email
                    </a>
                </div>
                <h1 style={{ marginTop: "40px" }}>Join SoulCity!</h1>
                <p style={{ fontStyle: "italic" }}>If you're looking to get to know Soulvers3 on a personal level and connect with other believers, followers, brothers and sisters in the Faith, and you're looking to increase your relationship with Jesus Christ,  join SoulCity today!</p>
                <p style={{ fontStyle: "italic" }}>Sincerely, from Soulvers3.</p>
                <div className="socials">
                    <a href="https://discord.gg/zJAsRxJkZk">
                        <SocialSvg social="Discord" color="var(--link-color)" />
                        Join Server
                    </a>
                </div>
            </div>
            <img src="/contact-pic-1.webp" className="portrait" />
        </motion.div>
    )
}

export default Contact