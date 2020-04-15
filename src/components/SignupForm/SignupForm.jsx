import React, { Component } from 'react'
import userService from '../../utils/userService'
import { TextField, Button } from '@material-ui/core';
import './SignupForm.css'

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    } 

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = async(event) => {
        event.preventDefault();
        try {
        console.log('button was clicked')
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField type='text' name='name' placeholder='name' onChange={this.handleChange}  id="outlined-basic" label="Name" variant="outlined" />
                <TextField type='email' name='email' placeholder='email' onChange={this.handleChange}  id="outlined-basic" label="email" variant="outlined" />
                <TextField type='password' name='password' placeholder='password' onChange={this.handleChange} id="outlined-basic" label="password" variant="outlined" /> 
                {/* <input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
                <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChange} /> */}
                <Button type='submit' variant="contained" color="secondary">Submit</Button>               
                {/* <input type='submit'></input> */}
            </form>
        )
    }
}

export default SignupForm;