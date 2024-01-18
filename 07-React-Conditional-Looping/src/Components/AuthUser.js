import React from "react";

class AuthUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIin: false
        }
    }
    login = (event) => {
        this.setState({
            isLoggedIin: true
        });
    };

    logout = (event) => {
        this.setState({
            isLoggedIin: false
        })
    }
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.isLoggedIin)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card mt-3">
                                <div className="card-body">
                                    {
                                        !this.state.isLoggedIin ?
                                        <button onClick={this.login} className="btn btn-sucess btn-lg m-3 w-20 text-white">Login </button> : 
                                        <button onClick={this.logout} className="btn btn-warning btn-lg text-white m-2">LogOut</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AuthUser;