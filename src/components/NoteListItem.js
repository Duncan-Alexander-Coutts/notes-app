import React from "react";
import { List } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function NoteListItem(props) {
  function getNoteTitle(note) {
    let title = note.text;

    if (title) {
      const firstCarriageReturnPosition = title.indexOf("\n");

      if (firstCarriageReturnPosition > -1) {
        title = title.substring(0, firstCarriageReturnPosition);
      }
    } else {
      title = "Empty";
    }

    return title;
  }

  return (
    <List.Item active={props.selected} as={Link} to={`/${props.note.id}`}>
      <List.Content>
        <List.Header>{getNoteTitle(props.note)}</List.Header>
        <List.Description>
          {moment(new Date(props.note.lastEdited)).format(
            "D MMMM YYYY h:mm:ss a"
          )}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}
