function Impressum() {
    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-yellow-400">
                    Impressum
                </h1>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <p>
                            Kindakli Elektrotechnik
                            <br />
                            Todtnauer Zeile 1<br />
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
                            Telefon: +49-155-65640958
                            <br />
                            E-Mail: kontakt@kindakli-elektro.de
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Verantwortlich für den Inhalt
                        </h2>
                        <p>
                            Kindakli Elektrotechnik
                            <br />
                            vertreten durch den Inhaber
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Umsatzsteuer-ID
                        </h2>
                        <p>(Falls vorhanden eintragen)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Impressum;
