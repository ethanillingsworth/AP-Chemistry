import LameyBot from "./Panels/LameyBot";
import TableOfContents from "./Panels/TOC";

export default function MultiPanel(headings = []) {
    return (
        <div className="multipanel">
            <div className="panels">
                <LameyBot />
            </div>
        </div>
    );
}
