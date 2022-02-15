import React from "react";
import {projectsTabContentHeadings} from '../../../Constants/DashboardConstants'

function ProjectsTab() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>{projectsTabContentHeadings.projectId}</th>
          <th>{projectsTabContentHeadings.client}</th>
          <th>{projectsTabContentHeadings.startedAt}</th>
          <th>{projectsTabContentHeadings.status}</th>
          <th className="text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h6 className="m-0">Ida Jorgensen</h6>
          </td>
          <td>
            <h6 className="m-0">The quick brown fox</h6>
          </td>
          <td>
            <h6 className="m-0">3:28 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-green">Done</h6>
          </td>
          <td className="text-right">
            <i className="fas fa-circle text-c-green f-10"></i>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">Albert Andersen</h6>
          </td>
          <td>
            <h6 className="m-0">Jumps over the lazy</h6>
          </td>
          <td>
            <h6 className="m-0">2:37 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-red">Missed</h6>
          </td>
          <td className="text-right">
            <i className="fas fa-circle text-c-red f-10"></i>
          </td>
        </tr>

        <tr>
          <td>
            <h6 className="m-0">Silje Larsen</h6>
          </td>
          <td>
            <h6 className="m-0">Dog the quick brown</h6>
          </td>
          <td>
            <h6 className="m-0">10:23 AM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-purple">Delayed</h6>
          </td>
          <td className="text-right">
            <i className="fas fa-circle text-c-purple f-10"></i>
          </td>
        </tr>
        <tr>
          <td>
            <h6 className="m-0">Ida Jorgensen</h6>
          </td>
          <td>
            <h6 className="m-0">The quick brown fox</h6>
          </td>
          <td>
            <h6 className="m-0">4:28 PM</h6>
          </td>
          <td>
            <h6 className="m-0 text-c-green">Done</h6>
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
