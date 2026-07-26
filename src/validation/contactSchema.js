import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),

    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),

    phone: z.string().optional(),

    project: z.string().min(1, "Bitte wählen Sie ein Projekt aus."),

    message: z
        .string()
        .min(10, "Bitte schreiben Sie mindestens 10 Zeichen.")
        .max(1000, "Die Nachricht ist zu lang."),
});
