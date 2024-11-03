const noteTitle = document.getElementById('note-title'); 
const noteContent = document.getElementById('note-content');

// Get references to page elements
const passwordModal = document.querySelector('.modal');
const passwordInput = document.querySelector('.modal input');
const unlockBtn = document.querySelector('.modal button');
const notesSection = document.querySelector('.notes');

// Open password modal
function openPasswordModal() {
  passwordModal.style.display = 'flex';
}

// Close password modal
function closePasswordModal() {
  passwordModal.style.display = 'none';
}

// Unlock notes
function unlockNotes(password) {
  // Validate password
  if (password === 'secret') {
    notesSection.style.filter = 'blur(0px)';
  } else {
    alert('Incorrect password');
  }
}

// Check password when modal is opened
openPasswordModal();

// Submit password
unlockBtn.addEventListener('click', () => {
  unlockNotes(passwordInput.value);
  closePasswordModal(); 
});

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
