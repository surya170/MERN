import React from "react";
import "../App.css";

class MessageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'Good Morning'
        }
    }
    sayGoodEvening = () => {
        this.setState({
            message : `Good Evening`
        })
    };
   sayGoodMorning = (value) => {
     this.setState({
        message : value
     })
   };


    render() {
        return(
            <React.Fragment>
                <div className="contianer m-4">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h2>{this.state.message}</h2>
                                    <button onClick={this.sayGoodEvening} className="btn btn-sucess btn-lg">Good Evening</button>
                                     
                                    <button  onClick={this.sayGoodMorning.bind(this,'Good Morning')} className="btn btn-warning btn-lg">Good Morning</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default MessageCard;