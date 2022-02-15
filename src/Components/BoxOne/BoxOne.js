import React from "react";

function BoxOne(props) {  
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card daily-sales">
        <div className="card-block">
          <h6 className="mb-4">{ props.heading }</h6>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="f-w-300 d-flex align-items-center m-b-0">
                <i className={"feather f-30 m-r-10 " + props.icon} ></i>
                { props.value }
              </h3>
            </div>
            <div className="col-3 text-right">
              <p className="m-b-0">{ props.title }</p>
            </div>
          </div>
          <div className="progress m-t-30" style={{ height: "7px" }}>
            <div
              className="progress-bar progress-c-theme"
              role="progressbar"
              style={{ width: props.width }}
              aria-valuenow={ props.width }
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxOne;
