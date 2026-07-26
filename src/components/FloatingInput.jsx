import { motion } from "framer-motion";

function FloatingInput({ icon, label, type = "text", register, name, error }) {
    return (
        <div>
            {/* INPUT AREA */}
            <div className="relative">
                {/* ICON */}
                <div
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    pointer-events-none
                    "
                >
                    {icon}
                </div>

                {/* INPUT */}
                <input
                    type={type}
                    placeholder=" "
                    {...register(name)}
                    className={`
                        peer
                        w-full
                        bg-neutral-900
                        border
                        py-4
                        pl-12
                        pr-4
                        outline-none
                        transition-all
                        duration-300

                        ${
                            error
                                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                : "border-neutral-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                        }
                    `}
                />

                {/* LABEL */}
                <label
                    className="
                    absolute
                    left-12
                    top-4
                    text-gray-500
                    transition-all
                    duration-300
                    pointer-events-none

                    peer-placeholder-shown:top-4
                    peer-placeholder-shown:text-base

                    peer-focus:-top-2
                    peer-focus:text-xs
                    peer-focus:text-yellow-400

                    peer-[:not(:placeholder-shown)]:-top-2
                    peer-[:not(:placeholder-shown)]:text-xs
                    "
                >
                    {label}
                </label>
            </div>

            {/* ERROR MESSAGE OUTSIDE */}
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                    text-red-400
                    text-sm
                    mt-2
                    "
                >
                    {error.message}
                </motion.p>
            )}
        </div>
    );
}

export default FloatingInput;
