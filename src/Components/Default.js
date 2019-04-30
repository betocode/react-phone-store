import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center  text-uppercase pt-5">
            <h1 className="display-3 text-title"> 404 </h1>
            <h1 className="text-title">error</h1>
            <h2 className="text-title">page not found</h2>
            <h3>Sua URL <span className="text-danger">{this.props.location.pathname}</span> nao existe :(</h3>
          </div>
        </div>
      </div>
    );
  }
}
