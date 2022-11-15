import React from "react";
import { ArsipCatatan, Header } from "../components/components-catatan";
import { InputCatatan, Jarak } from "../components/components-button";
import PropType from "prop-types";

const HalamanArsipCatatan = ({ onNotes, onChangeInput, onArchive, onArsip }) => {
  return (
    <div className="container-app">
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Jarak height={75} />
        <h1>Arsipan</h1>
        <InputCatatan width={"80%"} padding={"15px"} placeholder="Cari Arsipan..." onChange={onChangeInput} />
        <ArsipCatatan notes={onNotes} archive={onArchive} onArsip={onArsip} />
      </div>
    </div>
  );
};
HalamanArsipCatatan.protoType = {
  onNotes: PropType.func.isRequired,
  onChangeInput: PropType.func.isRequired,
  onArchive: PropType.func.isRequired,
  onArsip: PropType.func.isRequired,
};
export default HalamanArsipCatatan;
