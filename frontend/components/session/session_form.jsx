import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',  
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.action(user);
    }

    renderErrors() {
        let errs = this.props.errors.map((error, index) => {
            
            return (
                <li key={`error-${index}`}>
                    {error}
                </li>
            )   
        });

        return(
            <ul>
                {errs}
            </ul>
        );
    }

    render() {
        let message;
        let display;
        let emailInput;
        if (this.props.formType === 'Create Account') {
            display = <Link to="/login">Log In</Link>;
            emailInput = <label>Email:
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput('email')} />
                    </label>
            message = <span>All fields below are required unless specified.</span>
        } else {
            display = <div className='signup-link'>New around here? <Link to="/signup">Sign Up!</Link>
                      </div>
        }
        return (
            <div>
                <h2 className='logo'>UNCORKD</h2>
                <span className='logo-span'>DRINK SOCIALLY</span>
                <div className='login-form-box'>
                    {message}
                    <form className='login-form-box'>
                        {this.renderErrors()}
                        <div className='login-form'>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')} />
                            </label>
                            { emailInput }
                            <label>
                                Password:
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')} />
                            </label>
                            <button className ='session-button' onClick={this.handleSubmit}>{this.props.formType}</button>
                        </div>
                    </form>
                    <br/>
                    {display}
                </div>
            </div>
        );
    }

}

export default SessionForm;
   
