import React from "react";
import { showFormattedDate } from "../../utils/local-data";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import PropType from "prop-types";

const DetailCatatan = ({ note, onArchive, archive, onDelete }) => {
  const tanggal = showFormattedDate(note.createdAt);

  return (
    <div className="container-notepage">
      <h1>{note.title}</h1>
      <span>{tanggal}</span>
      <p className="body-notepage">{parser(note.body)}</p>
      <div className="container-btn-notepage">
        {note.archived === true ? (
          <Link className="btn-notepage" onClick={() => archive(note.id)} to={"/"}>
            <BiArchiveOut size={50} />
          </Link>
        ) : (
          <Link className="btn-notepage" onClick={() => onArchive(note.id)} to={"/archives"}>
            <BiArchiveIn size={50} />
          </Link>
        )}
        <Link className="btn-notepage" onClick={() => onDelete(note.id)} to="/">
          <AiOutlineDelete size={50} />
        </Link>
      </div>
    </div>
  );
};

DetailCatatan.protoType = {
  note: PropType.object.isRequired,
  onArchive: PropType.func.isRequired,
  archive: PropType.func.isRequired,
  onDelete: PropType.func.isRequired,
};
export default DetailCatatan;
