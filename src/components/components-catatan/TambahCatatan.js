import React from "react";
import Swal from "sweetalert2";
import { Button, InputCatatan } from "../components-button";
import PropType from "prop-types";

class TambahCatatan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      count: 20,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        count: 20 - event.target.value.length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        body: "",
        title: "",
        count: 20,
      };
    });
    Swal.fire("Catatan Telah Di Tambah", "", "success");
  }

  render() {
    return (
      <form className="addNote" onSubmit={this.onSubmitEventHandler}>
        <p>Buat Catatan baru</p>
        <span className="sisa-karakter">Karakter tersedia: {this.state.count}</span>
        <InputCatatan width={"maxContent"} padding={"15px"} maxLength={70} placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
        <div data-placeholder="... adalah" contentEditable cols="55" rows="15" onInput={this.onBodyChangeEventHandler} required style={{ height: "40vh", border: "3px solid #f50000", margin: "25px 0px 25px 0px", color: "#f5f2f2" }}></div>
        <Button
          label={"Tambah Catatan"}
          type={"submit"}
          style={{
            padding: "20px",
            border: "2px solid #f50000",
            backgroundColor: "#f50000",
            color: "#faf8f7",
            cursor: "pointer",
          }}
        />
      </form>
    );
  }
}
TambahCatatan.protoType = {
  addNote: PropType.func.isRequired,
};
export default TambahCatatan;
