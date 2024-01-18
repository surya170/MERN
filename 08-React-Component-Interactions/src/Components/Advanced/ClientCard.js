import React from "react";

class ClientCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           message : ''
        }
    }
    submitClient = (event) => {
       event.preventDefault();
       this.props.sendData(this.state.message); // Send Data To App Component
    };
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-success text-white">
                        <p className="h4">Client Card</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitClient}>
                            <div type="text" className="form-group">
                                <input
                                value={this.state.message}
                                onChange={e => this.setState({ message : e.target.value})}
                                type="text" className="form-control" />
                            </div>
                            <div className="mt-1">
                                <input type="submit" className="btn btn-sucess btn-m" value="SEND" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        From Server Message: {this.props.serverMessage}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ClientCard;