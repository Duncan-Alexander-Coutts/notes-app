export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE_TEXT = "UPDATE_NOTE_TEXT";

export const addNote = () => ({
  type: ADD_NOTE
});

export const updateNoteText = (id, text) => ({
  type: UPDATE_NOTE_TEXT,
  id,
  text
});
