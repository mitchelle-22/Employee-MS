import React from 'react'
import { useParams, } from 'react-router-dom'

function EditEmployee () {
    const {id} = useParams()
  return (
    <div></div>
    // <div className="d-flex justify-content-center align-items-center mt-3">
    //   <div className="p-3 rounded w-50 border">
    //     <h3 className="text-center">Edit Employee</h3>
    //     <form className="row g-1" onSubmit={handleSubmit}>
    //       <div className="col-12">
    //         <label for="inputName" className="form-label">
    //           Name
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control rounded-0"
    //           id="inputName"
    //           placeholder="Enter Name"
    //           value={employee.name}
    //           onChange={(e) =>
    //             setEmployee({ ...employee, name: e.target.value })
    //           }
    //         />
    //       </div>
    //       <div className="col-12">
    //         <label for="inputEmail4" className="form-label">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           className="form-control rounded-0"
    //           id="inputEmail4"
    //           placeholder="Enter Email"
    //           autoComplete="off"
    //           value={employee.email}
    //           onChange={(e) =>
    //             setEmployee({ ...employee, email: e.target.value })
    //           }
    //         />
    //       </div>
    //       <div className='col-12'>
    //         <label for="inputSalary" className="form-label">
    //           Salary
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control rounded-0"
    //           id="inputSalary"
    //           placeholder="Enter Salary"
    //           autoComplete="off"
    //           value={employee.salary}
    //           onChange={(e) =>
    //             setEmployee({ ...employee, salary: e.target.value })
    //           }
    //         />
    //       </div>
    //       <div className="col-12">
    //         <label for="inputAddress" className="form-label">
    //           Address
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control rounded-0"
    //           id="inputAddress"
    //           placeholder="1234 Main St"
    //           autoComplete="off"
    //           value={employee.address}
    //           onChange={(e) =>
    //             setEmployee({ ...employee, address: e.target.value })
    //           }
    //         />
    //       </div>
    //       <div className="col-12">
    //         <label for="category" className="form-label">
    //           Category
    //         </label>
    //         <select name="category" id="category" className="form-select"
    //             onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
    //           {category.map((c) => {
    //             return <option value={c.id}>{c.name}</option>;
    //           })}
    //         </select>
    //       </div>
          
    //       <div className="col-12">
    //         <button type="submit" className="btn btn-primary w-100">
    //           Edit Employee
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //   </div>
  )
}

export default EditEmployee