import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/DashBoard.css';
import BrandExample from './topNavbar';
import { Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import SideNavbar from './sideNavbar';

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:3000/api/endpoint-for-data')
      .then(response => {
        // Assuming the response contains the data in the format required
        setData(response.data.data);
        setData1(response.data.data1);
        setData2(response.data.data2);
        setData4(response.data.data4);
        setData5(response.data.data5);
        setData6(response.data.data6);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
                <Bar dataKey="Users" fill="#bab4b4" />
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
                <Bar dataKey="Users" fill="#bab4b4" />
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
                <Bar dataKey="Users" fill="#bab4b4" />
              </BarChart>
            </div>
          </div>
        </div>

        <div className="MiddleTaskChart">
          <p className="TaskAssignedvsCompleted">Task Assigned & Task Completed</p>
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
                {data6.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <p className="teamPerformancetext">Your Team Performance is 5% better than last week</p>
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
