import React from "react";
import ChildCard from "./ChildCard";

class ParentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pMessage : '',
            cText : ''
        }
    }

    updateInput = (event) => {
        this.setState({
          pMessage : event.target.value
        });
    };

    receivedData = (data) => {
        this.setState({
           ...this.state,
           cText: data
        });
    };


    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h4">Parent Card</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline w-25">
                                        <div className="form-group">
                                            <input 
                                            value={this.state.pMessage}
                                            onChange={this.updateInput}
                                            type="text" className="form-control"/>
                                        </div>
                                    </form>
                                    <p>From Child: {this.state.cText} </p>
                                    <ChildCard pMessage={this.state.pMessage} sendData={this.receivedData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ParentCard;