import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Category =() =>{
    useEffect(()=>{

    },[])
}

function Category() {
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>
            Category List
            </h3>
        </div>
        <Link to="/dashboard/add_category" className='btn btn-success'>Add Category</Link>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default Category