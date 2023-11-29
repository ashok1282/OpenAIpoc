import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Content from './Content';
import Display from './Display';





function Ap() {
  // Load notes from local storage on component mount
  const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <div className='header'>
        <div>
           <img className='lionImg' src='./src/assets/lion.png' /> 
        </div>
        <div>
          <img className='ncbImg' src='./src/assets/middlelogo.png' />
        </div>
        <div>
          <img className='policeImg' src='./src/assets/police.png' height={'100px'} />
        </div>
        
      </div>
      <div className='middleContent'>
        {notes.map((noteItem, index) => {
          return (
            <Display key={index} id={index} question={noteItem.question} answer={noteItem.answer} />
          );
        })}
      </div>
      <Content onAdd={addNote} />
    </div>
  );
}

export default Ap;//
