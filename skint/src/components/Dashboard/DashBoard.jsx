
import React, { useState } from 'react';
import '../../assets/DashBoard.css';

import BrandExample from './topNavbar';




import { Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import SideNavbar from './sideNavbar';


const Dashboard = () => {

  const [searchText, setSearchText] = useState('');


  const [isNavbarOpen, setIsNavbarOpen] = useState(false);






  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

 



  const data6 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = [
    {
      Month: "JAN",
      Users: 990,
      fill: "#bab4b4"
    },
    {
      Month: "FEB",
      Users: 600,
      fill: "#bab4b4"
    },
    {
      Month: "MAR",
      Users: 850,
      fill: "#bab4b4"
    },
    {
      Month: "APR",
      Users: 800,
      fill: "#bab4b4"
    },
    {
      Month: "MAY",
      Users: 1450,
      fill: "#bab4b4"
    },
    {
      Month: "JUNE",
      Users: 1532,
      fill: "#1dbc5a"
    }
  ];

  const data1 = [
    {
      Month: "JAN",
      Users: 500,
      fill: "#bab4b4"
    },
    {
      Month: "FEB",
      Users: 700,
      fill: "#bab4b4"
    },
    {
      Month: "MAR",
      Users: 1350,
      fill: "#bab4b4"
    },
    {
      Month: "APR",
      Users: 1200,
      fill: "#bab4b4"
    },
    {
      Month: "MAY",
      Users: 1750,
      fill: "#bab4b4"
    },
    {
      Month: "JUNE",
      Users: 600,
      fill: "#6c33ad"
    }
  ];

  const data2 = [
    {
      Month: "JAN",
      Users: 400,
      fill: "#bab4b4"
    },
    {
      Month: "FEB",
      Users: 500,
      fill: "#bab4b4"
    },
    {
      Month: "MAR",
      Users: 1000,
      fill: "#bab4b4"
    },
    {
      Month: "APR",
      Users: 800,
      fill: "#bab4b4"
    },
    {
      Month: "MAY",
      Users: 950,
      fill: "#bab4b4"
    },
    {
      Month: "JUNE",
      Users: 1512,
      fill: "#259eb0"
    }
  ];

  const data4 = [
    {
      name: "Jan",
      Task_Assigned: 4000,
      Task_Completed: 2400,
      amt: 2400
    },
    {
      name: "Feb",
      Task_Assigned: 3000,
      Task_Completed: 1398,
      amt: 2210
    },
    {
      name: "Mar",
      Task_Assigned: 2000,
      Task_Completed: 9800,
      amt: 2290
    },
    {
      name: "April",
      Task_Assigned: 2780,
      Task_Completed: 3908,
      amt: 2000
    },
    {
      name: "May",
      Task_Assigned: 1890,
      Task_Completed: 4800,
      amt: 2181
    },
    {
      name: "June",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    },
    {
      name: "July",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    },
    {
      name: "Aug",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    },
    {
      name: "Sep",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    },
    {
      name: "Oct",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    },
    {
      name: "Nov",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    },
    {
      name: "Dec",
      Task_Assigned: 0,
      Task_Completed: 0,
      amt: 0
    }
  ]

  const data5 = [
    {
      name: 'Jan',
      Month: 590,
      amt: 1400,
    },
    {
      name: 'Feb',
      Month: 868,
      amt: 1506,
    },
    {
      name: 'Mar',
      Month: 1397,
      amt: 989,
    },
    {
      name: 'Apr',
      Month: 1480,
      amt: 1228,
    },
    {
      name: 'May',
      Month: 1520,
      amt: 1100,
    },
    {
      name: 'June',
      Month: 1400,
      amt: 1700,
    },
    {
      name: 'July',
      Month: 1590,
      amt: 1400,
    },
    {
      name: 'Aug',
      Month: 868,
      amt: 1506,
    },
    {
      name: 'Sept',
      Month: 397,
      amt: 989,
    },
    {
      name: 'Oct',
      Month: 80,
      amt: 1228,
    },
    {
      name: 'Nov',
      Month: 520,
      amt: 1100,
    },
    {
      name: 'Dec',
      Month: 600,
      amt: 1700,
    }
  ]



  return (
    <div className='body-shift'>
      <BrandExample searchText={searchText} handleSearch={handleSearch} />
      <div className={`bg ${isNavbarOpen ? 'shift-right' : ''}`}>
        <SideNavbar/>
       
       <div className="ItemContainer">
          <div className="ItemContainer1">
            <div className="subitemContainer">
              <p className="totalUser">Total Users</p>
              <p className="userCount">1532</p>
              <p className="currentMonth1">Current Month</p>
            </div>
            <div className="barchartContainer">
              <BarChart width={166} height={100} data={data}>
                <Tooltip />
                <Bar dataKey="Users" fill="fill" />
              </BarChart>
            </div>
          </div>

          <div className="ItemContainer1">
            <div className="subitemContainer">
              <p className="totalTasks">Total Tasks</p>
              <p className="taskCount">600</p>
              <p className="currentMonth2">Current Month</p>
            </div>
            <div className="barchartContainer">
              <BarChart width={166} height={100} data={data1}>
                <Tooltip />
                <Bar dataKey="Users" fill="fill" />
              </BarChart>
            </div>
          </div>

          <div className="ItemContainer1">
            <div className="subitemContainer1">
              <p className="montlySummary">Monthly Task Summary</p>
              <p className="taskSummary">1512</p>
              <p className="currentMonth3">Current Month</p>
            </div>
            <div className="barchartContainer">
              <BarChart width={166} height={100} data={data2}>
                <Tooltip />
                <Bar dataKey="Users" fill="fill" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="MiddleTaskChart">
          <p className="TaskAssignedvsCompleted">
            Task Assigned & Task Completed
          </p>
          <LineChart
            width={1150}
            height={200}
            data={data4}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Task_Assigned" stroke="#8884d8" />
            <Line type="monotone" dataKey="Task_Completed" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="TaskContainer">
          <div className="TaskChart">
            <p className="taskContainerText">Your Team Performance This Week</p>
            <PieChart width={300} height={300}>
              <Pie
                data={data6}
                cx={160}
                cy={100}
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <p className="teamPerformancetext">Your Team Performance is 5% better than last week</p>
            <button className="viewDetailsbtn">View Details</button>
          </div>
          <div className="MonthlyTask">
            <p className="taskContainerText">Monthly Task Performance</p>
            <ComposedChart
              width={800}
              height={250}
              data={data5}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Month" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Month" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
