import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const AddCelebrations = () => {
  const [holidayName, setholidayName] = useState('')
  const [description, setdescription] = useState('')
  const [holidayStartDate, setholidayStartDate] = useState('')
  const [holidayEndDate, setholidayEndDate] = useState('')

  const submit =(e)=>{
    e.preventDefault();
    console.log("ii",e.target.value)

    alert("Successfully Enter...")
  
    var data = {
      holidayName: holidayName,
      holidayStartDate: holidayStartDate,
      holidayEndDate: holidayEndDate,
      description: description
    }
    axios.post('http://localhost:3300/holiday',data).then(res=>{
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
      <h4 className="card-title">Add Holiday</h4>
      <p className="card-description">
        
      </p>
      <form className="forms-sample" onSubmit={submit}>
        <div className="form-group row">
          <label htmlFor="exampleInputUsername2" name="holidayName" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="holidayName" onChange={(e)=>setholidayName(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" name="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="description" onChange={(e)=>setdescription(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" name="holidayStartDate" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" name="holidayStartDate" onChange={(e)=>setholidayStartDate(e.target.value)} placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" name="holdayEndDate" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" name="holidayEndDate" onChange={(e)=>setholidayEndDate(e.target.value)} placeholder="dd/mm/yy" />
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