import {
    Zap,
    Wrench,
    Lightbulb,
    Network,
    DoorOpen,
    ShieldCheck,
} from "lucide-react";

const services = [
    {
        icon: <Zap size={34} />,
        title: "Elektroinstallationen",
        text: "Installation und Modernisierung elektrischer Anlagen für Neubauten und Sanierungen.",
    },
    {
        icon: <Wrench size={34} />,
        title: "Reparaturen",
        text: "Schnelle Fehlerdiagnose und professionelle Reparaturen aller elektrischen Anlagen.",
    },
    {
        icon: <Lightbulb size={34} />,
        title: "Beleuchtungstechnik",
        text: "Moderne Innen- und Außenbeleuchtung mit energieeffizienten Lösungen.",
    },
    {
        icon: <DoorOpen size={34} />,
        title: "Sprechanlagen",
        text: "Installation und Wartung von Türsprech- und Videosprechanlagen.",
    },
    {
        icon: <Network size={34} />,
        title: "Netzwerktechnik",
        text: "Professionelle Netzwerkverkabelung für Zuhause und Unternehmen.",
    },
    {
        icon: <ShieldCheck size={34} />,
        title: "Kundendienst",
        text: "Wartung, Service und schnelle Hilfe bei Störungen.",
    },
];

function Services() {
    return (
        <section
            id="services"
            className="relative min-h-screen bg-neutral-950 text-white py-28 overflow-hidden"
        >
            <div className=" max-w-7xl mx-auto px-6">
                {/* TITLE */}

                <div className="text-center mb-20">
                    <p className="text-yellow-400 font-semibold mb-4 tracking-widest">
                        UNSERE LEISTUNGEN
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Unsere <span className="text-yellow-400">Services</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Wir bieten professionelle Elektrotechnik-Lösungen für
                        Privatkunden und Unternehmen – zuverlässig,
                        termingerecht und nach höchsten Qualitätsstandards.
                    </p>
                </div>

                {/* CARDS */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                            group
                            relative
                            overflow-hidden
                            border
                            border-white/10
                            bg-neutral-900/80
                            backdrop-blur-sm
                            p-8
                            transition-all
                            duration-300
                            hover:-translate-y-3
                            hover:border-yellow-400/50
                            hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]
                            "
                        >
                            {/* glow */}

                            <div
                                className="
                                absolute
                                inset-0
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-500
                                bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_60%)]
                                "
                            />

                            <div className="relative">
                                <div
                                    className="
                                    w-16
                                    h-16
                                    bg-yellow-400/10
                                    text-yellow-400
                                    flex
                                    items-center
                                    justify-center
                                    mb-5
                                    group-hover:scale-110
                                    transition-transform
                                    duration-300
                                    "
                                >
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-7">
                                    {service.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
