import React, { useState, useEffect } from 'react';
import './ProjectStatus.css';
import Table from './Table'

const ProjectStatus = ({ data }) => {
    const [statusCounts, setStatusCounts] = useState({});
    const [filteredData, setFilteredData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
  
    // Calculate status counts when data changes
    useEffect(() => {
      const counts = data.reduce((acc, curr) => {
        acc[curr.status] = (acc[curr.status] || 0) + 1;
        return acc;
      }, {});
      setStatusCounts(counts);
    }, [data]);
  
    // Filter data based on selected status
    useEffect(() => {
      if (selectedStatus !== null) {
        const filtered = data.filter(item => item.status === selectedStatus);
        setFilteredData(filtered);
        console.log(filtered)
      } else {
        setFilteredData([]);
        console.log("no data")
      }
    }, [data, selectedStatus]);
  
    // Handle click on status card
    const handleStatusClick = status => {
      setSelectedStatus(status);
      console.log("status:",status)
      console.log(filteredData)
      console.log(data)
    };
    console.log("Filtered data:", filteredData); 
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="status-counts">
          {Object.keys(statusCounts).map(status => (
            <div key={status} className="status-count" onClick={() => handleStatusClick(status)}>
              <h3>{status}</h3>
              <p>{statusCounts[status]}</p>
            </div>
          ))}
        </div>
        <Table data={filteredData.length > 0 ? filteredData : data} />
      </div>
    );
  };

export default ProjectStatus;