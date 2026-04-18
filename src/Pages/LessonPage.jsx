import { useEffect, useState } from "react";
import MarkdownPage from "./MarkdownPage";
import { useParams } from "react-router-dom";

export default function LessonPage() {
    const { unit, lesson } = useParams();
    const [unitContent, setUnitContent] = useState(null);

    useEffect(() => {
        // Fetch unit content based on the unit parameter
        fetch(`/markdown/${unit}/${lesson}/index.md`)
            .then((res) => res.text())
            .then((data) => setUnitContent(data));
    }, [unit, lesson]);
    return <MarkdownPage content={unitContent ? unitContent : "Loading..."} />;
}
