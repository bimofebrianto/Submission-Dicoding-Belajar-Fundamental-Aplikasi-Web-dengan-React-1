import React from "react";
import { CatatanItem } from "./index";
import PropType from "prop-types";

const ArsipCatatan = ({ notes, onArchive, onDelete }) => {
  const ArsipData = notes.filter((note) => note.archived === true);
  return (
    <div className="container">
      <h1 className="title">Catatan Yang Di Arsip</h1>
      <div className="wrapper">{ArsipData.length === 0 ? <h5>Tidak ada catatan yang di arsipkan</h5> : ArsipData.map((note) => <CatatanItem key={note.id} {...note} onDelete={onDelete} onArsip={onArchive} label={"pindahkan"} />)}</div>
    </div>
  );
};

ArsipCatatan.protoType = {
  notes: PropType.arrayOf(PropType.object).isRequired,
  onArchive: PropType.func.isRequired,
  onDelete: PropType.func.isRequired,
};
export default ArsipCatatan;
