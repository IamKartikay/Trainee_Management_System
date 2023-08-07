import React, { useState, useEffect } from "react";
import { useTable } from 'react-table'

const ShowTrainee = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Make the fetch call when the component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5001/show")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        setData(data); // Update the state with the received data
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  const tableInstance = useTable();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div>
      <h1>All trainee in DESIDOC</h1>
      
    </div>
  );
};

export default ShowTrainee;
