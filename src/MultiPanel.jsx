import LameyBot from "./Panels/LameyBot";
import TableOfContents from "./Panels/TOC";
import { useState } from "react";
export default function MultiPanel({ headings = [] }) {
    const [page, setPage] = useState("exit");

    return (
        <div className="multipanel">
            <div className="flex flex-col gap-1">
                {headings.length > 0 ? (
                    <button
                        className={`panel-button ${
                            page === "toc" ? "active" : ""
                        }`}
                        onClick={() => setPage("toc")}
                    >
                        TOC
                    </button>
                ) : null}
                <button
                    className={`panel-button ${
                        page === "lameybot" ? "active" : ""
                    }`}
                    onClick={() => setPage("lameybot")}
                >
                    LameyBot
                </button>
                <button
                    className={`panel-button ${
                        page === "notes" ? "active" : ""
                    }`}
                    onClick={() => setPage("notes")}
                >
                    Notes
                </button>
                <button
                    className={`panel-button ${
                        page === "exit" ? "active" : ""
                    }`}
                    onClick={() => setPage("exit")}
                >
                    Exit
                </button>
            </div>
            <div className={page === "exit" ? "w-0" : "panels"}>
                {page === "lameybot" && <LameyBot />}
                {headings.length > 0 && page === "toc" ? (
                    <TableOfContents headings={headings} />
                ) : null}
                {/* {page === "notes" && <Notes />} */}
            </div>
        </div>
    );
}
