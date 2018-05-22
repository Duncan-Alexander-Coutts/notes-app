import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/notes-actions";
import { withRouter } from "react-router";
import { Redirect } from "react-router";

class Bootstrapper extends React.Component {
  componentDidMount() {
    if (this.props.notes.items.length === 0) {
      this.props.addNote();
    }
  }

  getLastestNoteId() {
    const sortedNotes = this.props.notes.items.sort(
      (a, b) =>
        new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
    );
    return sortedNotes[0].id;
  }

  render() {
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
