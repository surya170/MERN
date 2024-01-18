import React from "react";

class WelcomeMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Surya'
        }
    }
    updateInput = (event) => {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">React Two Way Binding</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                value={this.state.username}
                                                onChange={this.updateInput}
                                                type="text" placeholder="username"
                                            />
                                        </div>
                                    </form>
                                    <h3>{this.state.username}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default WelcomeMessage;