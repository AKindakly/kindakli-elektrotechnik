import screwdriver1 from "../assets/screwdriver1.png";
import screwdriver2 from "../assets/screwdriver2.png";
import pliers from "../assets/pliers.png";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-black text-white overflow-hidden lg:pb-60"
        >
            {/* Subtle grid overlay */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.1]
                    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                    bg-[size:30px_30px]
                "
            />
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.15]
                    bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
                    bg-[size:120px_120px]
                "
            />
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-black/10
                    to-black
                "
            />
            <div
                className="
                    lg:mb-20
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.08),transparent_55%)]
                "
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            {/* LEFT TOOL 1 */}

            <img
                src={screwdriver1}
                alt="Schraubendreher"
                className="
                    absolute
                    hidden lg:block
                    left-[260px]
                    top-1/2
                    -translate-y-1/2
                    w-[260px]
                    rotate-[25deg]
                    tool-shake
                    transition-all
                    duration-300
                    hover:scale-105
                    drop-shadow-[0_0_25px_rgba(250,204,21,0.2)]
        
                "
            />
            {/* LEFT TOOL 2 */}
            <img
                src={screwdriver2}
                alt="Schraubendreher"
                className="
                absolute
                hidden lg:block
                left-[120px]
                top-[45%]
                -translate-y-1/2
                w-[200px]
                rotate-[-deg]
                tool-shake
                transition-all
                duration-300
                hover:scale-105
                drop-shadow-[0_0_25px_rgba(250,204,21,0.2)]
    "
            />
            {/* RIGHT PLIERS */}
            <img
                src={pliers}
                alt="Zange"
                className="
                    absolute
                    right-[250px]
                    bottom-[10px]
                    w-[230px]
                    rotate-[+30deg]
                    tool-shake
                    transition-all
                    duration-300
                    hover:scale-105
                    drop-shadow-[0_0_12px_rgba(250,204,21,0.2)]
                "
            />
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-70 lg:pb-2">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    <span className="text-white">Kindakli</span>
                    <span className="text-yellow-400"> Elektrotechnik</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl text-gray-300 mb-10">
                    Moderne Elektroinstallationen, zuverlässiger Service und
                    präzise Arbeit für private und gewerbliche Projekte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#contact"
                        className="bg-yellow-400 text-black px-8 py-4 font-semibold hover:bg-yellow-300 transition-all hover:scale-105 duration-200 "
                    >
                        Jetzt Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
