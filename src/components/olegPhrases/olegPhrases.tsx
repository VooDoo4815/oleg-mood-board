"use client";
import OlegButton from "@/components/olegButton/olegButton";

export default function OlegPhrases({ olegFiles }: { olegFiles: string[] }) {
    return (
        <section className="oleg-page__body">
            {olegFiles.map((fileName) => {
                return (
                    <OlegButton title={fileName.split(".")[0]} onInteract={() => playAudio(fileName)} key={fileName} />
                );
            })}
        </section>
    );
}

const playAudio = (fileName: string) => {
    const audio = new Audio();
    audio.src = "audio/" + fileName;
    audio.play();
};
