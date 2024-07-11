import React, {useState} from 'react';
import Header from './Header.jsx';
import Note from './Note.jsx';
import Footer from './Footer.jsx';
// import { notes } from '../Notes.js';
import CreateArea from "./CreateArea";

export default function App() {


   const [notes, setNotes] = useState([]);

   function addNewNote(newNote) {
      setNotes(prevNotes => [...prevNotes, newNote]);
   }

   function deleteNote(index) {
      setNotes(prevNotes => prevNotes.filter((note, i) => i!== index));
   }

   const notesEl = notes.map((note, i) => (
                              <Note 
                                 key = {i}
                                 id = {i}
                                 title = {note.title}
                                 content = {note.content}
                                 delete = {deleteNote}
                              />
   ))

   return (
         <div>
            <Header />
            <CreateArea 
               addNewNote = {addNewNote}
            />
            {notesEl}
            <Footer />
         </div>
   )
}





