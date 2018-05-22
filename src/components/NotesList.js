import React from "react";
import { List } from "semantic-ui-react";
import NoteListItem from "./NoteListItem";

export default function NotesList(props) {
  return (
    <List selection animated size="huge" divided relaxed>
      {props.notes
        .sort(
          (a, b) =>
            new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
        )
        .map(note => {
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
