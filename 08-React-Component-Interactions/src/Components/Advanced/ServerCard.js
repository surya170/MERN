import React from "react";

class ServerCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serverMessage : ''
        }
    }

    submitServer = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.message);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-warning text-white">
                        <p className="h4">Server Card</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitServer}>
                            <div type="text" className="form-group">
                                <input
                                 value={this.state.serverMessage}
                                 onChange={e => this.setState({message: e.target.value})}
                                type="text" className="form-control" />
                            </div>
                            <div className="mt-1">
                                <input type="submit" className="btn btn-warning btn-m" value="SEND" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        From Client Message: {this.props.clientMessage}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServerCard;