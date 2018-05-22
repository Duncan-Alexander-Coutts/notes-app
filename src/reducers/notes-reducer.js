const getUpdatedNoteState = (items, id, text) => {
  return items.map(
    note =>
      note.id === id
        ? { ...note, text: text, lastEdited: new Date().toISOString() }
        : note
  );
};

const notes = (state = { items: [], idSequence: 0 }, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const nextId = state.idSequence + 1;
      const newNotesState = state.items.map(note => ({
        ...note
      }));

      newNotesState.push({
        id: nextId,
        text: "",
        lastEdited: new Date().toISOString()
      });

      return { ...state, idSequence: nextId, items: newNotesState };
    case "UPDATE_NOTE_TEXT":
      return {
        ...state,
        items: getUpdatedNoteState(state.items, action.id, action.text)
      };
    default:
      return state;
  }
};

export default notes;
