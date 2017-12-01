
import React, { Component } from 'react';
//import '../../node_modules/react-vis/dist/style.css';
//import {RadialChart} from 'react-vis';
import {Tooltip,Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,ResponsiveContainer} from 'recharts';

class ExpertiseTwo extends Component {



  render() {

    const data1 = [
      { subject: 'x ', Rating: 85, fullMark: 100 },
      { subject: 'Tech Knowdledge', Rating: 65,  fullMark: 100 },
      { subject: 'Project Management', Rating: 80,  fullMark: 100 },
      { subject: 'UI/UX Design', Rating: 75, fullMark: 100 },
      { subject: 'User Research', Rating: 83, fullMark: 100 },

    ];


    return (
    <div>



    <ResponsiveContainer width="90%" height={600}>
        <RadarChart
          width={600}
          height={600}
          cx={190}
          cy={170}
          outerRadius={120}
          innerRadius={0}
          data={data1}
          //margin={{ top: 20, right: 0, left: 100, bottom: 0 }}
          >


          <Radar
            dataKey="Rating"
            //stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip/>
          <PolarGrid gridType ="circle" />
          <PolarAngleAxis tick={{fontSize:"50%"}} dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>

    );
  }

}

export default ExpertiseTwo ;
