import React from 'react';
import { useEffect, useState } from "react";
import "./overview.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widgets/Widget';
// import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
// import GoogleIcon from '@mui/icons-material/Google';
// import SecurityIcon from '@mui/icons-material/Security';
// import BadgeIcon from '@mui/icons-material/Badge';
// import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const Overview = () => {

  // BambooHR use state
  const [totalEmployees, setTotalEmployees] = useState("--");
  const [employeeOnboarded, setEmployeeOnboarded] = useState("--");
  const [employeeOffboarded, setEmployeeOffboarded] = useState("--");

  // GoogleWorkspace use state
  const [totalLicenses, setTotalLicenses] = useState("--");
  const [accountTypeUser, setAccountTypeUser] = useState("--");
  const [accountTypeService, setAccountTypeService] = useState("--");

  // Jira use state
  const [totalOpen, setTotalOpen] = useState("--");
  const [totalClosed, setTotalClosed] = useState("--");
  const [totalP1Open, setTotalP1Open] = useState("--");
  const [totalOpenIncidents, setTotalOpenIncidents] = useState("--");
  const [totalOpenChanges, setTotalOpenChanges] = useState("--");

  // Qualys use state
  const [totalVulnerabilities, setTotalVulnerabilities] = useState("--");
  const [totalVulnerabilitiesWindows, setTotalVulnerabilitiesWindows] = useState("--");
  const [totalVulnerabilitiesMacOS, setTotalVulnerabilitiesMacOS] = useState("--");
  const [totalVulnerabilitiesLinux, setTotalVulnerabilitiesLinux] = useState("--");

  // Cortex use state
  const [totalComputers, setTotalComputers] = useState("--");
  const [totalNewIncidents, setTotalNewIncidents] = useState("--");
  const [totalOpenIncidentsEDR, setTotalOpenIncidentsEDR] = useState("--");
  const [totalNewCriticalIncidents, setTotalNewCriticalIncidents] = useState("--");

  // MDM use state
  const [totalComputersMDM, setTotalComputersMDM] = useState("--");
  const [totalPhonesMDM, setTotalPhonesMDM] = useState("--");


  useEffect(()=>{

    const endpoint = ""
    const fetchData = async () => {
      try{
        const response = await fetch(endpoint);
        const systemData = await response.json(response);
        
        const latestData = systemData[(systemData.length)-1];

        // BambooHR Data
        setTotalEmployees(latestData["BambooHR Data"][0]["Number of Employees"])
        setEmployeeOnboarded(latestData["BambooHR Data"][0]["Number of Onboarding Jiras"])
        setEmployeeOffboarded(latestData["BambooHR Data"][0]["Number of Offboarding Jiras"])

        // GoogleData
        // setTotalLicenses(latestData["Google Data"][0]["Number of licenses"])
        setTotalLicenses(2030)
        setAccountTypeUser(latestData["Google Data"][0]["Account Type User"])
        setAccountTypeService(latestData["Google Data"][0]["Account Type Service"])

        // Jira Data
        setTotalOpen(latestData["Jira Data"][0]["Open Jiras"])
        setTotalClosed(latestData["Jira Data"][0]["Resolved Jiras"])
        setTotalP1Open(latestData["Jira Data"][0]["High Priority Jiras"])
        setTotalOpenIncidents(latestData["Jira Data"][0]["Incident Jiras"])
        setTotalOpenChanges(latestData["Jira Data"][0]["Jira Changes Done"])

        // Qualys Data
        setTotalVulnerabilities(latestData["Qualys Data"][0]["Total Number Of Vulnerabilities"])
        setTotalVulnerabilitiesWindows(latestData["Qualys Data"][0]["Total Number Of Vulnerabilities Windows"])
        setTotalVulnerabilitiesMacOS(latestData["Qualys Data"][0]["Total Number Of Vulnerabilities MacOS"])
        setTotalVulnerabilitiesLinux(latestData["Qualys Data"][0]["Total Number Of Vulnerabilities Linux"])

        // Cortex Data
        setTotalComputers(latestData["Cortex Data"][0]["Total Number Of Computers"])
        setTotalNewIncidents(latestData["Cortex Data"][0]["Total Number Of New Incidents"])
        setTotalOpenIncidentsEDR(latestData["Cortex Data"][0]["Total Number of Open Incidents"])
        setTotalNewCriticalIncidents(latestData["Cortex Data"][0]["Total Number of Severe Incidents"])

        // MDM Data
        setTotalComputersMDM(latestData["MDM Data"][0]["Number of Computers in MDM"])
        setTotalPhonesMDM(latestData["MDM Data"][0]["Number of Phones in GW"])


      }catch(error){
        console.log(error);
      } 

    }
      
    
  fetchData();

})


// console.log(latestData["BambooHR Data"][0]["Number of Employees"]);

  const bamboohr = [
    { title: "Total number of employees", counter: totalEmployees },
    { title: "Number of employees onboarding", counter: employeeOnboarded },
    { title: "Number of employees offboarding", counter: employeeOffboarded},
  ]

  const googleworkspace = [
    { title: "Number of licenses", counter: totalLicenses },
    { title: "Employees [Account Type = User]", counter: accountTypeUser },
    { title: "Employees [Account Type = Service]", counter: accountTypeService },

    { title: "Suspended Accounts", counter: 0 },
  ]

  const jirainfo = [
    { title: "Total number of open tickets", counter: totalOpen },
    { title: "Total number of closed tickets", counter: totalClosed },
    { title: "Total number of open P1 tickets", counter: totalP1Open },
    { title: "Total number of open incidents", counter: totalOpenIncidents },
    { title: "Total number of open changes", counter: totalOpenChanges },
  ]

  const qualys = [

    { title: "Total Computers", counter: 0 },

    { title: "Total Vulnerabilities", counter: totalVulnerabilities },
    { title: "Vulnerabilities in Windows", counter: totalVulnerabilitiesWindows },
    { title: "Vulnerabilities in MacOS", counter: totalVulnerabilitiesMacOS },
    { title: "Vulnerabilities in Linux", counter: totalVulnerabilitiesLinux },

    { title: "Total Servers", counter: 0 },
    { title: "Vulnerabilities in Linux", counter: 0 },
    { title: "Vulnerabilities in Windows", counter: 0 },
  ]

  const cortex = [
    { title: "Total Computers in EDR", counter: totalComputers },
    { title: "Total New incidents in EDR", counter: totalNewIncidents },
    { title: "Total Open in incidents in EDR", counter: totalOpenIncidentsEDR },
    { title: "Total New incidents: Critical or High", counter: totalNewCriticalIncidents },
  ]

  const mdm = [
    { title: "Total number of computers in MDM", counter: totalComputersMDM },
    { title: "Total number of phones in MDM", counter: totalPhonesMDM },
  ]



  return (
    <div className='overview'>
        <Sidebar></Sidebar>
        <div className="overviewContainer">
          <Navbar/>
          <div className="widgets">

            {/* ReactJS Bamboo HR widget iteration */}
            <div className="header">
            <p>BambooHR</p>
            <div className="BambooHR">
              {bamboohr.map((data, index) => {
                return(
                <Widget 
                  key={index}
                  type="bamboohr"
                  data={{
                    title: data.title,
                    counter: data.counter,
                    icon: AssignmentIndIcon
                  }}
                />
              )})}
            </div>
            </div>

            {/* ReactJS Googleworkspace widget iteration */}
            <div className="header">
            <p>Google Workspace</p>
            <div className="googleWorkspace">
              {googleworkspace.map((data, index) => {
                return(
                <Widget 
                  key={index}
                  type="googleworkspace"
                  data={{
                    title: data.title,
                    counter: data.counter,
                    // icon: GoogleIcon
                  }}
                />
              )})}
            </div>
            </div>

            {/* ReactJS Jira widget iteration */}
            <div className="header">
            <p>Jira Info</p>
            <div className="jiraInfo">
              {jirainfo.map((data, index) => {
                return(
                <Widget 
                  key={index}
                  type="jirainfo"
                  data={{
                    title: data.title,
                    counter: data.counter
                  }}
                />
              )})}
            </div>
            </div>

            {/* ReactJS Qualys widget iteration */}
            <div className="header">
            <p>Qualys <span style={{fontSize: "13px"}}>In progress...</span></p>
            <div className="qualys">
              {qualys.map((data, index) => {
                return(
                <Widget 
                  key={index}
                  type="qualys"
                  data={{
                    title: data.title,
                    counter: data.counter
                  }}
                />
              )})}
            </div>
            </div>

            {/* ReactJS Cortex widget iteration */}
            <div className="header">
            <p>Cortex <span style={{fontSize: "13px"}}>In progress...</span></p>
            <div className="cortex">
              {cortex.map((data, index) => {
                return(
                <Widget 
                  key={index}
                  type="cortex"
                  data={{
                    title: data.title,
                    counter: data.counter
                  }}
                />
              )})}
            </div>
            </div>

            {/* ReactJS Qualys widget iteration */}
            <div className="header">
            <p>MDM <span style={{fontSize: "13px"}}>In progress...</span></p>
            <div className="mdm">
              {mdm.map((data, index) => {
                return(
                <Widget 
                  key={index}
                  type="mdm"
                  data={{
                    title: data.title,
                    counter: data.counter
                  }}
                />
              )})}
            </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Overview