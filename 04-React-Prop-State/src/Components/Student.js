import React from "react";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Vijay",
            age: 23,
            course: 'MBBS',
            college: 'OU',
            address: 'Hyd',
            image: 'https://wallpapercave.com/wp/wp6285136.jpg',
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="contianer mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Student Details </p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                          <img src={this.state.image} width="250px" alt="" className="img-fluid  img-thumbnail"/>
                                        </div>
                                        <div className="col-md-8">
                                           <ul className="list-group ">
                                              <li className="list-group-item">
                                                   NAME : <span className="font-weight-bold">{this.state.name}</span>
                                              </li>
                                              <li className="list-group-item">
                                                   AGE : {this.state.age} yrs
                                              </li><li className="list-group-item">
                                                   COLLEGE : {this.state.college}
                                              </li><li className="list-group-item">
                                                   ADDRESS : {this.state.address}
                                              </li>
                                           </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Student;