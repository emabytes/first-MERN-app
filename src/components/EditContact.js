import React, { Component } from 'react';
// const axios = require('axios');
import axios from 'axios'


class EditContact extends Component {
    state = {}
    componentDidMount() {
        axios.get("http://localhost:3001/edit/" + this.props.match.params.id)
            .then(response => {
                // this.setState({ response:response  });
                this.setState({
                    firstName: response.data[0].firstName,
                    lastName: response.data[0].lastName,
                    phone: response.data[0].phone,
                    email: response.data[0].email,
                    picture_url: response.data[0].picture_url
                });
            })
            .catch(err => console.log(err))
    }
    handleChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }
    handleChangeLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }
    handleChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handleChangePictureUrl = (e) => {
        this.setState({ picture_url: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            picture_url: this.state.picture_url
        }
        console.log(contact)
        axios.post('http://localhost:3001/contact/update/' + this.props.match.params.id, contact)
            .then(res => console.log(res.data))
        window.location = '/'
    }



    render() {
        return (
            <section id="new">
                <form onSubmit={this.handleSubmit}>

                    <input type="text" name="firstName" id="" placeholder="first name" value={this.state.firstName} onChange={this.handleChangeFirstName}></input>

                    <input type="text" name="lastName" id="" placeholder="last name" value={this.state.lastName} onChange={this.handleChangeLastName}></input>

                    <input type="text" name="email" id="" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail}></input>

                    <input type="text" name="phone" id="" placeholder="phone" value={this.state.phone} onChange={this.handleChangePhone}></input>

                    <input type="text" name="picture_url" id="" placeholder="picture URL" value={this.state.picture_url} onChange={this.handleChangePictureUrl}></input>

                    <input type="submit" value="SUBMIT"></input>
                </form>
            </section>
        );
    }
}

export default EditContact;