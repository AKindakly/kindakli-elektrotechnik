import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-yellow-400/20 text-gray-400">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

            <div className="max-w-7xl mx-auto p-6">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <img
                        src={logo}
                        width="41"
                        height="35"
                        alt="Kindakli Logo"
                        className="h-10"
                    />

                    <h3 className="text-white text-xl font-semibold">
                        Kindakli Elektrotechnik
                    </h3>
                </div>

                {/* Inline Copyright + Legal Links */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                    <span>
                        © {new Date().getFullYear()} Kindakli Elektrotechnik
                    </span>

                    <span className="hidden sm:inline text-gray-700">|</span>

                    <div className="flex gap-6">
                        <Link
                            to="/impressum"
                            className="hover:text-yellow-400 transition"
                        >
                            Impressum
                        </Link>

                        <Link
                            to="/datenschutz"
                            className="hover:text-yellow-400 transition"
                        >
                            Datenschutz
                        </Link>

                        {/* <a
                            href="#"
                            className="hover:text-yellow-400 transition"
                        >
                            Cookie-Richtlinie
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
