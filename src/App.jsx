import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateNotes from "./components/CreateNotes";
import './App.css';

function App() {
    const [notes, createNotes] = useState([]);

    function addNote(newNote) {
        createNotes(oldNotes => {
            return [...oldNotes, newNote];
        });
    }

    function removeNote(id) {
        createNotes(oldNotes => {
            return oldNotes.filter((noteContent, serial) => {
                return serial !== id;
            });
        });
    }

    return (
    <div>
        <Header />
        <div className="container">
            <CreateNotes add={addNote} />
            <div className="notes-grid">
                {notes.map((noteContent, serial) => (
                    <Note
                        key={serial}
                        id={serial}
                        heading={noteContent.heading}
                        text={noteContent.text}
                        onDelete={removeNote}
                    />
                ))}
            </div>
        </div>
    </div>
);
}

export default App;