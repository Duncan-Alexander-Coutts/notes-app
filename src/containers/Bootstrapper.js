import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/notes-actions";
import { withRouter } from "react-router";
import { Redirect } from "react-router";
import { sortByDateDescending } from "../helper/notes-helper";

/**
 * NOTE to reviewer
 * I have this here to bootstrap a couple of things since there no DB
 * and I am working from local storage.
 *
 * It first adds an inital note id there are no note yet.
 *
 * Also, if no note is selected it will re-direct the application
 * to select the most recently edited note
 */
class Bootstrapper extends React.Component {
  componentDidMount() {
    if (this.props.notes.items.length === 0) {
      this.props.addNote();
    }
  }

  getLastestNoteId() {
    const sortedNotes = sortByDateDescending(this.props.notes.items);
    return sortedNotes[0].id;
  }

  render() {
    //If no note is selected via the url, redirect to the
    //latest edited note, otherwise do nothing
    return this.props.location.pathname === "/" ? (
      <Redirect to={`/${this.getLastestNoteId()}`} />
    ) : null;
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Bootstrapper)
);
