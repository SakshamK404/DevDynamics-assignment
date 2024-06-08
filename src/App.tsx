import React, { useState } from "react";
import Select from "react-select";
import Records from "./data.json";
import TotalActivities from "./components/TotalActivity";
import ActiveDaysGraph from "./components/ActiveDaysGraph";
import ComparisonActiveDaysGraph from "./components/ComparisonActiveDaysGraph";
import ComparisonTotalActivityGraph from "./components/ComparisonTotalActivityGraph";
import SecondaryHeader from "./components/SecondaryHeader";
import Footer from "./components/Footer";
import { AuthorWorklogRow, RootObject, DayWiseActivityItem } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faChartBar,
  faCalendarDay,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./App.css";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const options = (Records as RootObject).data.AuthorWorklog.rows.map(
  (record: AuthorWorklogRow) => {
    const email = record.name;
    const name = email.split("@")[0];
    const formattedName = capitalizeFirstLetter(name);
    return { value: email, label: formattedName };
  }
);

const App: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const handleEmailChange = (selectedOption: any) => {
    setSelectedEmail(selectedOption ? selectedOption.value : null);
  };

  const renderTotalActivity = () => {
    const records = (Records as RootObject).data.AuthorWorklog.rows;
    if (!records || records.length === 0) {
      return <div>No data available</div>;
    }

    const filteredRecords = selectedEmail
      ? records.filter((record) => record.name === selectedEmail)
      : records;

    return filteredRecords.map((record: AuthorWorklogRow) => (
      <TotalActivities
        key={record.name}
        totalActivity={record.totalActivity}
        name={record.name}
      />
    ));
  };

  const renderDayWiseActivityGraphs = (email: string) => {
    const records = (Records as RootObject).data.AuthorWorklog.rows;

    const selectedRecord = records.find(
      (record: AuthorWorklogRow) => record.name === email
    );

    if (!selectedRecord) {
      return <div>No data available for the specified user</div>;
    }

    return selectedRecord.dayWiseActivity.map((activity) => {
      const data = activity.items.children.map((item: DayWiseActivityItem) => ({
        count: parseInt(item.count, 10),
        label: item.label,
      }));

      return (
        <div key={activity.date} className="chart-wrapper">
          <h3>{activity.date}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    });
  };

  const renderActiveDaysGraph = (email: string) => {
    const records = (Records as RootObject).data.AuthorWorklog.rows;

    const selectedRecord = records.find(
      (record: AuthorWorklogRow) => record.name === email
    );

    if (!selectedRecord || !selectedRecord.activeDays) {
      return <div>No active days data available for the selected email</div>;
    }

    return <ActiveDaysGraph data={selectedRecord.activeDays} />;
  };

  const selectedEmails = [
    "arvind.shelke@devdynamics.ai",
    "rishi@devdynamics.ai",
    "ritik@devdynamics.ai",
    "avijit@devdynamics.ai",
  ];

  const records = (Records as RootObject).data.AuthorWorklog.rows;

  const renderSection = () => {
    switch (activeSection) {
      case "totalActivity":
        return (
          <>
            <SecondaryHeader title="Total Activity" />
            <div className="Dropdown">
              <Select options={options} onChange={handleEmailChange} />
            </div>
            <div className="wrapper">{renderTotalActivity()}</div>
            <div className="wrapper">
              {selectedEmail && renderActiveDaysGraph(selectedEmail)}
            </div>
          </>
        );
      case "dayWiseActivity":
        return (
          <>
            <SecondaryHeader title="Day Wise Activity" />
            <div className="Dropdown">
              <Select options={options} onChange={handleEmailChange} />
            </div>
            <div className="wrapper">
              {selectedEmail && renderDayWiseActivityGraphs(selectedEmail)}
            </div>
          </>
        );
      case "dashboard":
      default:
        return (
          <>
            <SecondaryHeader title="Dashboard" />
            <div className="wrapper">
              <ComparisonActiveDaysGraph
                data={records}
                emails={selectedEmails}
              />
            </div>
            <div className="wrapper">
              <ComparisonTotalActivityGraph data={records} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Activity Dashboard</h1>
      </header>
      <div className="content-container">
        <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
          <div
            className="toggle-button"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul>
            <li onClick={() => setActiveSection("dashboard")}>
              <FontAwesomeIcon icon={faTachometerAlt} />{" "}
              {!isSidebarCollapsed && "Dashboard"}
            </li>
            <li onClick={() => setActiveSection("totalActivity")}>
              <FontAwesomeIcon icon={faChartBar} />{" "}
              {!isSidebarCollapsed && "Total Activity"}
            </li>
            <li onClick={() => setActiveSection("dayWiseActivity")}>
              <FontAwesomeIcon icon={faCalendarDay} />{" "}
              {!isSidebarCollapsed && "Day Wise Activity"}
            </li>
          </ul>
        </div>
        <div className="main-content">{renderSection()}</div>
      </div>
      <Footer /> {}
    </div>
  );
};

export default App;
