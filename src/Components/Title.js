import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">
            {name} <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}
