import React from "react";

class HobbySelectorRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby : null
        }
    }

    updateCheck = (event) => {
        this.setState({
            hobby: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
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
                                                    <input onChange={this.updateCheck} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="eating" />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        Eating
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input onChange={this.updateCheck} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="coding" />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        Coding
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input onChange={this.updateCheck} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="sleeping" />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        Sleeping
                                                    </label>
                                                </div>

                                            </form>
                                        </div>
                                        <div className="col-md-9">
                                            {
                                                this.state.hobby === 'eating' ?
                                                    <React.Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-success text-white">
                                                                <p className="h3">Eating</p>
                                                            </div>
                                                        </div>
                                                    </React.Fragment> : null
                                            }
                                            {
                                                     this.state.hobby === 'coding' ?
                                                    <React.Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-primary text-white">
                                                                <p className="h3">Coding</p>
                                                            </div>
                                                        </div>
                                                    </React.Fragment> : null
                                            }
                                            {
                                                this.state.hobby === 'sleeping' ?
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
export default HobbySelectorRadio;