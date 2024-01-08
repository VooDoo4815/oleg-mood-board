"use client";
import { Phrase } from "@/configs/phrases";
import "./olegButton.css";
interface OlegButtonProps extends Phrase {}

const stopOther = () => {
    window.speechSynthesis.cancel();
};

function OlegButton(props: OlegButtonProps) {
    const { title, text } = props;

    const onClick = () => {
        stopOther();
        const synth = window.speechSynthesis;
        const utter = new SpeechSynthesisUtterance(text);

        utter.voice = synth.getVoices()[4];
        utter.rate = 1.2;

        synth.speak(utter);
    };

    return (
        <div className="oleg-button rounded" onClick={onClick}>
            <span className="oleg-button__title">{title}</span>
        </div>
    );
}

export default OlegButton;
