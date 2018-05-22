import React, { Component } from "react";
import "./App.css";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNote } from "./actions/notes-actions";
import NotesListContainer from "./containers/NotesListContainer";
import NoteEditorContainer from "./containers/NoteEditorContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bootstrapper from "./containers/Bootstrapper";

class App extends Component {
  addNote = () => {
    this.props.dispatch(addNote());
  };

  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="app">
          <Bootstrapper />
          <div className="notes-list">
            <div className="button-container">
              <Button
                icon
                color="blue"
                labelPosition="left"
                onClick={this.addNote}
              >
                <Icon name="add" />
                New Note
              </Button>
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
