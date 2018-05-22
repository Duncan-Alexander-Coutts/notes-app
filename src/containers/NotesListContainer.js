import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/notes-actions";
import NotesList from "../components/NotesList";
import { withRouter } from "react-router";

function NotesListContainer(props) {
  function getSelectedNoteId() {
    //Get the id from the '/{id}' path
    return parseInt(props.location.pathname.substring(1), 10);
  }

  return (
    <NotesList notes={props.notes.items} selectedNoteId={getSelectedNoteId()} />
  );
}

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotesListContainer)
);
