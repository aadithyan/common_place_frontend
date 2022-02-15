import React from "react";
import { timesheetsTabContentHeadings } from "../../../Constants/DashboardConstants";
function TimesheetsTab() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>{timesheetsTabContentHeadings.date}</th>
          <th>{timesheetsTabContentHeadings.activity}</th>
          <th>{timesheetsTabContentHeadings.projectID}</th>
          <th>{timesheetsTabContentHeadings.project}</th>
          <th>{timesheetsTabContentHeadings.hours}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h6 className="m-0">2021-12-03</h6>
          </td>
          <td>
            <h6 className="m-0">Prod Bugs</h6>
          </td>
          <td>
            <h6 className="m-0">123</h6>
          </td>
          <td>
            <h6 className="m-0 ">CPWI</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">5</h6>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">2021-12-03</h6>
          </td>
          <td>
            <h6 className="m-0">US102221 - Implementation</h6>
          </td>
          <td>
            <h6 className="m-0">123</h6>
          </td>
          <td>
            <h6 className="m-0 ">Tappy</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">3</h6>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">2021-12-04</h6>
          </td>
          <td>
            <h6 className="m-0">Prod Bugs</h6>
          </td>
          <td>
            <h6 className="m-0">123</h6>
          </td>
          <td>
            <h6 className="m-0 ">CPWI</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">8</h6>
          </td>
        </tr>
        <tr>
          <td>
            <h6 className="m-0">2021-12-05</h6>
          </td>
          <td>
            <h6 className="m-0">Prod Bugs</h6>
          </td>
          <td>
            <h6 className="m-0">123</h6>
          </td>
          <td>
            <h6 className="m-0 ">CPWI</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">8</h6>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TimesheetsTab;
