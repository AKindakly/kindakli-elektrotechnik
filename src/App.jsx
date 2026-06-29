import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function App() {
    return (
        <div className="bg-black text-white">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
