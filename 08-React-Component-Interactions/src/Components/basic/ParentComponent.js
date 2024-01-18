import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello I am From Parent",
            wishMessage: ''
        }
    }
    //Function to recievee data From Child
    receiveData = (data) => {
        this.setState({
            ...this.state,
            wishMessage: data
        })
    };
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <p className="h3">Parent Component</p>
                                    <p>From Child : {this.state.wishMessage}</p>
                                    <ChildComponent message={this.state.message} sendData={this.receiveData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ParentComponent;