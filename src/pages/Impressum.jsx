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
                            Musterstraße 1<br />
                            12345 Stuttgart
                            <br />
                            Deutschland
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-2">
                            Kontakt
                        </h2>
                        <p>
                            Telefon: +49 176 64177557
                            <br />
                            E-Mail: info@kindakli-elektrotechnik.de
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
