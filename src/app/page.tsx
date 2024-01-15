import "./oleg-page.css";
import OlegPhrases from "@/components/olegPhrases/olegPhrases";
import { olegFiles } from "@/configs/audioFiles";

export default async function Page() {
    const files = await olegFiles();

    return (
        <main className="flex min-h-screen flex-col items-center p-24 oleg-page">
            <span>Какой ты Олег?</span>
            <OlegPhrases olegFiles={files} />
        </main>
    );
}
