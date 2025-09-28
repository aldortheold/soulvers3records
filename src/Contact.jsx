import { useEffect } from 'react';
import SocialSvg from './components/SocialSvg';
import { motion } from 'framer-motion';

function Contact({ width }) {

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
                <h1 style={width >= 600 ? {} : { marginTop: "20px" }}>Contact Soulvers3</h1>
                <p>For inquiries, collaborations, or professional requests, please reach out via email at soulstudios20@gmail.com:</p>
                <div className="socials">
                    <a href="mailto:soulstudios20@gmail.com">
                        <SocialSvg social="Email" color="var(--link-color)" />
                        Contact Soulvers3 via Email
                    </a>
                </div>
                <h1 style={{ marginTop: "40px" }}>Join SoulCity!</h1>
                <p style={{ fontStyle: "italic" }}>If you're looking to get to know Soulvers3 on a personal level and connect with other believers, followers, brothers and sisters in the Faith, and you're looking to increase your relationship with Jesus Christ,&nbsp;&nbsp;join SoulCity today!</p>
                <p style={{ fontStyle: "italic" }}>Sincerely, from Soulvers3.</p>
                <div className="socials">
                    <a href="https://discord.gg/zJAsRxJkZk">
                        <SocialSvg social="Discord" color="var(--link-color)" />
                        Join Server
                    </a>
                </div>
                <h1 style={{ marginTop: "40px" }}>Donation Center</h1>
                <h2>Support the Mission – Donate to Soulvers3</h2>
                <p style={{ fontStyle: "italic" }}>Join us in uplifting faith through art. Your donations help Soulvers3, a Christian artist, continue sharing the Gospel through music and creativity.</p>
                <p style={{ fontStyle: "italic" }}>"Each of you should use whatever gift you have received to serve others." – 1 Peter 4:10.</p>
            </div>
            <img src="/contact-pic-1.webp" className="portrait" />
        </motion.div>
    )
}

export default Contact