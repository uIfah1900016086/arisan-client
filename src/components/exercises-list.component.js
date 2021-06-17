import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>Rp. {props.exercise.description}</td>
    <td>{props.exercise.createdAt.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>Ubah</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        Hapus
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Rekap Pembayaran Arisan</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nama Pengguna</th>
              <th>Jumlah Bayar</th>
              <th>Tanggal Bayar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
