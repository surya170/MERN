import React from "react";

class EmployeeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {
                    sno: 'AAA100',
                    name: "surya",
                    age: 25,
                    designation: 'Software Engineer',
                    location: 'Hyderabad'
                },
                {
                    sno: 'AAA101',
                    name: "Revanth",
                    age: 18,
                    designation: 'Associate Software Engineer',
                    location: 'Bangalore'
                },
                {
                    sno: 'AAA103',
                    name: "Ravinder",
                    age: 45,
                    designation: 'Project Manager',
                    location: 'Chennai'
                },
                {
                    sno: 'AAA104',
                    name: "Wilson",
                    age: 55,
                    designation: 'Director',
                    location: 'Bangalore'
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.employees.map(employee => {
                                    return (
                                        <div key={employee.sno} className="card m-2">
                                            <div className="card-body bg-light">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        SNO :: {employee.sno}
                                                    </li>
                                                    <li className="list-group-item">
                                                        NAME :: {employee.name}
                                                    </li>
                                                    <li className="list-group-item">
                                                        AGE :: {employee.age}
                                                    </li>
                                                    <li className="list-group-item">
                                                        DESIGNATION :: {employee.designation}
                                                    </li>
                                                    <li className="list-group-item">
                                                        LOCATION :: {employee.location}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default EmployeeCard;