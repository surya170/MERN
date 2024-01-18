import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            designation: '',
            terms: false,
        }
    }
    //updateUsername
    updateInput = (event) => {
        if (event.target.type === `checkbox`) {
            this.setState({
                [event.target.name]: event.target.checked
            });
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    };

    registerUser = (event) => {
         event.preventDefault();
         console.log(this.state);
    };

    //updateTerms
    /*
     updateTerms = (event) => {
     alert('checkbox')
     this.setState({
       terms : event.target.checked
     });
    };
    */

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-danger text-white">
                                    <p className="h4">Register Here </p>
                                </div>
                                <div className="card-body bg-light">
                                    <form onSubmit={this.registerUser}>
                                        <div className="form-group m-2">
                                            <input
                                                name="username"
                                                value={this.state.username} // data coming from state 
                                                onChange={this.updateInput} // data going to the state
                                                type="text" className="form-control" placeholder="username" />
                                        </div>
                                        <div className="form-group m-2">
                                            <input
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.updateInput}
                                                type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="form-group m-2">
                                            <input
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.updateInput}
                                                type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="form-group m-2">
                                            <select className="form-control"
                                                name="designation"
                                                value={this.state.designation}
                                                onChange={this.updateInput}
                                            >
                                                <option value=" ">Select Designation</option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                                <option value="Team Lead">Team Lead</option>
                                                <option value="Project Manager">Project Manager</option>
                                                <option value="Director">Director</option>
                                            </select>
                                        </div>
                                        <div className="form-check m-2 mt-2 mb-2">
                                            <input
                                                name="terms"
                                                onChange={this.updateInput}
                                                type="checkbox" className="form-check-input" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Accept Terms & Conditions
                                            </label>
                                        </div>

                                        <div className="form-group m-2">
                                            <input type="submit" className="btn btn-danger btn-lm" value="Register" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Register;