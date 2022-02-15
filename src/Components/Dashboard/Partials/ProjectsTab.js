import React from "react";
import { projectsTabContentHeadings } from "../../../Constants/DashboardConstants";

function ProjectsTab() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>{projectsTabContentHeadings.projectId}</th>
          <th>{projectsTabContentHeadings.project}</th>
          <th>{projectsTabContentHeadings.client}</th>
          <th>{projectsTabContentHeadings.startedAt}</th>
          <th>{projectsTabContentHeadings.status}</th>
          <th className="text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h6 className="m-0">PRJ101</h6>
          </td>
          <td>
            <h6 className="m-0">CPWI</h6>
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
            <h6 className="m-0">PRJ102</h6>
          </td>
          <td>
            <h6 className="m-0">Tappy</h6>
          </td>
          <td>
            <h6 className="m-0">Cox Auto Inc</h6>
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
            <h6 className="m-0">PRJ103</h6>
          </td>
          <td>
            <h6 className="m-0">Iristutor</h6>
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

export default ProjectsTab;
