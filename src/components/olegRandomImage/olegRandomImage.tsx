import "./oleg-image.css";

export default function OlegRandomImage() {
    const imageNumber = Math.floor(Math.random() * 5) + 1;

    return (
        <section className="oleg-image__container">
            <img className="oleg-image" src={`images/oleg-${imageNumber}.webp`} alt="Прекрасное мемное фото Олега" />
        </section>
    );
}
