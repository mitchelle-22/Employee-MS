import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'


function Home() {
  //initializing 
  const[adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal,setEmployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [adminRecord,setAdminRecords] = useState([])

  useEffect(()=>{
    //calling the function methods
    adminCount();
   employeeCount(); 
   salaryCount();
   adminRecords();



  },[])
  //Functions for counting to return values on the dashboard
  const adminRecords =()=>{
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result =>{
     if(result.data.Status){
      setAdminRecords(result.data.Result)
     }
    })

  }
  const adminCount =()=>{
       axios.get('http://localhost:3000/auth/admin_count')
       .then(result =>{
        if(result.data.Status){
          setAdminTotal(result.data.Result[0].admin)
        }
       })

  }
  const employeeCount =()=>{
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result =>{
     if(result.data.Status){
       setEmployeeTotal(result.data.Result[0].employee)
     }
    })

}
const salaryCount =()=>{
  axios.get('http://localhost:3000/auth/salary_count')
  .then(result =>{
   if(result.data.Status){
    setSalaryTotal(result.data.Result[0].salary)
   }
  })

}
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
          <h5>Total:{employeeTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Salary</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:{salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
               adminRecord.map(a => (
                 <tr>
                  <td>{a.email}</td>
                  <td>
                  <button
                    className="btn btn-info btn-sm me-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-warning btn-sm" >
                    Delete
                  </button>
                  </td>
                 </tr>
               ))
            }
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default Home