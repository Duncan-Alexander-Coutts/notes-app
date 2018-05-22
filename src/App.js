import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addNote } from "./actions/notes-actions";
import NotesListContainer from "./containers/NotesListContainer";
import NoteEditorContainer from "./containers/NoteEditorContainer";
import AddNoteButton from "./components/add-note-button/AddNoteButton";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bootstrapper from "./containers/Bootstrapper";
import { Icon } from "semantic-ui-react";

class App extends Component {
  addNote = () => {
    this.props.dispatch(addNote());
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Bootstrapper />
          <div className="notes-list-container">
            <div className="button-container">
              <Icon size="huge" name="rocket" />
              <AddNoteButton onButtonClicked={this.addNote} />
            </div>
            <NotesListContainer />
          </div>
          <Route path="/:id" component={NoteEditorContainer} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
