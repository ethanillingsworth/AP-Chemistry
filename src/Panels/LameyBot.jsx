import { Marked } from "marked";
import { useEffect, useState } from "react";
import { model } from "../firebase/firebase";
import markedKatex from "marked-katex-extension";

function LameyChat({ response }) {
    const marked = new Marked({ async: false });
    marked.use(markedKatex({ nonStandard: true, throwOnError: false }));
    return (
        <div className="chat">
            <div className="flex flex-row gap-2 w-full">
                <img src="https://placehold.co/25x25" className="rounded" />
                <div className="font-bold">LameyBot</div>
            </div>
            <div className="chat-message"
                dangerouslySetInnerHTML={{ __html: marked.parse(response) }}
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
    const [chats, setChats] = useState([]);
    const [input, setInput] = useState("");
    const chat = model.startChat({
        history: [],
        generationConfig: { maxOutputTokens: 1024 },
    });

    function sendMessage() {
        setChats([
            ...chats,
            <UserChat text={input} />,
            <LameyChat response={"Thinking..."} />,
        ]);
        setInput("");
        chat.sendMessage(input)
            .then((response) => {
                setChats((prev) => {
                    // Remove the "Thinking..." message
                    const updatedChats = prev.filter(
                        (chat) => !(chat.props.response === "Thinking..."),
                    );
                    return [
                        ...updatedChats,
                        <LameyChat response={response.response.text()} />,
                    ];
                });
            })
            .catch((error) => {
                setChats((prev) => [
                    ...prev,
                    <LameyChat response={error.message} />,
                ]);
            });
    }

    useEffect(() => {
        setChats([
            <LameyChat
                response={
                    "Hey there! Mrs. Lamey here. Safety goggles on, hair tied back—let's get a reaction going! 🥽 What AP Chemistry topic can I help you break down today?"
                }
            />,
        ]);
    }, []);

    return (
        <div className="lamey-bot flex flex-col">
            <div className="flex flex-col gap-8 overflow-auto">
                {chats.map((chat, index) => (
                    <div key={index}>{chat}</div>
                ))}
            </div>
            <div className="flex flex-col mt-auto gap-2">
                <textarea
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
