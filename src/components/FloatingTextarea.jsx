import { motion } from "framer-motion";

function FloatingTextarea({ icon, label, register, name, error }) {
    return (
        <div className="relative">
            <div className="absolute left-4 top-5 text-gray-500">{icon}</div>

            <textarea
                id={name}
                rows="6"
                placeholder=" "
                {...register(name)}
                aria-invalid={error ? "true" : "false"}
                className={`
                    peer
                    w-full
                    bg-neutral-900
                    border
                    py-4
                    pl-12
                    pr-4
                    resize-none
                    outline-none
                    transition-all
                    duration-300

                    ${
                        error
                            ? "border-red-500"
                            : "border-neutral-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    }
                `}
            />

            <label
                htmlFor={name}
                className="
                    absolute
                    left-12
                    top-4
                    text-gray-400
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

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                >
                    {error.message}
                </motion.p>
            )}
        </div>
    );
}

export default FloatingTextarea;
