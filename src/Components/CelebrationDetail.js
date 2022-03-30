import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const CelebrationDetail = () => {
  const [celebrationList, setcelebrationList] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:2000/celebration").then(res => {
          console.log(res.data.data)
          setcelebrationList(res.data.data)
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
      <h4 className="card-title"> Celebration Details</h4>
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
                Date
              </th>
              <th>
                Time
              </th>
              <th>
               Venue
              </th>
            </tr>
          </thead>
          <tbody>
          {celebrationList.map((celebration,index)=>{
                        return(
                          <tr class="table-info">
                          <td scope="row">{index+1}
                          </td>
                          <td>
                            {celebration.title}
                          </td>
                          <td>
                          {celebration.description}  
                          </td>
                          <td>
                          {celebration.date}
                          </td>
                          <td>
                          {celebration.time}
                          </td>
                          <td>
                          {celebration.venue}
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
