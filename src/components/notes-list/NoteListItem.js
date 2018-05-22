import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  formatToDateString,
  formatToTimeString
} from "../../helper/date-helper";

export default function NoteListItem(props) {
  /**
   * Get the note's first line as a title, or return 'Empty' if the note
   * has no text yet
   */
  function getNoteTitle(note) {
    if (!note.text) return "Empty";

    let title = note.text;
    const firstCarriageReturnPosition = title.indexOf("\n");

    if (firstCarriageReturnPosition > -1) {
      //Get all text before the carriage return, i.e the first line
      title = title.substring(0, firstCarriageReturnPosition);
    }

    return title;
  }

  const getLastEditedString = note => {
    const lastEditedDate = new Date(note.lastEdited);
    return `${formatToDateString(lastEditedDate)} ${formatToTimeString(
      lastEditedDate
    )}`;
  };

  return (
    <List.Item active={props.selected} as={Link} to={`/${props.note.id}`}>
      <List.Content>
        <List.Header>{getNoteTitle(props.note)}</List.Header>
        <List.Description>{getLastEditedString(props.note)}</List.Description>
      </List.Content>
    </List.Item>
  );
}
