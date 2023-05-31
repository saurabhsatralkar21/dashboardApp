import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import GoogleIcon from '@mui/icons-material/Google';
import SecurityIcon from '@mui/icons-material/Security';
import BadgeIcon from '@mui/icons-material/Badge';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">IT DASHBOARD</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Overview</span>
                </li>
                </Link>

                <p className="title">SYSTEMS</p>

                <Link to="/bamboohr" style={{textDecoration: "none"}}>
                <li>
                    <AssignmentIndIcon className='icon'/>
                    <span>BambooHR</span>
                </li>
                </Link>

                <Link to="/Jira" style={{textDecoration: "none"}}>
                <li>
                    <ViewKanbanIcon className='icon'/>
                    <span>Jira</span>
                </li>
                </Link>

                <Link to="/googleworkspace" style={{textDecoration: "none"}}>
                <li>
                    <GoogleIcon className='icon'/>
                    <span>Google Workspace</span>
                </li>
                </Link>

                <Link to="/qualys" style={{textDecoration: "none"}}>
                <li>
                    <SecurityIcon className='icon'/>
                    <span>Qualys</span>
                </li>
                </Link>

                <Link to="/cortex" style={{textDecoration: "none"}}>
                <li>
                    <BadgeIcon className='icon'/>
                    <span>Cortex</span>
                </li>
                </Link>

                <Link to="/mdm" style={{textDecoration: "none"}}>
                <li>
                    <ImportantDevicesIcon className='icon'/>
                    <span>MDM</span>
                </li>
                </Link>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar