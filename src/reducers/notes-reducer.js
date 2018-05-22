import { ADD_NOTE, UPDATE_NOTE_TEXT } from "../actions/notes-actions";

/*
    NOTE to reviewer
    If not familiar with redux, reducer files can look a bit odd.
    The purpose of this reducer is to update the application state in an immutable fashion.
    Since the array of items in the application state are immutable in redux, we must map
    the notes into a new array for each 'action' which updates the application state.
 */

const notesReducer = (state = { items: [], idSequence: 0 }, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const nextId = state.idSequence + 1;

      return {
        ...state,
        idSequence: nextId,
        items: getAddNewNoteState(state.items, action.id)
      };
    case UPDATE_NOTE_TEXT:
      return {
        ...state,
        items: getUpdatedNoteState(state.items, action.id, action.text)
      };
    default:
      return state;
  }
};

/**
 * Maps all existing notes to a new array and updates the target note's properties
 */
const getUpdatedNoteState = (immuatebleItems, id, text) => {
  return immuatebleItems.map(
    note =>
      note.id === id
        ? { ...note, text: text, lastEdited: new Date().toISOString() }
        : note
  );
};

/**
 * Maps all existing notes to a new array and adds an new empty note
 */
const getAddNewNoteState = (immuatebleItems, id) => {
  const items = [...immuatebleItems];

  items.push({
    id: id,
    text: "",
    lastEdited: new Date().toISOString()
  });

  return items;
};

export default notesReducer;
