import React from "react";
import "../styles.css";

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 'AA101AC',
                image: 'https://www.gonoise.com/cdn/shop/files/Pro-5-Carousel-GN-500x500-Mesh-1.png?v=1704993597',
                name: 'Philips Light',
                qty: 2,
                price: 550
            }
        }
    }

    incrQty = () => {
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty + 1
            }
        });
    };

    decQty = () => {
        this.setState({
            product: {
                ...this.state.product,
                qty: (this.state.product.qty - 1) > 0 ? this.state.product.qty - 1 : 1
            }
        })
    };

    render() {
        let { id, image, name, qty, price } = this.state.product;
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Products Cart</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Corporis fugiat veritatis sint aperiam quidem dolore at minima veniam pariatur delectus.</p>
                        </div>
                    </div>
                    <pre>{JSON.stringify(this.state.product)}</pre>
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped table-light">
                                <thead className="theader">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>{id}</td>
                                    <td>
                                        <img src={image} alt="" width="50" height="50" />
                                    </td>
                                    <td>{name}</td>
                                    <td>{price}</td>

                                    <td>
                                        <i className="fa fa-minus-circle mx-1" onClick={this.decQty} />
                                        {qty}
                                        <i className="fa fa-plus-circle mx-1" onClick={this.incrQty} />
                                    </td>
                                    <td>{price * qty}</td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ProductItem;