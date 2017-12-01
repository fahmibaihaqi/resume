
import React, { Component } from 'react';
//import '../../node_modules/react-vis/dist/style.css';
//import {RadialChart} from 'react-vis';
import {Tooltip,Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,ResponsiveContainer} from 'recharts';

//Dataset1
  const data = [
    { id:1,subject: 'Data Analysis ', Rating: 90, fullMark: 100 },
    { id:1,subject: 'Tech Knowdledge', Rating: 75,  fullMark: 100 },
    { id:1,subject: 'Project Management', Rating: 80,  fullMark: 100 },
    { id:2,subject: 'UI/UX Design', Rating: 75, fullMark: 100 },
    { id:2,subject: 'User Research', Rating: 90, fullMark: 100 },
    { id:2,subject: 'Strategic Thingking', Rating: 90, fullMark: 100 },

  ];

  const data2 = [
    { id:1,subject: 'Diplomacy ', Rating: 70, fullMark: 100 },
    { id:1,subject: 'Collaboration', Rating: 90,  fullMark: 100 },
    { id:1,subject: 'Communication', Rating: 85,  fullMark: 100 },
    { id:2,subject: 'Leadership', Rating: 75, fullMark: 100 },
    { id:2,subject: 'Presentation', Rating: 75, fullMark: 100 },

  ];

var titleData = "Product Development";
var titleData2 = "Interpesonal";

class Expertise extends Component {

  constructor(props) {
      super(props);
      this.state = {radialdata: data,title: titleData};
    }

    nextDataset(){
      this.setState ({radialdata: data2, title: titleData2})
    }

    prevDataset(){
      this.setState ({radialdata: data,title: titleData})
    }
  render() {


        const skillsStyle ={
          display:'inline-block',
          color:'inherit',
          justifyContent:'center',
          //float:'center',
          margin:'20px 20px 20px 20px',

        };

        const skillButtonNext ={
          margin:'2px 10px 10px 10px',
          display:'inline-block',
          //justifyContent:'right',
          //float: 'right',
          background: '',
          border: 0,


        };

        const skillButtonPrev={
          margin:'10px ',
          display:'inline-block',
          //float:'left',
          border: 0,
        }




    return (

      <div>
      <button className='fa fa-arrow-left'
        onClick={this.prevDataset.bind(this)}
        style={skillButtonPrev}>
      </button>

      <h3 style={skillsStyle} > {this.state.title} </h3>

      <button className='fa fa-arrow-right'
        onClick={this.nextDataset.bind(this)}
        style={skillButtonNext}>
      </button>

      <ResponsiveContainer width="90%" height={1000}>
          <RadarChart
            width={1000}
            height={1000}
            cx={160}
            cy={170}
            outerRadius={100}
            innerRadius={0}
            data={this.state.radialdata}
            //margin={{ top: 20, right: 0, left: 100, bottom: 0 }}
            >


            <Radar
              dataKey="Rating"
              //stroke="#8884d8"
              fill="#08AEEA"
              fillOpacity={0.4}
            />
            <Tooltip/>
            <PolarGrid gridType ="circle" />
            <PolarAngleAxis  angle={0} tick={{fontSize:"50%"}} dataKey="subject" />
            <PolarRadiusAxis tick={{fontSize:"70%"}} angle={30} domain={[0, 100]}/>
          </RadarChart>
        </ResponsiveContainer>

      </div>

    );
  }

}

export default Expertise ;
