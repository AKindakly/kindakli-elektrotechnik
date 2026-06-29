import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = "hover:text-yellow-400 transition-colors";

    const clipPathStyle = {
        clipPath: "polygon(0 0, 100% 0, 94% 100%, 6% 100%)",
    };

    const navigate = useNavigate();
    const location = useLocation();

    function handleScroll(id) {
        if (location.pathname !== "/") {
            navigate("/", { replace: false });

            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }

    const [active, setActive] = useState("");
    useEffect(() => {
        const sections = ["services", "about", "contact"];

        function onScroll() {
            let current = "";

            sections.forEach((id) => {
                const el = document.getElementById(id);

                if (el) {
                    const rect = el.getBoundingClientRect();

                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = id;
                    }
                }
            });

            setActive(current);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
            <div className="lg:max-w-[90%] max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
                {/* LEFT: LOGO */}
                <Link
                    to="/"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="flex items-center gap-2"
                >
                    <img
                        src={logo}
                        alt="Kindakli Logo"
                        className="h-9 w-auto"
                    />
                    <h1 className="text-xl font-bold">
                        Kindakli Elektrotechnik
                    </h1>
                </Link>

                {/* MIDDLE: CTA BUTTON WITH FRAME */}
                <div
                    className="hidden md:block -translate-y-4 bg-yellow-400 p-[1px] hover:scale-105 transition-all duration-200 ease-in-out"
                    style={clipPathStyle}
                >
                    {/* The inner wrapper creates the 2px gap using a black background */}
                    <div
                        className="bg-black p-[6px] w-full h-full"
                        style={clipPathStyle}
                    >
                        <button
                            onClick={() => handleScroll("contact")}
                            className="
        block
        bg-yellow-400
        text-black
        text-xl
        px-12
        py-4
        font-semibold
        shadow-lg
        hover:bg-yellow-300
        transition-colors
        duration-200
    "
                            style={clipPathStyle}
                        >
                            Kontakt aufnehmen
                        </button>
                    </div>
                </div>

                {/* RIGHT: LINKS */}
                <ul className="hidden md:flex gap-8 text-sm">
                    <li>
                        <button
                            onClick={() => handleScroll("services")}
                            className={`${linkClass} ${
                                active === "services"
                                    ? "text-yellow-400 scale-110 font-semibold"
                                    : ""
                            }`}
                        >
                            Leistungen
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("about")}
                            className={`${linkClass} ${
                                active === "about"
                                    ? "text-yellow-400 scale-110 font-semibold"
                                    : ""
                            }`}
                        >
                            Über Uns
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("contact")}
                            className={`${linkClass} ${
                                active === "contact"
                                    ? "text-yellow-400 scale-110 font-semibold"
                                    : ""
                            }`}
                        >
                            Kontakt
                        </button>
                    </li>
                </ul>

                {/* MOBILE BUTTON */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Navbar Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-neutral-950 px-6 py-4 space-y-4">
                    <button
                        onClick={() => {
                            handleScroll("services");
                            setOpen(false);
                        }}
                        className="block hover:text-yellow-400"
                    >
                        Leistungen
                    </button>
                    <button
                        onClick={() => {
                            handleScroll("about");
                            setOpen(false);
                        }}
                        className="block hover:text-yellow-400"
                    >
                        Über Uns
                    </button>
                    <button
                        onClick={() => {
                            handleScroll("contact");
                            setOpen(false);
                        }}
                        className="block hover:text-yellow-400"
                    >
                        Kontakt
                    </button>

                    <button
                        onClick={() => {
                            handleScroll("contact");
                            setOpen(false);
                        }}
                        className="block mt-4 bg-yellow-400 text-black text-center py-2 font-semibold"
                    >
                        Kontakt aufnehmen
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
