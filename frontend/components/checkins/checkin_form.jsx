import React from 'react';

class CheckinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.checkin
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImgFile = this.handleImgFile.bind(this);
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
            this.setState({imgUrl: reader.result, imgFile: file});
        debugger
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imgUrl: '', imgFile: null })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { 
            body, 
            rating, 
            location, 
            user_id, 
            beverage_id, 
            imgFile, 
            imgUrl 
        } = this.state;

        const formData = new FormData();

        formData.append('checkin[body]', body);
        formData.append('checkin[rating]', rating);
        formData.append('checkin[location]', location);
        formData.append('checkin[user_id]', user_id);
        formData.append('checkin[beverage_id]', beverage_id);

        if (imgFile) {
            formData.append('checkin[img]', imgFile);
        }
        debugger
        this.props.action(formData).then(() => this.props.history.push('/home'))
    }


    render() {
        return (
            <div className='checkin-container'>
                <div className='checkin-box'>
                    <form className='checkin-form' onSubmit={this.handleSubmit}>
                    <div className='checkin-form-title'>
                        <p>Check-In</p>
                    </div>
                        <div className='row1'>
                            <textarea 
                                className='checkin-body' 
                                placeholder="What did you think?"
                                onChange={this.update('body')}>
                            </textarea>
                            <label className='file-upload-button' htmlFor="file-button">
                                <i className="fas fa-camera"></i>
                                <input 
                                    id='file-button'
                                    type="file"
                                    onChange={this.handleImgFile}/>
                            </label>
                        </div>
                        <div className='row2'>
                            <div className='slide-container'>
                                <input 
                                    className='slider' 
                                    type="range" 
                                    min="0" 
                                    max="5" 
                                    step="0.25" 
                                    onChange={this.update('rating')}
                                    defaultValue="0"/>
                            </div>
                            <div className='rating-display'>
                                <div className='rating-display-num'>{this.state.rating}</div>
                                <div className='rating-display-stars'>STARS</div>
                            </div>
                            <div className='space-maker'></div>
                        </div>
                        <div className='row3'>
                            <div className='checkin-location-box'>
                                <i className="fas fa-map-marker-alt"></i>
                                <input 
                                    type="text"
                                    className='checkin-location'
                                    placeholder='Add your location'
                                    onChange={this.update('location')}/>
                            </div>
                            <input className='checkin-button' type="submit" value='Confirm'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CheckinForm;