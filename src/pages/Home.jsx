import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="bg-black text-white">
            <Hero />
            <Services />
            <About />
            <Contact />
        </div>
    );
}

export default App;
