import React, { Component } from 'react'

export class Resume extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

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
            values: { name, email, phone, facebook, linkedin, github }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">RESUME</h1>
                <ul class="list-group">
                    <li class="list-group-item">Name:M.Mohana Vamsi</li>
                    <li class="list-group-item">Email:mmvamsi710@gmail.com</li>
                    <li class="list-group-item">Phone Number:7901023098</li>
                    <li class="list-group-item">Facebook URL: <a href="www.facebook.com">Facebook</a></li>
                    <li class="list-group-item">linkedin URL: <a href="www.linkedin.com">linkedin</a></li>
                    <li class="list-group-item">Github URL: <a href="https://github.com/mohanavamsi710/react_mm">Github</a></li>
                </ul>
                <br /><br />
                <div className="row">
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Educational Details</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Resume
