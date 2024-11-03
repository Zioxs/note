const noteTitle = document.getElementById('note-title'); 
const noteContent = document.getElementById('note-content');

document.querySelector('form button').addEventListener('click', addNote); 

function addNote() {
  // Get title and content
  const title = noteTitle.value;
  const content = noteContent.value;
  
  // Create new note object
  const newNote = {
    title,
    content
  };
  
  // Add note to array of notes
  notes.push(newNote);
  
  // Render new note
  renderNote(newNote);
}
