import { User, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen bg-black text-white py-28 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-6">
                <p className="text-yellow-400 font-semibold mb-4 tracking-widest">
                    KONTAKT
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Lassen Sie uns
                    <span className="text-yellow-400">
                        {" "}
                        Ihr Projekt starten
                    </span>
                </h2>

                <p className="text-gray-400 max-w-xl mb-16">
                    Füllen Sie das Formular aus und wir melden uns
                    schnellstmöglich bei Ihnen.
                </p>

                <div className="grid lg:grid-cols-3 gap-24">
                    {/* FORM */}
                    <div className="lg:col-span-2">
                        <form className="space-y-6">
                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Ihr Name"
                                    className="w-full bg-neutral-900 border border-neutral-800 py-4 pl-12 pr-4 outline-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Ihre E-Mail"
                                    className="w-full bg-neutral-900 border border-neutral-800 py-4 pl-12 pr-4 outline-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <div className="relative">
                                <Phone
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Ihre Telefonnummer"
                                    className="w-full bg-neutral-900 border border-neutral-800 py-4 pl-12 pr-4 outline-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-4 top-6 text-gray-500"
                                />

                                <textarea
                                    rows="6"
                                    placeholder="Ihre Nachricht"
                                    className="w-full bg-neutral-900 border border-neutral-800 py-4 pl-12 pr-4 outline-none resize-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <button className="bg-yellow-400 text-black font-semibold px-8 py-4 hover:bg-yellow-300 transition-all hover:scale-105 duration-200 flex items-center gap-2">
                                Nachricht senden
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* CONTACT CARD */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/10 blur-3xl " />

                        <div className="relative bg-neutral-950 border border-yellow-400/30 p-10">
                            <h3 className="text-yellow-400 font-semibold tracking-widest mb-8 uppercase">
                                Kontakt Informationen
                            </h3>

                            <div className="space-y-10">
                                <div className="flex gap-4 items-center">
                                    <Phone className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Telefon
                                        </p>

                                        <p>+49 176 64177557</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <Mail className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            E-Mail
                                        </p>

                                        <p>info@kindakli-elektrotechnik.de</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <MapPin className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Adresse
                                        </p>

                                        <p>Stuttgart, Deutschland</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <Clock className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Öffnungszeiten
                                        </p>

                                        <p>Mo – Fr: 07:00 – 17:00 Uhr</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
