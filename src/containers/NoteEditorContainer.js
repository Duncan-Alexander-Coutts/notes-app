import React from "react";
import { connect } from "react-redux";
import { updateNoteText } from "../actions/notes-actions";
import NoteEditor from "../components/NoteEditor";
import { withRouter } from "react-router";

const NoteEditorContainer = props => {
  function getSelectedNote() {
    return props.notes.items.find(
      note => note.id === parseInt(props.match.params.id, 10)
    );
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
