import React from "react";
import CatatanItem from "./CatatanItem";
import PropType from "prop-types";

const ListCatatan = ({ notes }) => {
  const dataArchived = notes.filter((note) => note.archived === false);

  return (
    <div className="container">
      <h1 className="title"> Catatan Yang Sudah Di Buat </h1>
      <div className="wrapper">{dataArchived.length === 0 ? <h3>Tidak ada catatan</h3> : dataArchived.map((note) => (note.archived === false ? <CatatanItem key={note.id} {...note} id={note.id} label={"Arsipkan"} /> : null))}</div>
    </div>
  );
};

ListCatatan.prototype = {
  notes: PropType.arrayOf(PropType.object).isRequired,
};
export default ListCatatan;
