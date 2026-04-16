import { useEffect, useState } from "react";
import MarkdownPage from "./MarkdownPage";
import { useParams } from "react-router-dom";

export default function UnitPage() {
    const { unit } = useParams();
    const [unitContent, setUnitContent] = useState(null);

    useEffect(() => {
        // Fetch unit content based on the unit parameter
        fetch(`/markdown/${unit}/home.md`)
            .then((res) => res.text())
            .then((data) => setUnitContent(data));
    }, [unit]);
    return <MarkdownPage content={unitContent ? unitContent : "Loading..."} />;
}
