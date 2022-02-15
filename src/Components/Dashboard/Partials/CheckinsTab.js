import React from "react";
import { checkinTabContentHeadings } from "../../../Constants/DashboardConstants";

function CheckinsTab() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>{checkinTabContentHeadings.date}</th>
          <th>{checkinTabContentHeadings.checkinAt}</th>
          <th>{checkinTabContentHeadings.checkoutAt}</th>
          <th>{checkinTabContentHeadings.hours}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h6 className="m-0">2021-12-10</h6>
          </td>
          <td>
            <h6 className="m-0">9:30 AM</h6>
          </td>
          <td>
            <h6 className="m-0">06:30 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">8</h6>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">2021-12-11</h6>
          </td>
          <td>
            <h6 className="m-0">9:30 AM</h6>
          </td>
          <td>
            <h6 className="m-0">06:30 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">8</h6>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">2021-12-12</h6>
          </td>
          <td>
            <h6 className="m-0">9:30 AM</h6>
          </td>
          <td>
            <h6 className="m-0">06:30 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">8</h6>
          </td>
        </tr>
        <tr>
          <td>
            <h6 className="m-0">2021-12-13</h6>
          </td>
          <td>
            <h6 className="m-0">9:30 AM</h6>
          </td>
          <td>
            <h6 className="m-0">06:30 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">8</h6>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CheckinsTab;
