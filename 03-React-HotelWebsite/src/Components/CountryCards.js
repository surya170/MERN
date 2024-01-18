import React from "react";
import card1 from "../assets/card-1.jpeg";
import card2 from "../assets/card-2.jpeg";
import card3 from "../assets/card-1.jpeg";
import card4 from "../assets/card-2.jpeg";

import Card from "./Card";

class CountryCards extends React.Component {
    render() {
        let countries = ['Paris', 'Bangko', "Indonesia", "Malaysia"];
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <Card cardImg={card1} countryName={countries[0]} />
                        </div>
                        <div className="col-md-3">
                            <Card cardImg={card2} countryName={countries[1]} />
                        </div>
                        <div className="col-md-3">
                            <Card cardImg={card3} countryName={countries[2]} />
                        </div>
                        <div className="col-md-3">
                            <Card cardImg={card4} countryName={countries[3]} />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default CountryCards;