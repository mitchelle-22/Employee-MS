import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
        <div>
            <div>
                <div>
                 <Link to="/dashboard">CWC</Link>
                 <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Manage Employees</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Category</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Logout</Link>
                    </li>
                 </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard