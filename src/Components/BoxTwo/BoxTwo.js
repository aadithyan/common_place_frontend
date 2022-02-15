import React from "react";

function BoxTwo() {
  return (
    <div className="card card-event">
      <div className="card-block">
        <div className="row align-items-center justify-content-center">
          <div className="col">
            <h5 className="m-0">Upcoming Event</h5>
          </div>
          <div className="col-auto">
            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">
              34%
            </label>
          </div>
        </div>
        <h2 className="mt-3 f-w-300">
          45<sub className="text-muted f-14">Competitors</sub>
        </h2>
        <h6 className="text-muted mt-4 mb-0">You can participate in event </h6>
        <i className="fab fa-angellist text-c-purple f-50"></i>
      </div>
    </div>
  );
}

export default BoxTwo;
