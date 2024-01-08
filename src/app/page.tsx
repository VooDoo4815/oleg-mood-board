import Image from "next/image";
import OlegButton from "@/components/olegButton/olegButton";
import { phrases } from "@/configs/phrases";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {phrases.map((phrase, index) => (
                <OlegButton {...phrase} key={index} />
            ))}
        </main>
    );
}
