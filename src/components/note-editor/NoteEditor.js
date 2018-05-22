import React from "react";
import "./NoteEditor.css";
import { Label, Form, TextArea } from "semantic-ui-react";
import {
  formatToDateString,
  formatToTimeString
} from "../../helper/date-helper";

export default class NoteEditor extends React.Component {
  setTextAreaRef = textArea => {
    this.noteInput = textArea;
  };

  componentDidUpdate() {
    if (this.noteInput) {
      this.noteInput.focus();
    }
  }

  updateText = (event, textArea) => {
    this.props.onNoteUpdated(this.props.note.id, textArea.value);
  };

  getDateTimeText() {
    const lastEditedDate = new Date(this.props.note.lastEdited);
    const dateText = formatToDateString(lastEditedDate);
    const timeText = formatToTimeString(lastEditedDate);

    return `Last edited: ${dateText} at ${timeText}`;
  }

  renderInput() {
    return (
      <div className="selected-note-content">
        <header>
          <Label>{this.getDateTimeText()}</Label>
        </header>
        <Form>
          <TextArea
            ref={this.setTextAreaRef}
            autoFocus
            className="note-content"
            placeholder="Enter note..."
            onChange={this.updateText}
            value={this.props.note.text}
          />
        </Form>
      </div>
    );
  }

  render() {
    return (
      <div className="selected-note">
        {this.props.note ? this.renderInput() : null}
      </div>
    );
  }
}
