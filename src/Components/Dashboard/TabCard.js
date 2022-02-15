import React, { useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProjectsTab from "./Partials/ProjectsTab";
import ClientsTab from "./Partials/ClientsTab";
import { tabHeadings } from "../../Constants/DashboardConstants";
import TimesheetsTab from "./Partials/TimesheetsTab";
import CheckinsTab from "./Partials/CheckinsTab";

function TabCard() {
  return (
    <div className="col-xl-8 col-md-12 m-b-30">
      <Tabs
        defaultActiveKey="myProjects"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="myProjects" title={tabHeadings.tab1}>
          <ProjectsTab />
        </Tab>
        <Tab eventKey="myClients" title={tabHeadings.tab2}>
          <ClientsTab />
        </Tab>
        <Tab eventKey="myTimesheets" title={tabHeadings.tab3}>
          <TimesheetsTab />
        </Tab>
        <Tab eventKey="myCheckins" title={tabHeadings.tab4}>
          <CheckinsTab />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabCard;
