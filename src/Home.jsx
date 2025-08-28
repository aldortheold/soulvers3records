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
                    <h2>Who is Soulvers3?</h2>
                    <p>Soulvers3 is a Christian and gospel music artist who has been releasing tracks since at least 2024. He began his musical journey after converting to Christianity, stating that he decided to be obedient to God above all else</p>
                    <h2>Soulvers3 is known for:</h2>
                    <ul>
                        <li>Genre: Soulvers3's music is Christian and gospel, a style that draws on his faith and incorporates elements from both contemporary and traditional gospel music.</li>
                        <li>Themes: His work often focuses on his relationship with God, faith, and spirituality. This is evident in song titles like "Revival," "Warefare," and "Holy Waters"</li>
                        <li>His Production: Soulvers3 has featured other musicians in his work, such as the beat provided by @x_gamer9588 on his 2024 Revival album.</li>
                    </ul>
                    <h2>Musical style</h2>
                    <p>Soulvers3's musical style is best described as contemporary gospel with influences from R&B, hip-hop, and trap. The artist blends modern production techniques with spiritually focused lyrics to create music that is both sonically current and lyrically traditional.</p>
                </div>
                <img className="portrait" src="/portrait.png" />
            </div>
        </motion.div>
    )
}

export default Home