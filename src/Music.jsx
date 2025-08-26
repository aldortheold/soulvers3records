import { motion } from 'framer-motion';

function Music() {
    return (
        <motion.div
            className='music'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div>Music</div>
        </motion.div>
    )
}

export default Music