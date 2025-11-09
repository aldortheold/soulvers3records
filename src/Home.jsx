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
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z"/></svg>
                        Who is Soulvers3?
                    </h2>
                    <p>Soulvers3 is a Christian and gospel music artist who has been releasing tracks since at least 2024. He began his musical journey after converting to Christianity, stating that he decided to be obedient to God above all else</p>
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="var(--color)" d="M35 12a7 7 0 0 0-7-7c-1.167 0-2.265.29-3.232.794c-2.082-2.827-5.425-4.669-9.205-4.669c-5.132 0-9.475 3.38-10.923 8.036A5.997 5.997 0 0 0 0 15a5.996 5.996 0 0 0 5.021 5.913C5.237 24.862 8.498 28 12.5 28c2.176 0 4.13-.933 5.5-2.413A7.472 7.472 0 0 0 23.5 28c4.143 0 7.5-3.357 7.5-7.5a7.5 7.5 0 0 0-.289-2.045A7.001 7.001 0 0 0 35 12z"></path><circle fill="var(--color)" cx="4" cy="31" r="3"></circle></g></svg>
                        Soulvers3 is known for:
                    </h2>
                    <ul>
                        <li>Genre: Soulvers3's music is Christian and gospel, a style that draws on his faith and incorporates elements from both contemporary and traditional gospel music.</li>
                        <li>Themes: His work often focuses on his relationship with God, faith, and spirituality. This is evident in song titles like "Revival," "Warefare," and "Holy Waters"</li>
                        <li>His Production: Soulvers3 has featured other musicians in his work, such as the beat provided by @Ionseetheproblem on his 2024 Revival album.</li>
                    </ul>
                    <h2 style={{ marginTop: "40px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z" fill="var(--color)"></path><path d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z" fill="var(--color)"></path></g></svg>
                        Soulvers3's Links
                    </h2>
                    <p>Discover and follow Soulvers3 across social media platforms to keep up with the latest music, news, and behind-the-scenes moments.</p>
                    <div className="socials" style={width >= 600 ? { marginBottom: "40px" } : {}}>
                        <a href="https://www.instagram.com/officialsoulvers3/" target="_blank">
                            <SocialSvg social="Instagram" color="var(--link-color)" />
                            Instagram
                        </a>
                        <a href="https://www.youtube.com/channel/UCJvFIExkiwMVmXp6Kud0ahw" target="_blank">
                            <SocialSvg social="YouTube" color="var(--link-color)" />
                            YouTube
                        </a>
                        <a href="https://www.tiktok.com/@officialsoulvers3" target="_blank">
                            <SocialSvg social="TikTok" color="var(--link-color)" />
                            TikTok
                        </a>
                        <a href="https://x.com/Soulvers3" target="_blank">
                            <SocialSvg social="X" color="var(--link-color)" />
                            X (Twitter)
                        </a>
                    </div>
                </div>
                <img className="portrait" src="/about-pic-3.webp" />
            </div>
        </motion.div>
    )
}

export default Home