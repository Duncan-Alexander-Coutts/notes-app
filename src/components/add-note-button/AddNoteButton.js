import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function AddNoteButton(props) {
  function addNote() {
    props.onButtonClicked();
    props.history.push("/");
  }

  return (
    <Button icon color="blue" labelPosition="left" onClick={addNote}>
      <Icon name="add" />
      New Note
    </Button>
  );
}

export default withRouter(AddNoteButton);
