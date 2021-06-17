import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
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
        };
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
            .post("http://localhost:5000/users/add", user)
            .then((res) => console.log(res.data));

        window.location = "/user";

        this.setState({
            username: "",
            nohp: "",
            alamat: "",
        });
    }

    render() {
        return ( <
            div >
            <
            h3 > Input Data Peserta Arisan < /h3> <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label > Nama: < /label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > No Hp: < /label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.nohp }
            onChange = { this.onChangeNohp }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Alamat: < /label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.alamat }
            onChange = { this.onChangeAlamat }
            /> < /
            div > <
            div className = "form-group" >
            <
            input type = "submit"
            value = "Simpan"
            className = "btn btn-primary" /
            >
            <
            /div> < /
            form > <
            /div>
        );
    }
}