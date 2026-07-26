import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    try {
        const { name, email, phone, project, message } = req.body;

        await resend.emails.send({
            from: "Kindakli Elektrotechnik <kontakt@kindakli-elektro.de>",

            to: "kindakli.elektro@gmail.com",

            subject: "Neue Kontaktanfrage - Kindakli Elektrotechnik",

            html: `
                <h2>Neue Anfrage</h2>

                <p>
                <strong>Name:</strong>
                ${name}
                </p>

                <p>
                <strong>Email:</strong>
                ${email}
                </p>

                <p>
                <strong>Telefon:</strong>
                ${phone}
                </p>

                <p>
                <strong>Projekt:</strong>
                ${project}
                </p>


                <p>
                <strong>Nachricht:</strong>
                </p>

                <p>
                ${message}
                </p>
            `,
        });

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
        });
    }
}
