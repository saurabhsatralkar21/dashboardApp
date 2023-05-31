import React from 'react';
import "./jira.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widgets/Widget';
import Chart from "../../components/charts/Chart";


const Jira = () => {

  const jirainfo = [
    { title: "Total number of open tickets", counter: 30 },
    { title: "Total number of closed tickets", counter: 2005 },
    { title: "Total number of open P1 tickets", counter: 2 },
    { title: "Total number of open incidents", counter: 3 },
    { title: "Total number of open changes", counter: 4 },
  ]


  return (
    <div className='jirainfo'>
        <Sidebar/>
        <div className="jiraContainer">
          <Navbar/>
          <div className="widgets">

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
          </div>
          <div className="charts">
            <Chart></Chart>
          </div>


        </div>


    </div>
  )
}

export default Jira