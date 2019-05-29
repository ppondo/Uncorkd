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
            display = <div className='signup-text'>Already signed up? <Link className='signup-link' to="/login">Sign In!</Link>
            </div>
            emailInput = <div className='session-input'>
                    <i class="fas fa-envelope"></i>
                    <input
                        type="text"
                        placeholder='E-Mail'
                        value={this.state.email}
                        onChange={this.handleInput('email')} />
                    </div>
            message = <strong className='session-require'>All fields below are required unless specified.</strong>
        } else {
            display = <div className='signup-text'>New around here? <Link className='signup-link'to="/signup">Sign Up!</Link>
                      </div>
        }
        return (
            <div className='login-background' >
                <div className='login-form-container'>
                    <h2 className='logo-login'>UNCORKD</h2>
                    <span className='logo-span-login'>DRINK SOCIALLY</span>
                    <div className='filler'></div>
                    {message}
                    <form className='login-form-box'>
                        {this.renderErrors()}
                        <div className='login-form'>
                            <div className='session-input'>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={this.handleInput('username')} />
                            </div>
                            { emailInput }
                            <div className='session-input'>
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handleInput('password')} />
                            </div>
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
   
