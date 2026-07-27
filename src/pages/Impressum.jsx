function Impressum() {
    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-yellow-400">
                    Impressum
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Angaben gemäß § 5 DDG
                        </h2>

                        <p>
                            Kindakli Elektrotechnik
                            <br />
                            Mohammed Kindakli
                            <br />
                            Todtnauer Zeile 1
                            <br />
                            13469 Berlin
                            <br />
                            Deutschland
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Kontakt
                        </h2>

                        <p>
                            Telefon:
                            <br />
                            +49-155-65640958
                            <br />
                            <br />
                            E-Mail:
                            <br />
                            kontakt@kindakli-elektro.de
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Gewerbeanmeldung
                        </h2>

                        <p>
                            Die Gewerbeanmeldung wurde bei der zuständigen
                            Behörde vorgenommen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Umsatzsteuer
                        </h2>

                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:
                            <br />
                            Nicht vorhanden.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Impressum;
