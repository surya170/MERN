import React from "react";

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          wishMessage : `Hello I am From Child Component`
        };
    }
    clickButton = (data) => {
       this.props.sendData(this.state.wishMessage)
    };
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <div className="h3">Child Component</div>
                                    <span>{this.props.message} </span>
                                    <p>From Child : {this.state.wishMessage}</p>
                                    <button onClick={this.clickButton} className="btn btn-secondary btn-m">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChildComponent;