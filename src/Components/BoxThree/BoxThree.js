import React from "react";

function BoxThree(props) {
  return (
    <div className="card">
      <div className="card-block border-bottom">
        <div className="row d-flex align-items-center">
          <div className="col-auto">
            <i className="feather icon-zap f-30 text-c-green"></i>
          </div>
          <div className="col">
            <h3 className="f-w-300">2022-02-11 9:30 AM</h3>
            <span className="d-block text-uppercase">{ props.heading }</span>
          </div>
        </div>
      </div>
      <div className="card-block">
        <div className="row d-flex align-items-center">
          <div className="col-auto">
            <i className="feather icon-map-pin f-30 text-c-blue"></i>
          </div>
          <div className="col">
            <h3 className="f-w-300">2022-02-11 9:30 PM</h3>
            <span className="d-block text-uppercase">{ props.heading2 }</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxThree;
