import { useEffect } from 'react';
import SocialSvg from './components/SocialSvg';
import { motion } from 'framer-motion';

function Home({ width }) {

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
            <h1 className="main-title">Soulvers3 — Gospel Artist</h1>
            <div className="content">
                <div className="description">
                    <h2>Who is Soulvers3?</h2>
                    <p>Soulvers3 is a Christian and gospel music artist who has been releasing tracks since at least 2024. He began his musical journey after converting to Christianity, stating that he decided to be obedient to God above all else</p>
                    <h2>Soulvers3 is known for:</h2>
                    <ul>
                        <li>Genre: Soulvers3's music is Christian and gospel, a style that draws on his faith and incorporates elements from both contemporary and traditional gospel music.</li>
                        <li>Themes: His work often focuses on his relationship with God, faith, and spirituality. This is evident in song titles like "Revival," "Warefare," and "Holy Waters"</li>
                        <li>His Production: Soulvers3 has featured other musicians in his work, such as the beat provided by @Ionseetheproblem on his 2024 Revival album.</li>
                    </ul>
                    <h2 style={{ marginTop: "40px" }}>Soulvers3's Links</h2>
                    <p>Discover and follow Soulvers3 across social media platforms to keep up with the latest music, news, and behind-the-scenes moments.</p>
                    <div className="socials" style={width >= 600 ? { marginBottom: "40px" } : {}}>
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
                </div>
                <img className="portrait" src="/portrait.png" />
            </div>
        </motion.div>
    )
}

export default Home