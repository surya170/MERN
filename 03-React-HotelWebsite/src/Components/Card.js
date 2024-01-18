import React from "react";
import "../App.css";

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.cardImg} alt="img" className="img-fluid" />
                    <div className="card-body">
                        <p className="h3">{this.props.countryName}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti dolor ex voluptas eius, quo corporis eligendi pariatur aut id animi?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit deserunt
                            impedit architecto distinctio obcaecati ex dicta perspiciatis adipisci veritatis!</p>
                        <button className="btn btn-dark ">Read More</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Card;