import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TambahHalaman, HalamanArsipCatatan, HalamanUtama, HalamanCatatan } from "./halaman";
import { getInitialData } from "./utils/local-data";
import "./styles/style.css";
import Swal from "sweetalert2";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      query: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onIsArchiveHandler = this.onIsArchiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHendler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    Swal.fire("Catatan Dihapus!", "", "success");
  }

  onIsArchiveHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const arsips = this.state.notes.find((arsip) => arsip.id === id);
    this.setState({ notes });
    this.isArchive({ arsips });
  }

  onArchiveHendler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const arsips = this.state.notes.find((arsip) => arsip.id === id);
    this.setState({ notes });
    this.archive({ arsips });
  }

  isArchive({ arsips }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            ...arsips,
            archived: true,
          },
        ],
      };
    });
  }

  archive({ arsips }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            ...arsips,
            archived: false,
          },
        ],
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            createdAt: +new Date(),
            title,
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        query: event.target.value,
      };
    });
  }

  onSearchEventHandler(data) {
    return data.filter((note) => note.title.toLowerCase().includes(this.state.query));
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<HalamanUtama onChangeInput={this.onSearchHandler} onNotes={this.onSearchEventHandler(this.state.notes)} />} path="/" />
          <Route element={<TambahHalaman addNote={this.onAddNoteHandler} />} path="/notes/new" />
          <Route element={<HalamanCatatan notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onIsArchiveHandler} archive={this.onArchiveHendler} />} path={"/notes/:id"} />
          <Route element={<HalamanArsipCatatan onArchive={this.state.notes} onChangeInput={this.onSearchHandler} onNotes={this.onSearchEventHandler(this.state.notes)} />} path={"/archives"} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Nav;
