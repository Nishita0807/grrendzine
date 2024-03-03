// EmployeeListPage.js
import React, { useState } from 'react';
import Header from "./Header";
import Footer from './Footer';
import "../styles/employeelist.css"; // Import common styles
import SearchIcon from '@mui/icons-material/Search';

const employeeData = [
  { id: 1, name: 'Arjun', dateOfBirth: '16-11-2000', role: 'Software Engineer' },
  { id: 2, name: 'Mahesh', dateOfBirth: '15-01-2000', role: 'Web Developer' },
  { id: 3, name: 'Ganesh', dateOfBirth: '05-10-2000', role: 'Java Developer' },
  { id: 4, name: 'Shreya', dateOfBirth: '07-09-2002', role: 'Network Operator' },
  // Add more employee data as needed
];

function EmployeeListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredEmployees = employeeData.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="page">
      <Header />
      <div className='employees'>
        <div className='search-employee'>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
            style={{ color: 'white !important' }}
          />
          <div className='search-icon'><SearchIcon/></div>
        </div>
        <div className='employee-list'>
          {filteredEmployees.map(employee => (
           <div className="details" key={employee.id}>
            <div className='id'><div>{employee.id}</div></div>
           <table>
            <tr>
              <td>EMP ID</td>
              <td>:</td>
              <td style={{fontWeight:"bold"}}>{employee.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td style={{fontWeight:"bold"}}>{employee.name}</td>
            </tr>

            <tr>
              <td>DOB</td>
              <td>:</td>
              <td style={{color:"orange"}}>{employee.dateOfBirth}</td>
            </tr>

            <tr>
              <td>Role</td>
              <td>:</td>
              <td style={{color:"#36A546"}}>{employee.role}</td>
            </tr>
           </table>
         </div>
         
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployeeListPage;
