import React from "react";

class SMSApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxCount : 100,
            charCount : 100
        }
    }
    //updateChars
    updateChars = (event) => {
        this.setState({
            charCount : (this.state.maxCount - event.target.value.length)
        });
    };
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-warning text-white">
                                    <p className="h4">SMS App</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <textarea 
                                            maxLength={this.state.maxCount}
                                            onChange={this.updateChars}
                                            className="form-control" rows="4" placeholder="Type Something dude" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <p className="h5">The Characters Remaining :
                                        <span className="font-weight-bold">{this.state.charCount}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SMSApp;