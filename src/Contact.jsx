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
            <div>Contact</div>
        </motion.div>
    )
}

export default Contact