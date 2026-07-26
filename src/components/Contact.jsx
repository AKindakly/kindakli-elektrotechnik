import {
    User,
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Wrench,
    CircleCheckBig,
    LoaderCircle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "../validation/contactSchema";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const [isSuccess, setIsSuccess] = useState(false);

    async function onSubmit(data) {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Fehler beim Senden.");
            }

            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert(
                "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
            );
        }
    }

    const messageValue = watch("message", "");
    return (
        <section
            id="contact"
            className="relative min-h-screen bg-black text-white py-28 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-6">
                <p className="text-yellow-400 font-semibold mb-4 tracking-widest">
                    KONTAKT
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Lassen Sie uns
                    <span className="text-yellow-400">
                        {" "}
                        Ihr Projekt starten
                    </span>
                </h2>

                <p className="text-gray-400 max-w-xl mb-16">
                    Füllen Sie das Formular aus und wir melden uns
                    schnellstmöglich bei Ihnen.
                </p>

                <div className="grid lg:grid-cols-3 gap-24">
                    {/* FORM */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -25 }}
                                    transition={{ duration: 0.4 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <FloatingInput
                                        icon={<User size={18} />}
                                        label="Ihr Name"
                                        name="name"
                                        register={register}
                                        error={errors.name}
                                    />
                                    <FloatingInput
                                        icon={<Mail size={18} />}
                                        label="Ihre E-Mail"
                                        type="email"
                                        name="email"
                                        register={register}
                                        error={errors.email}
                                    />
                                    {/* <FloatingInput
                                icon={<Phone size={18} />}
                                label="Telefon (optional)"
                                name="phone"
                                register={register}
                                error={errors.phone}
                            /> */}
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-400">
                                            Art des Projekts
                                        </label>

                                        <div className="relative">
                                            <Wrench
                                                size={18}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                            />

                                            <select
                                                {...register("project")}
                                                className="
                w-full
                bg-neutral-900
                border
                border-neutral-700
                pl-12
                pr-4
                py-4
                focus:border-yellow-400
focus:ring-2
focus:ring-yellow-400/20
                outline-none
                transition
            "
                                            >
                                                <option value="">
                                                    Bitte auswählen
                                                </option>
                                                <option>Neubau</option>
                                                <option>Renovierung</option>
                                                <option>Reparatur</option>
                                                <option>Beleuchtung</option>
                                                <option>Sonstiges</option>
                                            </select>
                                        </div>

                                        {errors.project && (
                                            <p className="text-red-400 text-sm mt-2">
                                                {errors.project.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <FloatingTextarea
                                            icon={<Mail size={18} />}
                                            label="Ihre Nachricht"
                                            name="message"
                                            register={register}
                                            error={errors.message}
                                        />

                                        <p className="text-right text-xs text-gray-500 mt-2">
                                            {messageValue.length}/1000
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="
        group
        bg-yellow-400
        text-black
        font-semibold
        px-8
        py-4
        flex
        items-center
        gap-3
        hover:bg-yellow-300
        transition-all
        duration-300
        disabled:opacity-60
        disabled:cursor-not-allowed
    "
                                    >
                                        {isSubmitting ? (
                                            <>
                                                Wird gesendet...
                                                <LoaderCircle
                                                    size={18}
                                                    className="animate-spin"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                Nachricht senden
                                                <Send
                                                    size={18}
                                                    className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            "
                                                />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-neutral-900 border border-yellow-400/30 p-13 text-center"
                                >
                                    <div className="bg-neutral-900 border border-yellow-400/30 p-13 text-center">
                                        <div
                                            className="
    mx-auto
    mb-6
    w-20
    h-20
    flex
    items-center
    justify-center
    bg-yellow-400/10
"
                                        >
                                            <CircleCheckBig
                                                size={50}
                                                className="text-yellow-400"
                                            />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">
                                            Vielen Dank!
                                        </h3>

                                        <p className="text-gray-400">
                                            Ihre Anfrage wurde erfolgreich
                                            gesendet.
                                        </p>

                                        <p className="text-gray-400 mt-2">
                                            Wir melden uns schnellstmöglich bei
                                            Ihnen.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* CONTACT CARD */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/10 blur-3xl " />

                        <div className="relative bg-neutral-950 border border-yellow-400/30 p-10">
                            <h3 className="text-yellow-400 font-semibold tracking-widest mb-8 uppercase">
                                Kontakt Informationen
                            </h3>

                            <div className="space-y-10">
                                <div className="flex gap-4 items-center">
                                    <Phone className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Telefon
                                        </p>

                                        <p>+49-155-65640958</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <Mail className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            E-Mail
                                        </p>

                                        <p>kontakt@kindakli-elektro.de</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <MapPin className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Adresse
                                        </p>

                                        <p>13469 Berlin, Deutschland</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <Clock className="text-yellow-400" />

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Öffnungszeiten
                                        </p>

                                        <p>Mo – Fr: 08:00 – 18:00 Uhr</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
