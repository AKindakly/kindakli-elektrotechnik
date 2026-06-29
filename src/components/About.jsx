import aboutImg from "../assets/about.png";
import { UsersRound, Crown, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen py-24 bg-neutral-950 text-white overflow-hidden flex items-center"
        >
            <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                {/* LEFT TEXT */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-yellow-400 font-semibold mb-4 tracking-widest">
                        ÜBER UNS
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Kompetenz, Qualität und{" "}
                        <span className="text-yellow-400">Zuverlässigkeit</span>
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Kindakli Elektrotechnik steht für moderne
                        Elektroinstallationen, saubere Arbeit und höchste
                        Qualität. Wir begleiten unsere Kunden von der Planung
                        bis zur Umsetzung – zuverlässig, ehrlich und mit
                        Leidenschaft für jedes Projekt.
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-5">
                            <ShieldCheck
                                size={44}
                                className="text-yellow-400"
                            />
                            <div>
                                <h4 className="font-semibold">
                                    Zuverlässig & Präzise
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Termintreue und saubere Arbeit stehen im
                                    Fokus.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <Crown size={40} className="text-yellow-400" />
                            <div>
                                <h4 className="font-semibold">
                                    Höchste Qualität
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Wir arbeiten nur mit hochwertigen
                                    Materialien und modernen Standards.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <UsersRound size={40} className="text-yellow-400" />
                            <div>
                                <h4 className="font-semibold">
                                    Kundenorientiert
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Ihre Zufriedenheit ist unser Anspruch. Wir
                                    hören zu und finden die beste Lösung.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="flex-1 relative"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    <div className="absolute inset-0 bg-yellow-400/10 blur-3xl" />

                    <img
                        src={aboutImg}
                        alt="About Kindakli Elektrotechnik"
                        className="relative w-full max-w-lg mx-auto shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default About;
