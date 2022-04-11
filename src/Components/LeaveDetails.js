import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const LeaveDetails = () => {
  const [leaveList, setleaveList] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:3300/leave").then(res => {
          console.log(res.data.data)
          setleaveList(res.data.data)
      });
  };

  const DeleteData =(_id)=>{
    axios.delete(`http://localhost:3300/leave/${_id}`).then((res)=>{
        alert(res.data);
        getData();
    });
  };

  useEffect(() => {
      getData()
  }, [])

  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div className="col-lg-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title"> Leave Details</h4>
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
                Leave Reason
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
          {leaveList.map((leave,index)=>{
                        return(
                          <tr class="table-info">
                          <td scope="row">{index+1}
                          </td>
                          <td>
                          {leave.leaveReason}  
                          </td>
                          <td>
                          {leave.leaveStartDate}
                          </td>
                          <td>
                          {leave.leaveEndDate}
                          </td>
                          <td>
                            <button onClick={() => DeleteData(celebration._id)} className='btn btn-danger'>DELETE</button>
                            <Link  to={`/update/${leave._id}`} className  = "btn btn-primary">UPDATE</Link>
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