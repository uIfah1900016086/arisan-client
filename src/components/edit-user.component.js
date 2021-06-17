import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNohp = this.onChangeNohp.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      nohp: "",
      alamat: "",
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api-arisan.herokuapp.com/users/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          nohp: response.data.nohp,
          alamat: response.data.alamat,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://api-arisan.herokuapp.com/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeNohp(e) {
    this.setState({
      nohp: e.target.value,
    });
  }

  onChangeAlamat(e) {
    this.setState({
      alamat: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      nohp: this.state.nohp,
      alamat: this.state.alamat,
    };

    console.log(user);

    axios
      .post(
        "https://api-arisan.herokuapp.com/users/update/" + this.props.match.params.id,
        user
      )
      .then((res) => console.log(res.data));

    window.location = "#/user/";
  }

  render() {
    return (
      <div>
        <h3>Ubah Data Peserta Arisan </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nama: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>No HP: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.nohp}
              onChange={this.onChangeNohp}
            />
          </div>
          <div className="form-group">
            <label>Alamat: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.alamat}
              onChange={this.onChangeAlamat}
            />
          </div>
          
          <div className="form-group">
            <input
              type="submit"
              value="Simpan"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
