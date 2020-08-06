import React, { Component } from 'react'

export class Profile extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, email, phone, password, facebook, twitter, github }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Interests And Hobbies</h1>
                <h3>Interests</h3>
              <p>
                I am interested in knowing about new technologies that are available especially in mobile phone,their chipsets and editing videos/photos.
              </p>
              <h3>Hobbies</h3>
              <p>
                I like travelling to different places,playing carroms,playing chess.
                </p>
                <h3>Declaration: </h3>
                <p>
                  I do hereby declare that above particulars of information and facts stated are true, correct and complete to the best of my knowledge and belief.
                </p>
                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Profile
