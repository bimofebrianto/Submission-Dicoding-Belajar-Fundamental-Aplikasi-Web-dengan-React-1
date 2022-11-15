import React from "react";
import { useParams } from "react-router-dom";
import { Header, DetailCatatan } from "../components/components-catatan";
import PropTypes from "prop-types";

function HalamanCatatan({ notes, onArchive, archive, onDelete }) {
  const { id } = useParams();
  const filteredNotes = notes.filter((catatan) => catatan.id === Number(id));
  if (notes === null) {
    return <p>Catatan tidak ditemukan</p>;
  }
  return (
    <div style={{ justifyContent: "center", display: "flex", height: "50vh" }}>
      <Header />
      <DetailCatatan note={filteredNotes[0]} onDelete={onDelete} onArchive={onArchive} archive={archive} />
    </div>
  );
}

HalamanCatatan.protoTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
  archive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default HalamanCatatan;
