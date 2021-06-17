import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            users: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/users/")
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map((user) => user.username),
                        username: response.data[0].username,
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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
        };

        console.log(exercise);

        axios
            .post("http://localhost:5000/exercises/add", exercise)
            .then((res) => console.log(res.data));

        window.location = "#/";
    }

    render() {
        return ( <
            div >
            <
            h3 > Input Data Arisan < /h3> <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label > Nama: < /label> <
            select ref = "userInput"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername } > {
                this.state.users.map(function(user) {
                    return ( <
                        option key = { user }
                        value = { user } > { user } <
                        /option>
                    );
                })
            } <
            /select> < /
            div > <
            div className = "form-group" >
            <
            label > Jumlah Bayar: < /label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.description }
            onChange = { this.onChangeDescription }
            /> < /
            div >

            <
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