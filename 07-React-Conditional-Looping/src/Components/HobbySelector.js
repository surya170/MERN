import React from "react";

class HobbySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            eating: false,
            coding: false,
            sleeping: false,
        }
    }

    updateCheck = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="contianer mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <dic className="card m-4">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Hobby Selector</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <form>
                                                <div class="form-check">
                                                    <input name="eating" onChange={this.updateCheck} class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label class="form-check-label" for="defaultCheck1">
                                                        Eating
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input name="coding" onChange={this.updateCheck} class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label class="form-check-label" for="defaultCheck1">
                                                        Coding
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input name="sleeping" onChange={this.updateCheck} class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label class="form-check-label" for="defaultCheck1">
                                                        Sleeping
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-9">
                                            {
                                                this.state.eating ?
                                                    <React.Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-success text-white">
                                                                <p className="h3">Eating</p>
                                                            </div>
                                                        </div>
                                                    </React.Fragment> : null
                                            }
                                            {
                                                this.state.coding ?
                                                    <React.Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-primary text-white">
                                                                <p className="h3">Coding</p>
                                                            </div>
                                                        </div>
                                                    </React.Fragment> : null
                                            }
                                            {
                                                this.state.sleeping ?
                                                    <React.Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-danger text-white">
                                                                <p className="h3">Sleeping</p>
                                                            </div>
                                                        </div>
                                                    </React.Fragment> : null
                                            }


                                        </div>
                                    </div>
                                </div>
                            </dic>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HobbySelector;