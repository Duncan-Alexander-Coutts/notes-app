export const sortByDateDescending = notes =>
  notes.sort(
    (a, b) =>
      new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
  );

export const findNoteById = (notes, targetId) =>
  notes.find(note => note.id === targetId);
