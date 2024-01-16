import "./olegButton.css";
interface OlegButtonProps {
    onInteract?: () => void;
    title?: string;
}

function OlegButton(props: OlegButtonProps) {
    const { title = "", onInteract = () => {} } = props;

    return (
        <button className="oleg-button rounded container" onClick={onInteract}>
            {title}
        </button>
    );
}

export default OlegButton;
