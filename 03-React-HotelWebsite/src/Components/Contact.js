import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                             <div className="card">
                                <div className="card-body">
                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.169995130234!2d78.448753!3d17.409748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1e907c04ec7%3A0x175dc086cd3b3df1!2sTaj%20Banjara%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1705394432664!5m2!1sen!2sin" 
                                width="620" height="450"  allowfullscreen=""/>
                                </div>
                             </div>
                        </div> 
                        <div className="col-md-6">
                            <div className="card mt-2">
                                <div className="card-header bg-dark text-white">
                                    <p className="h4">Contact Us</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        
                                        <div className="form-group mt-1">
                                            <input type="email" className="form-control" placeholder="email"/>
                                        </div>
                                        <div className="form-group mt-1">
                                            <textarea rows="4" className="form-control"/>
                                        </div>
                                        <div className="mt-3">
                                            <input type="Submit" className="btn btn-dark btn-sm" value="Contact"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Contact;