import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const AddCelebrations = () => {
  const [leaveReason, setleaveReason] = useState('')
  // const [description, setdescription] = useState('')
  const [leaveStartDate, setleaveStartDate] = useState('')
  const [leaveEndDate, setleaveEndDate] = useState('')

  const submit =(e)=>{
    e.preventDefault();
    console.log("ii",e.target.value)

    alert("Successfully Enter...")
  
    var data = {
      leaveReason: leaveReason,
      leaveStartDate: leaveStartDate,
      leaveEndDate: leaveEndDate
      
    }
    axios.post('http://localhost:3300/leave',data).then(res=>{
        console.log(res.data)
    })
}
return (
  <div className='content-wrapper'>
  <div className='row'>
  <div class="col-lg-12 stretch-card">
  <div className="col-md-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Add Leave</h4>
      <p className="card-description">
        
      </p>
      <form className="forms-sample" onSubmit={submit}>
        {/* <div className="form-group row">
          <label htmlFor="exampleInputUsername2" name="holidayName" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="holidayName" onChange={(e)=>setholidayName(e.target.value)} />
          </div>
        </div> */}
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" name="leaveStartDate" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" name="leaveStartDate" onChange={(e)=>setleaveStartDate(e.target.value)} placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" name="leaveEndDate" className="col-sm-2 col-form-label">Leave End Date</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" name="leaveEndDate" onChange={(e)=>setleaveEndDate(e.target.value)} placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" name="leaveReason" className="col-sm-2 col-form-label">Leave Reason</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="leaveReason" onChange={(e)=>setleaveReason(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="button2">Submit</button>
         </form>
    </div>
  </div>
  </div>
  </div>
  </div>
</div>

)
}