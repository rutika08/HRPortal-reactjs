import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const HolidayDetails = () => {
  const [holidayList, setholidayList] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:3300/holiday").then(res => {
          console.log(res.data.data)
          setholidayList(res.data.data)
      })

  }
  useEffect(() => {
      getData()
  }, [])

  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div className="col-lg-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title"> Holiday Details</h4>
      <p className="card-description">
        {/* Add class <code>.table-striped</code> */}
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
            <th>
                #
              </th>
              <th>
                Title
              </th>
              <th>
                Description
              </th>
              <th>
                Start Date
              </th>
              <th>
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
          {holidayList.map((holiday,index)=>{
                        return(
                          <tr class="table-info">
                          <td scope="row">{index+1}
                          </td>
                          <td>
                            {holiday.holidayName}
                          </td>
                          <td>
                          {holiday.description}  
                          </td>
                          <td>
                          {holiday.holidayStartDate}
                          </td>
                          <td>
                          {holiday.holidayEndDate}
                          </td>
                          <td>
                                        <Link  to={`/delete/${celebration._id}`} className = "btn btn-danger">DELETE</Link>
                                        <Link  to={`/update/${celebration._id}`} className  = "btn btn-primary">UPDATE</Link>
                                    </td>
                        </tr>

                        )
                      })}
       
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}