import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

const ContactItem = (props) => {
    return (
        <article>
            <img src={props.contact.picture_url} alt="" />
            <div>
                <h3>{props.contact.firstName}  {props.contact.lastName}</h3>
                <h3>{props.contact.email}</h3>
                <h3>{props.contact.phone}</h3>
            </div>
            <div>
                <Link className="btn" to={"/edit/" + props.contact._id}> Edit </Link>
                <a className="btn" href="#" onClick={() => props.deleteContact(props.contact._id)}>Delete</a>
            </div>
        </article>
    );
}

class ContactsList extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        axios.get("http://localhost:3001")
            .then(response => {
                this.setState({ contacts: response.data });
                this.setState({ isLoading: false });
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="contacts">
                {this.state.isLoading ? 'loading' : this.state.contacts.map(contact => {
                    return <ContactItem contact={contact} key={contact._id} deleteContact={this.deleteContact} />
                })}
            </section>
        );
    }
}

export default ContactsList;