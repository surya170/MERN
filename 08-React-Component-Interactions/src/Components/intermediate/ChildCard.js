import React from 'react';
import ParentCard from './ParentCard';

class ChildCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           cMessage : ''
        };
    }

    updateInput = (event) => {
       this.setState({
           cMessage : event.target.value,
       });
       this.props.sendData(event.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h4">Child Card</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline w-25">
                                        <div className="form-group">
                                            <input 
                                            value={this.state.cMessage}
                                            onChange={this.updateInput}
                                            type="text" className="form-control"/>
                                        </div>
                                    </form>
                                    <p>From Parent ::{this.props.pMessage}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ChildCard;