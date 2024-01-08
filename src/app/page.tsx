"use client";
import OlegButton from "@/components/olegButton/olegButton";
import { phrases } from "@/configs/phrases";
import "./oleg-page.css";

export default function OlegPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 oleg-page">
            <span>Какой ты Олег?</span>
            <section className="oleg-page__body">
                {phrases.map((phrase, index) => (
                    <OlegButton {...phrase} key={index} />
                ))}
            </section>
        </main>
    );
}
