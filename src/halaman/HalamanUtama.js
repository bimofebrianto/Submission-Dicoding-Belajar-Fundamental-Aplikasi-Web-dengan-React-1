import React from "react";
import { Header, ListCatatan } from "../components/components-catatan";
import { ButtonTambahCatatan, InputCatatan, Jarak } from "../components/components-button";
import PropType from "prop-types";

function HalamanUtamaCatatan({ onNotes, onChangeInput }) {
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
        <h1>Catatan</h1>
        <InputCatatan width={"80%"} padding={"15px"} placeholder="Cari Catatan..." onChange={onChangeInput} />
        <ListCatatan notes={onNotes} />
      </div>
      <ButtonTambahCatatan />
    </div>
  );
}
HalamanUtamaCatatan.protoType = {
  onNotes: PropType.func.isRequired,
  onChangeInput: PropType.func.isRequired,
};
export default HalamanUtamaCatatan;
