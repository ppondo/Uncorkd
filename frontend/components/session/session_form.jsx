import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',  
            email: '',
            password: '',
            birthday: 'null',
            month: '',
            day: '',
            year: '',
            first_name: '',
            last_name: '',
            gender: '',
            country: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ 
            birthday: `${this.state.month}/${this.state.day}/${this.state.year}`
        })
        const user = Object.assign({}, this.state)
        this.props.action(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const demo = Object.assign({},{ username: 'demo_user', password: 'demodemo' })
        this.props.action(demo);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors) {
            return(
                <ul className='errors'>
                    {this.props.errors.map((error, key) => {
                        return <li key={key} className="errors-li">{error}</li>;
                    })}
                </ul>
            );
        } 
        
    }

    renderSignUpErrors() {
        if (this.props.errors) {
            return (
                <ul className='sign-up-err'>
                    {this.props.errors.map((error, key) => {
                        return <li key={key} className="errors-li">{error}</li>;
                    })}
                </ul>
            );
        }

    }

    render() {
        let possibleYears = [];
        for (let year = 1900; year <= 2010; year++) {
            possibleYears.push(<option key={year} value={year}>{year}</option>);          
        }

        let message;
        let display;
        let emailInput;
        let demo;
        let pass2;
        let gender;
        let month;
        let day;
        let country;
        let firstName;
        let lastName;
        let year;
        let location;
        if (this.props.formType === 'Create Account') {
            display = <div className='signup-text'>Already signed up? <Link className='signup-link' to="/login">Sign In!</Link>
            </div>
            emailInput = <div className='session-input'>
                    <i className="fas fa-envelope"></i>
                    <input
                        type="text"
                        placeholder='E-Mail'
                        value={this.state.email}
                        onChange={this.handleInput('email')} />
                    </div>
            pass2 = <div className='session-input'>
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            placeholder='Repeat Password'/>
                    </div>
            firstName = <div className='user-input'>
                        <input 
                            type="text"
                            placeholder='First Name'
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')} />
                        </div>
            location = <div className='user-input'>
                        <input
                            type="text"
                            placeholder='Location(optional)'/>
                    </div>
           lastName = <div className='user-input'>
                        <input
                            type="text"
                            placeholder='Last Name'
                            value={this.state.last_name}
                            onChange={this.handleInput('last_name')} />
                        </div>
            gender = <div className='select-input'>
                        <span className= 'select-span'>
                            <select className='user-select-input' value={this.state.gender} onChange={this.handleInput('gender')}>
                                <option defaultValue="">Selet Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="null">Prefer Not to Say</option>
                            </select>
                        </span>
                    </div>
            month = <div className='birthday-input'>
                <span className='select-span'>
                    <select className='user-select-input' value={this.state.month} onChange={this.handleInput('month')}>
                                <option defaultValue="">MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">03</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </span>
                    </div>
            day = <div className='birthday-input'>
                <span className='select-span'>
                    <select className='user-select-input' value={this.state.day} onChange={this.handleInput('day')}>
                        <option defaultValue="">DD</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </span>
            </div>
            year = <div className='birthday-input'>
                <span className='select-span'>
                    <select className='def' className='user-select-input' value={this.state.year} onChange={this.handleInput('year')}>
                        <option defaultValue="">YYYY</option>
                        {possibleYears.reverse()}
                    </select>
                </span>
            </div>
            country = <div className='select-input'>
                <span className='select-span'>
                    <select className='user-select-input' value={this.state.country} onChange={this.handleInput('country')}>
                        <option defaultValue="">Select Your Country</option>
                        <option value="USA">USA</option>
                    </select>
                </span>
            </div>
            message = <strong className='session-require'>All fields below are required unless specified.</strong>
        } else {
            display = <div className='signup-text'>New around here? <Link className='signup-link'to="/signup">Sign Up!</Link>
                      </div>
            demo = <button onClick={this.handleDemo} className='session-demo'>Demo</button>
        }
        const form = (this.props.formType === 'Create Account') ? (
            <div className='signup-background' >
                <div className='signup-form-container'>
                    <h2 className='logo-login'>UNCORKD</h2>
                    <span className='logo-span-login'>DRINK SOCIALLY</span>
                    {this.renderSignUpErrors()}
                    <div className='yellow-message'> This app is my clone of UNTAPPD, a social media platform designed for those who love beer! Enjoy!</div>
                    {message}
                    <form className='signup-form-box'>
                        {demo}
                        <div className='session-info'>
                            <div className='session-input'>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={this.handleInput('username')} />
                            </div>
                            { emailInput }
                        </div>
                            <div className='pass-message'>Avoid using common words and include a mix of letters and numbers.</div>
                        <div className='session-info' >
                            <div className='session-input'>
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handleInput('password')} />
                            </div>
                            {pass2}
                        </div>
                        <div className='filler-div'></div>
                        <div className='user-info'>
                            <div className='user-info-2'>
                                {firstName}
                                {lastName}
                            </div>
                            <div className='user-info-2'>
                                {location}
                                {gender}
                            </div>
                            <div className='user-info-2'>
                                {country}
                                <div className='birthday'>
                                    <span>Birthday:</span>
                                    {month}
                                    {day}
                                    {year}
                                </div>
                            </div>
                        </div>
                        <div className='submit-container'>
                        <br/>
                        <div className='age-warning'>You must be of legal drinking age in your country to join Uncorkd. By clicking Create Account, you agree to our Terms of Use and our Privacy Policy</div>
                        <button className='session-button' onClick={this.handleSubmit}>{this.props.formType}</button>
                        <br />
                        </div>
                    </form>
                </div>
            </div>
        ) : (
            <div className='login-background' >
                <div className='login-form-container'>
                    <h2 className='logo-login'>UNCORKD</h2>
                    <span className='logo-span-login'>DRINK SOCIALLY</span>
                    {this.renderErrors()}
                    <form className='login-form-box'>
                        {demo}
                        <p className='or'>OR</p>
                        <div className='login-form'>
                            <div className='session-input-2'>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={this.handleInput('username')} />
                            </div>
                            <div className='session-input-2'>
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handleInput('password')} />
                            </div>
                            <button className='session-button' onClick={this.handleSubmit}>{this.props.formType}</button>
                        </div>
                    </form>
                    <br />
                    {display}
                </div>
            </div>
        )

        return form;
    }

}

export default SessionForm;
   
