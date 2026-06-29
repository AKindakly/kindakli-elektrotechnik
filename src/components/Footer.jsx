import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-yellow-400/20 text-gray-400">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

            <div className="max-w-7xl mx-auto p-6">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <img src={logo} alt="Kindakli Logo" className="h-10" />

                    <h3 className="text-white text-xl font-semibold">
                        Kindakli Elektrotechnik
                    </h3>
                </div>

                {/* Copyright */}
                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Kindakli Elektrotechnik. Alle
                    Rechte vorbehalten.
                </p>

                {/* Legal Links */}
                <div className="flex justify-center gap-8 mt-6 text-sm">
                    <Link to="/impressum" className="hover:text-yellow-400">
                        Impressum
                    </Link>

                    <Link to="/datenschutz" className="hover:text-yellow-400">
                        Datenschutz
                    </Link>

                    <a href="#" className="hover:text-yellow-400 transition">
                        Cookie-Richtlinie
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
