import SocialSvg from './components/SocialSvg';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div
            className='contact'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="description">
                <h1>Contact Soulvers3</h1>
                <p>For inquiries related to music, collaborations, or media, please reach out through <a href="mailto:soulvers3@gmail.com">email</a> or via the social media links below:</p>
                <div className="socials">
                    <a href="https://www.instagram.com/officialsoulvers3/"><SocialSvg social="Instagram" color="#dfbe6f" /></a>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact