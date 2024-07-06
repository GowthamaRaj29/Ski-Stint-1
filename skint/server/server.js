const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Your API endpoints
app.get('/api/endpoint-for-data', (req, res) => {
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
    ];
  
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
    ];
  
    const data6 = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 }
    ];
  
    res.json({ data, data1, data2, data4, data5, data6 });
  });
  
   // Use port 3001 or specify a different port
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
