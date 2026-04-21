import { Marked } from "marked";
import { useEffect, useState } from "react";
import markedKatex from "marked-katex-extension";
import { gfmHeadingId } from "marked-gfm-heading-id";
import MultiPanel from "../MultiPanel";

export default function MarkdownPage({ content }) {
    const [html, setHtml] = useState("");
    const [headings, setHeadings] = useState([]);
    useEffect(() => {
        const marked = new Marked({ async: false });
        marked.use(markedKatex({ nonStandard: true, throwOnError: false }));
        marked.use(gfmHeadingId());
        const tokens = marked.lexer(content);

        tokens.forEach((token) => {
            if (token.type === "heading") {
                // 'token.text' often contains the raw md like "[Alpha](...)"
                // We want to extract just the plain text from the sub-tokens
                const plainText = token.tokens
                    .map((t) => (t.type === "link" ? t.text : t.text))
                    .join("");

                setHeadings((prev) => [
                    ...prev,
                    {
                        level: token.depth,
                        text: plainText,
                    },
                ]);
            }
        });

        setHtml(marked.parse(content));
    }, [content]);
    return (
        <div className="flex flex-row">
            <div
                className="md"
                dangerouslySetInnerHTML={{ __html: html }}
            ></div>
            <MultiPanel></MultiPanel>
        </div>
    );
}
