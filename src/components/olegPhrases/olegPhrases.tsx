"use client";
import OlegButton from "@/components/olegButton/olegButton";
import OlegRandomImage from "@/components/olegRandomImage/olegRandomImage";
import { useCallback, useState } from "react";

export default function OlegPhrases({ olegFiles }: { olegFiles: string[] }) {
    const [showImage, setShowImage] = useState(false);

    const playAudio = useCallback((fileName: string) => {
        const audio = new Audio();
        audio.src = "audio/" + fileName;
        audio.play().then(() => {
            setShowImage(true);
            setTimeout(() => {
                setShowImage(false);
            }, 1900);
        });
    }, []);

    return (
        <>
            {showImage && <OlegRandomImage />}
            {olegFiles.map((fileName) => {
                return (
                    <OlegButton title={fileName.split(".")[0]} onInteract={() => playAudio(fileName)} key={fileName} />
                );
            })}
        </>
    );
}
