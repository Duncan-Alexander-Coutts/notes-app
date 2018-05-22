import React from "react";
import { connect } from "react-redux";
import { updateNoteText } from "../actions/notes-actions";
import NoteEditor from "../components/note-editor/NoteEditor";
import { withRouter } from "react-router";
import { findNoteById } from "../helper/notes-helper";

const NoteEditorContainer = props => {
  function getSelectedNote() {
    return findNoteById(props.notes.items, parseInt(props.match.params.id, 10));
  }

  return (
    <NoteEditor onNoteUpdated={props.updateNoteText} note={getSelectedNote()} />
  );
};

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  updateNoteText: (id, text) => dispatch(updateNoteText(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NoteEditorContainer)
);
