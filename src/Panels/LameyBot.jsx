import { marked } from "marked";
import { useEffect, useState } from "react";
import { model } from "../firebase/firebase";

function LameyChat({ response }) {
    return (
        <div className="chat">
            <div className="flex flex-row gap-2 w-full">
                <img src="https://placehold.co/25x25" className="rounded" />
                <div className="font-bold">LameyBot</div>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: marked.parse(response) }}
                className="whitespace-break-spaces"
            ></div>
        </div>
    );
}

function UserChat({ text }) {
    return (
        <div className="chat">
            <div className="font-bold">You</div>

            <div>{text}</div>
        </div>
    );
}

export default function LameyBot() {
    const [chats, setChats] = useState([
        // <LameyBot response="Hello! How can I help you today?" />,
    ]);
    const [userChats, setUserChats] = useState([]);
    const [input, setInput] = useState("");

    function sendMessage() {
        setChats([...chats, <UserChat text={input} />]);
        setInput("");
        setUserChats([...userChats, { text: input }]);
    }

    useEffect(() => {
        if (!userChats || userChats.length === 0) return;
        model
            .generateContent(userChats)
            .then((response) => {
                setChats((prev) => [
                    ...prev,
                    <LameyChat response={response.response.text()} />,
                ]);
            })
            .catch((err) => {
                console.error("Error generating response:", err);
                setChats((prev) => [
                    ...prev,
                    <LameyChat response={err.message} />,
                ]);
            });
    }, [chats]);

    return (
        <div className="lamey-bot flex flex-col">
            <div className="flex flex-col gap-8 overflow-auto">
                {chats.map((chat, index) => (
                    <div key={index}>{chat}</div>
                ))}
            </div>
            <div className="flex flex-row mt-auto">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
