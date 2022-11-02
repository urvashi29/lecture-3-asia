import React, { Component } from "react";
import './AddData.css';
import styles from './AddData.module.css';

export default class AddData extends Component {
    state = {
        firstname: '',
        age: '',
        contact: '',
        email: '',
        error: {
            nameError: '',
            ageError: '',
            contactError: '',
            emailError: ''
        },
        formValid: false
    }

    //event object 
    handleChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        console.log(typeof (e.target.value));
        console.log(e.target.id);

        if (e.target.id === 'firstname') {
            //this is referring to AddData
            this.validateName(e.target.value);
        }

        if (e.target.id === 'age') {
            this.validateAge(e.target.value);
        }

        if (e.target.id === 'contact') {
            this.validateContact(e.target.value);
        }
        if (e.target.id === 'email') {
            this.validateEmail(e.target.value);
        }

        // this.setState({
        //     [e.target.id]: e.target.value
        // });
    }

    validateName = (name) => {
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;

        if (name.trim() === '') {
            nameError = 'This field is required';
            formValid = false;
        }
        else if(name.trim().length <= 3) {
            nameError = 'Please enter more than 3 characters';
            formValid = false;
        }
        else {
            formValid = true;
            nameError = '';
        }

        //property shorthand & spread operator
        this.setState({
            firstname: name,
            formValid,
            error: {...this.state.error, nameError}
        });

        return formValid;
    }

    validateAge = (age) => {
        let ageError = this.state.error.ageError;
        let formValid = this.state.formValid;

        if(age.trim() === '') {
            ageError = 'Please enter age';
            formValid = false;
        }
        else if(age.trim().length >= 3) {
            ageError = 'Please is invalid';
            formValid = false;
        }
        else {
            formValid = true;
            ageError = ''
        }

        this.setState({
            age,
            formValid,
            error :  {...this.state.error, ageError}            
        });
        return formValid;
    }

    validateContact = (contact) => {
        let contactError = this.state.error.contactError;
        let formValid = this.state.formValid;

        if(contact.trim() === '' ) {
            contactError = 'This field is required';
            formValid = false;
        }
        else if(contact.trim().length != 10 ) {
            contactError = 'This field is invalid';
            formValid = false;
        }
        else {
            formValid  = true;
            contactError = '';
        }

        this.setState({
            error: {...this.state.error, contactError},
            contact, formValid
        });
        return formValid;
    }

    validateEmail = (email) => {

        let formValid = this.state.formValid;
        let emailError = this.state.formValid;

        //regex (regular expression), patterns
        var pattern  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!pattern.test(email)) {
            formValid = false;
            emailError = 'Please enter valid email';
        }
        else {
            formValid = true;
            emailError = '';
        }

        this.setState({
            email,
            formValid, 
            error: {...this.state.error, emailError}
        });

        return formValid;

    }

    handleSubmit = (e) => {
        e.preventDefault();//not refresh the page

        if(this.validateName(this.state.firstname) && this.validateAge(this.state.age) && this.validateEmail(this.state.email) && this.validateContact(this.state.contact)) {
            alert('Form is submitted');
            this.props.addData(this.state);
            this.setState({
                firstname: '',
                age: '',
                contact: '',
                email:''
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="name" onChange={this.handleChange}  value={this.state.firstname} id="firstname" placeholder="Please enter name" />
                <p style={{color: "red", fontSize: '20px'}}>{this.state.error.nameError}</p>
                <label>Age</label>
                <input type="text" name="age" onChange={this.handleChange} id="age" value={this.state.age} placeholder="Please enter age" />
                <p className={styles.errorMessage}>{this.state.error.ageError}</p>
                <label>Contact</label>
                <input type="text" name="contact" onChange={this.handleChange} id="contact" value={this.state.contact}  placeholder="Please enter contact" />
                <p id="message">{this.state.error.contactError}</p>
                <label>Email</label>
                <input type="text" name="email" onChange={this.handleChange} id="email" value={this.state.email}  placeholder="Please enter email" />
                <p>{this.state.error.emailError}</p>
                <button>Submit</button>
            </form>
        )
    }
}


{/* <p style="color: red, font-size: 20px"></p>
<p class=""></p> */}

//create html form
//handling input on onChange
//added the validation
//onSubmit, handling the validation



// html 5
// form elements
// input types
// semantic(header, footer, section, aside) & non-semantic elements(div, span)


// js
//dom methods
//string function (trim, toUppercase, toLowercase, substr, replace, search, includes)

//es6
//destrcuturing of object
// property shorthand
//spread operator (arrys & objects)
 
// var val = {
//     name: 'alina', 
//     age: 20
// }

// const obj = {...val, name: 'alex'}
// obj = {
//     name: 'alex',
//     age: 20
// }
