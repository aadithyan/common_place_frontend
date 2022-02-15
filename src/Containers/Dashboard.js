import React from "react";
import BoxOne from "../Components/BoxOne/BoxOne";
import Header from "../Components/Header/Header";
import ListCard from "../Components/ListCard/ListCard";
import NavBar from "../Components/NavBar/NavBar";
import { dashboardHeadings } from "../Constants/DashboardConstants";
import { taskIconClass } from "../Constants/BaseConstants";
import BoxTwo from "../Components/BoxTwo/BoxTwo";
import BoxThree from "../Components/BoxThree/BoxThree";
import TabCard from "../Components/Dashboard/TabCard";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row">
                    <BoxOne
                      value="3"
                      heading={dashboardHeadings.totalProjects}
                      width="50"
                      title={dashboardHeadings.projects}
                      icon="text-c-green icon-layers"
                    />
                    <BoxOne
                      value="20"
                      heading={dashboardHeadings.totalHours}
                      width="35"
                      title={dashboardHeadings.hours}
                      icon="text-c-red icon-clock"
                    />
                    <BoxOne
                      value="2"
                      heading={dashboardHeadings.totalTasks}
                      width="70"
                      title={dashboardHeadings.tasks}
                      icon="text-c-yellow icon-check-circle"
                    />
                    <ListCard
                      heading={dashboardHeadings.myTasksHeading}
                      taskIconClass={taskIconClass}
                    />
                    <div className="col-xl-4 col-md-6">
                      <BoxTwo />
                      <BoxThree heading={dashboardHeadings.checkedInAt} heading2={dashboardHeadings.checkedOutAt} />
                    </div>
                    <TabCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
