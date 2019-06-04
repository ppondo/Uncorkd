import React from 'react';

class CheckinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.checkin
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        };
    }

    handleImgFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0]
        reader.onloadend = () =>
            this.setState({img: reader.result, imageFile: file});
        
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imgUrl: '', imgFile: null })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { body, rating, location, user_id, beverage_id, img } = this.state;
        const formData = new FormData();

        formData.append('checkin[body]', body);
        formData.append('checkin[rating]', rating);
        formData.append('checkin[location]', location);
        formData.append('checkin[user_id]', user_id);
        formData.append('checkin[beverage_id]', beverage_id);

        if (img) {
            formData.append('checkin[img]', img);
        }

        this.props.action(formData).then(() => this.props.history.push('/home'))
    }


    render() {
        return (
            <div className='checkin-container'>
                <div className='checkin-box'>
                    <div className='checkin-form-title'>Check-in</div>
                    <form className='checkin-form' onSubmit={this.handleSubmit}>
                        <div className='row1'>
                            <textarea 
                                className='checkin-body' 
                                cols="30" 
                                rows="10" 
                                placeholder='What did you think?'
                                onChange={this.update('body')}>
                                <span className='character-count'>140</span>
                            </textarea>
                            <input type="file"/>
                        </div>
                        <div className='row2'>
                            {/* rating slider */}
                        </div>
                        <div className='row3'>
                            <input 
                                type="text"
                                className='checkin-location'
                                placeholder='Add your location'
                                onChange={this.update('location')}/>
                            <input className='checkin-button' type="submit" value='Confirm'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CheckinForm;