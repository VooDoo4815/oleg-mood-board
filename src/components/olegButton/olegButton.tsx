"use client";
import { Phrase } from "@/configs/phrases";
import "./olegButton.css";
interface OlegButtonProps extends Phrase {}

const stopOther = () => {
    window.speechSynthesis.cancel();
};

const speakPhrase = (phrase: string) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(phrase);

    const getVoice = () => {
        const defaultVoice = synth.getVoices()[0];

        const russianVoice = synth.getVoices().find((voice) => voice.name.includes("Russian"));

        return russianVoice ?? defaultVoice;
    };

    utter.voice = getVoice();
    utter.rate = 1.2;

    synth.speak(utter);
};

function OlegButton(props: OlegButtonProps) {
    const { title, text } = props;

    const onClick = () => {
        stopOther();
        speakPhrase(text);
    };

    return (
        <div className="oleg-button rounded" onClick={onClick}>
            <span className="oleg-button__title">{title}</span>
        </div>
    );
}

export default OlegButton;
