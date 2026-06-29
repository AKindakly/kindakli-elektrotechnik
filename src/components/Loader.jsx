import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Loader() {
    return (
        <motion.div
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
            exit={{ opacity: 0 }}
        >
            <motion.img
                src={logo}
                className="w-32"
                initial={{
                    scale: 31,
                    opacity: 0,
                }}
                animate={{
                    scale: 0.7,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                }}
            />
        </motion.div>
    );
}

export default Loader;
