import { motion } from 'framer-motion';

function Collabs() {
    return (
        <motion.div
            className='collabs'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div>Collabs</div>
        </motion.div>
    )
}

export default Collabs