import React from "react";
import { clientsTabContentHeadings } from "../../../Constants/DashboardConstants";
function ClientsTab() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>{clientsTabContentHeadings.clientId}</th>
          <th>{clientsTabContentHeadings.client}</th>
          <th>{clientsTabContentHeadings.startedAt}</th>
          <th>{clientsTabContentHeadings.status}</th>
          <th className="text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h6 className="m-0">101</h6>
          </td>
          <td>
            <h6 className="m-0">Engineer AI</h6>
          </td>
          <td>
            <h6 className="m-0">2019-07-06</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-blue">Active</h6>
          </td>
          <td className="text-right">
            <i className="fas fa-circle text-c-green f-10"></i>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">103</h6>
          </td>
          <td>
            <h6 className="m-0">Cox Auto</h6>
          </td>
          <td>
            <h6 className="m-0">2021-11-15</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-blue">Active</h6>
          </td>
          <td className="text-right">
            <i className="fas fa-circle text-c-green f-10"></i>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">102</h6>
          </td>
          <td>
            <h6 className="m-0">Sutherland</h6>
          </td>
          <td>
            <h6 className="m-0">2019-01-22</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-blue">Active</h6>
          </td>
          <td className="text-right">
            <i className="fas fa-circle text-c-green f-10"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ClientsTab;
