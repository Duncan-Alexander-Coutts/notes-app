import React from "react";
import { List } from "semantic-ui-react";
import NoteListItem from "./NoteListItem";
import { sortByDateDescending } from "../helper/notes-helper";

export default function NotesList(props) {
  return (
    <List selection animated size="huge" divided relaxed>
      {sortByDateDescending(props.notes).map(note => {
        return (
          <NoteListItem
            selected={props.selectedNoteId === note.id}
            key={note.id}
            note={note}
          />
        );
      })}
    </List>
  );
}
