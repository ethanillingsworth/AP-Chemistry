import { Marked } from "marked";
import { useEffect, useState } from "react";
import markedKatex from "marked-katex-extension";

export default function MarkdownPage({ content }) {
    const [html, setHtml] = useState("");
    useEffect(() => {
        const marked = new Marked();
        marked.use(markedKatex({ nonStandard: true, throwOnError: false }));
        try {
            setHtml(marked.parse(content));
        } catch (e) {
            setHtml("Error parsing markdown");
        }
    }, [content]);
    return (
        <div className="md" dangerouslySetInnerHTML={{ __html: html }}></div>
    );
}
