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
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="var(--color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                    Testimony Recap
                </h2>
                <p style={{ fontStyle: "italic" }}>"For most of my life, I did things on my own. Wanted recognition, popularity, anything that made me feel like I was the main character of my story; what I never concluded is that this life is not about me, or you; it's about recognizing that everything you see around you was made by one person, one perfect Jesus, one ideal God, and one perfect Holy Spirit, I received the gospel shortly after making this conclusion in my story."</p>
                <p style={{ fontStyle: "italic" }}>— Soulvers3.</p>
                <h2 style={{ marginTop: "40px" }}>Before Soulvers3 came out as a music artist for the gospel:</h2>
                <ul>
                    <li>Soulvers3 was a worldly YouTuber with a desire for fame and fortune. (The channel today no longer exists).</li>
                    <li>Soulvers3 had a lot of awful friendships and relationships that lead him down a path of needing God in their life.</li>
                    <li>Soulvers3 knew of the Gospel for most of their life but never took it serious as he does today.</li>
                </ul>
                <h2 style={{ marginTop: "40px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 21C10 20.4477 10.4477 20 11 20H13C13.5523 20 14 20.4477 14 21V23C14 23.5523 13.5523 24 13 24H11C10.4477 24 10 23.5523 10 23V21Z" fill="var(--color)"></path><path d="M16 21C16 20.4477 16.4477 20 17 20H19C19.5523 20 20 20.4477 20 21V23C20 23.5523 19.5523 24 19 24H17C16.4477 24 16 23.5523 16 23V21Z" fill="var(--color)"></path><path d="M11 26C10.4477 26 10 26.4477 10 27V29C10 29.5523 10.4477 30 11 30H13C13.5523 30 14 29.5523 14 29V27C14 26.4477 13.5523 26 13 26H11Z" fill="var(--color)"></path><path d="M10 33C10 32.4477 10.4477 32 11 32H13C13.5523 32 14 32.4477 14 33V35C14 35.5523 13.5523 36 13 36H11C10.4477 36 10 35.5523 10 35V33Z" fill="var(--color)"></path><path d="M17 26C16.4477 26 16 26.4477 16 27V29C16 29.5523 16.4477 30 17 30H19C19.5523 30 20 29.5523 20 29V27C20 26.4477 19.5523 26 19 26H17Z" fill="var(--color)"></path><path d="M16 33C16 32.4477 16.4477 32 17 32H19C19.5523 32 20 32.4477 20 33V35C20 35.5523 19.5523 36 19 36H17C16.4477 36 16 35.5523 16 35V33Z" fill="var(--color)"></path><path d="M35 22C34.4477 22 34 22.4477 34 23V25C34 25.5523 34.4477 26 35 26H37C37.5523 26 38 25.5523 38 25V23C38 22.4477 37.5523 22 37 22H35Z" fill="var(--color)"></path><path d="M34 29C34 28.4477 34.4477 28 35 28H37C37.5523 28 38 28.4477 38 29V31C38 31.5523 37.5523 32 37 32H35C34.4477 32 34 31.5523 34 31V29Z" fill="var(--color)"></path><path d="M35 34C34.4477 34 34 34.4477 34 35V37C34 37.5523 34.4477 38 35 38H37C37.5523 38 38 37.5523 38 37V35C38 34.4477 37.5523 34 37 34H35Z" fill="var(--color)"></path><path fillRule="evenodd" clipRrule="evenodd" d="M6 42H4V44H44V42H42V21C42 19.3431 40.6569 18 39 18H33V7C33 5.34315 31.6569 4 30 4H18C16.3431 4 15 5.34315 15 7V16H9C7.34315 16 6 17.3431 6 19V42ZM22 42V19C22 18.4477 21.5523 18 21 18H9C8.44771 18 8 18.4477 8 19V42H22ZM40 42V21C40 20.4477 39.5523 20 39 20H33V42H40ZM20 8C19.4477 8 19 8.44772 19 9V11C19 11.5523 19.4477 12 20 12H22C22.5523 12 23 11.5523 23 11V9C23 8.44772 22.5523 8 22 8H20ZM20 14C19.4477 14 19 14.4477 19 15V16H21C21.7684 16 22.4692 16.2889 23 16.7639V15C23 14.4477 22.5523 14 22 14H20ZM26 8C25.4477 8 25 8.44772 25 9V11C25 11.5523 25.4477 12 26 12H28C28.5523 12 29 11.5523 29 11V9C29 8.44772 28.5523 8 28 8H26ZM25 15C25 14.4477 25.4477 14 26 14H28C28.5523 14 29 14.4477 29 15V17C29 17.5523 28.5523 18 28 18H26C25.4477 18 25 17.5523 25 17V15ZM26 20C25.4477 20 25 20.4477 25 21V23C25 23.5523 25.4477 24 26 24H28C28.5523 24 29 23.5523 29 23V21C29 20.4477 28.5523 20 28 20H26ZM25 27C25 26.4477 25.4477 26 26 26H28C28.5523 26 29 26.4477 29 27V29C29 29.5523 28.5523 30 28 30H26C25.4477 30 25 29.5523 25 29V27ZM26 32C25.4477 32 25 32.4477 25 33V35C25 35.5523 25.4477 36 26 36H28C28.5523 36 29 35.5523 29 35V33C29 32.4477 28.5523 32 28 32H26Z" fill="var(--color)"></path></g></svg>
                    Join SoulCity!
                </h2>
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