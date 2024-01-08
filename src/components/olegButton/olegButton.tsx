"use client";
import { Phrase } from "@/configs/phrases";
import "./olegButton.css";
interface OlegButtonProps extends Phrase {}

const synth = window.speechSynthesis;
function OlegButton(props: OlegButtonProps) {
    const { title, text } = props;

    const onClick = () => {
        const utter = new SpeechSynthesisUtterance(text);

        utter.voice = synth.getVoices()[0];

        synth.speak(utter);
    };

    return (
        <div className="oleg-button rounded flex-auto m-0.5 bg-yellow-600" onClick={onClick}>
            <span className="oleg-button__title">{title}</span>
        </div>
    );
}

export default OlegButton;
