import React from 'react'
import "./widget.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



const Widget = ({type, data}) => {

  let title, counter;

  //temporary
  const diff = 20;

    switch (type) { 
      case "bamboohr":
        title = data.title;
        counter = data.counter;
        break;

        case "googleworkspace":
          title = data.title;
          counter = data.counter;
          break;

        case "jirainfo":
          title = data.title;
          counter = data.counter;
          // icon = ViewKanbanIcon;
          break;

        case "qualys":
          title = data.title;
          counter = data.counter;
          // icon = SecurityIcon;
          break;

        case "cortex":
          title = data.title;
          counter = data.counter;
          // icon = BadgeIcon;
          break;

        case "mdm":
          title = data.title;
          counter = data.counter;
          // icon = ImportantDevicesIcon;
          break;

        default:
          title = '';
          counter = '';
          break;
    }


  return (
    <div className='widget'>
        <div className="left">
          <span className="title"> {title} </span>
          <span className="counter">{counter}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}%
            </div>
          <CheckCircleIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget