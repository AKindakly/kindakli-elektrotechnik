/* global process */
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to prevent HTML injection in emails
function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\n/g, "<br/>"); // Preserves line breaks in user messages
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    try {
        const { name, email, phone, project, message, website } = req.body;

        // Honeypot spam check
        if (website) {
            return res.status(400).json({
                success: false,
                message: "Spam detected",
            });
        }

        // Escape user inputs
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = phone ? escapeHtml(phone) : "Nicht angegeben";
        const safeProject = project ? escapeHtml(project) : "Nicht angegeben";
        const safeMessage = escapeHtml(message);

        await resend.emails.send({
            from: "Kindakli Elektrotechnik <kontakt@kindakli-elektro.de>",

            to: "kindakli.elektro@gmail.com",

            subject: "Neue Kontaktanfrage - Kindakli Elektrotechnik",

            html: `
<div style="
    font-family: Arial, sans-serif;
    background:#0a0a0a;
    padding:40px;
    color:white;
">

<div style="
    max-width:600px;
    margin:auto;
    background:#111;
    border:1px solid #333;
    padding:30px;
">

<h1 style="
    color:#facc15;
    margin-bottom:5px;
">
⚡ Kindakli Elektrotechnik
</h1>

<p style="
    color:#999;
    margin-top:0;
">
Neue Kontaktanfrage über die Website
</p>


<hr style="
border:none;
border-top:1px solid #333;
margin:25px 0;
">


<h3 style="color:#facc15;">
👤 Kunde
</h3>

<p>
<strong>Name:</strong> ${safeName}
</p>


<h3 style="color:#facc15;">
📧 Kontakt
</h3>

<p>
<strong>Email:</strong> ${safeEmail}
</p>

<p>
<strong>Telefon:</strong> ${safePhone}
</p>


<h3 style="color:#facc15;">
🔧 Projekt
</h3>

<p>
${safeProject}</p>


<h3 style="color:#facc15;">
💬 Nachricht
</h3>

<div style="
background:#0a0a0a;
padding:15px;
border-left:3px solid #facc15;
">

${safeMessage}

</div>


<hr style="
border:none;
border-top:1px solid #333;
margin:25px 0;
">


<p style="
color:#777;
font-size:12px;
">
Gesendet über kindakli-elektro.de
</p>


</div>
</div>
`,
        });

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error("Server Handler Error:", error);
        return res.status(500).json({
            success: false,
            message: "Serverfehler beim Senden der Nachricht",
        });
    }
}
