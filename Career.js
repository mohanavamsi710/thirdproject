import React, { Component } from 'react'
export class Career extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
            <h3>Career objective</h3>
             <p>
                  To secure a challenging position in a reputsble organisation and to achieve goals of the organisation by improving my knowledge and tries hard for the upliftment of the orgainsation by using my technical skills such as programming skills and focuses on the customer satisfaction as well as the benefits for the organisation.
          </p>

                  <h3>Educational qualifications</h3>
            <div class="table">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No</th> 
                    <th>Course</th>
                    <th>Institute</th>
                    <th >Y-O-P</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Btech</td>
                    <td>Usharama college</td>
                    <td>2021</td>
               </tr>
               <tr>
                    <td>2</td>
                    <td>MPC</td>
                    <td>Narayana college</td>
                    <td>2017</td>
               </tr>
               <tr>
                    <td>3</td>
                    <td>SSC</td>
                    <td>The Brilliants E.M school</td>
                    <td>2021</td>
              </tr>
            </tbody>
            </table>
          </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>View Hobbies</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Career
