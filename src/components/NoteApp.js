import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { backEndHost } from "../utils";

import "../styles/style.css";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      notes: [],
      filteredNotes: null,
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onToggleArchiveNoteHandler =
      this.onToggleArchiveNoteHandler.bind(this);
    this.onSearchTitleHandler = this.onSearchTitleHandler.bind(this);
  }

  componentDidMount() {
    fetch(backEndHost + "/api/notes")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          notes: json.data,
        });
      });
  }

  onAddNoteHandler(data) {
    fetch(backEndHost + "/api/notes", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        const insertId = json.data.insertId;
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: insertId,
                title: data.title,
                body: data.body,
                archived: 0,
                createdAt: new Date().toISOString(),
              },
            ],
          };
        });
      });
  }

  onDeleteNoteHandler(id) {
    fetch(backEndHost + "/api/notes/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState((prevState) => {
          return {
            notes: prevState.notes.filter((note) => note.id !== id),
          };
        });
      });
  }

  onToggleArchiveNoteHandler(id) {
    // this.setArchiveNote(id, true);
    fetch(backEndHost + "/api/notes/" + id + "/toggle_archived", {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((json) => {
        this.setArchiveNote(id);
      });
  }

  onSearchTitleHandler(keyword) {
    fetch(backEndHost + "/api/notes?keyword=" + keyword)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          notes: json.data,
          keyword,
        });
      });
  }

  setArchiveNote(id) {
    const notes = this.state.notes;
    const noteObject = notes.filter((note) => note.id === id)[0];
    const noteIndex = notes.indexOf(noteObject);

    let isArchived = notes[noteIndex].archived;
    notes[noteIndex].archived = !isArchived;
    this.setState(() => {
      return {
        notes,
      };
    });
  }

  render() {
    return (
      <div>
        <NoteHeader onSearchTitleHandler={this.onSearchTitleHandler} />
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteNoteHandler}
          onToggleArchive={this.onToggleArchiveNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
