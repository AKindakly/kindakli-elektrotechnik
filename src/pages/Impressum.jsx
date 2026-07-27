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
                            Umsatzsteuer-Identifikationsnummer gemäß §27a
                            Umsatzsteuergesetz:
                            <br />
                            Nicht vorhanden.
                        </p>

                        <p className="mt-3">
                            Sofern eine Steuernummer vorhanden ist, wird diese
                            nicht öffentlich auf dieser Website angegeben.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Haftung für Inhalte
                        </h2>

                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für
                            eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich.
                        </p>

                        <p>
                            Wir übernehmen jedoch keine Gewähr für die
                            Vollständigkeit, Richtigkeit und Aktualität der
                            Inhalte.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Impressum;
