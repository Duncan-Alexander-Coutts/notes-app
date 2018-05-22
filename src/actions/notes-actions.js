export const addNote = text => ({
  type: "ADD_NOTE"
});

export const updateNoteText = (id, text) => ({
  type: "UPDATE_NOTE_TEXT",
  id,
  text
});
