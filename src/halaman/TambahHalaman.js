import React from "react";
import { useNavigate } from "react-router-dom";
import { TambahCatatan, Header } from "../components/components-catatan";
import { Jarak } from "../components/components-button";
import PropType from "prop-types";

const TambahHalamanCatatan = ({ addNote }) => {
  const Navigasi = () => {
    const navigate = useNavigate();
    navigate("/");
  };

  return (
    <>
      <Header />
      <Jarak height={50} />
      <div className="container-add">
        <TambahCatatan addNote={addNote} onNavigate={Navigasi} />
      </div>
    </>
  );
};
TambahHalamanCatatan.protoType = {
  addNote: PropType.func.isRequired,
};
export default TambahHalamanCatatan;
