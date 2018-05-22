export const sortByDateDescending = notes =>
  notes.sort(
    (a, b) =>
      new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
  );
