import React from "react";
import { Label, Form, TextArea } from "semantic-ui-react";
import moment from "moment";

export default class NoteEditor extends React.Component {
  setTexAreaRef = input => {
    this.noteInput = input;
  };

  componentDidUpdate() {
    if (this.noteInput) {
      this.noteInput.focus();
    }
  }

  updateText = (event, element) => {
    this.props.onNoteUpdated(this.props.note.id, element.value);
  };

  getDateTimeText() {
    const lastEditedDate = new Date(this.props.note.lastEdited);
    const dateText = moment(lastEditedDate).format("D MMMM YYYY");
    const timeText = moment(lastEditedDate).format("h:mm:ss a");

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
            ref={this.setTexAreaRef}
            autoFocus
            //onBlur={() => alert("dfsf")}
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
        {!this.props.note ? null : this.renderInput()}
      </div>
    );
  }
}
