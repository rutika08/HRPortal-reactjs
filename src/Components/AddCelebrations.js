import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const AddCelebrations = () => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [date, setdate] = useState('')
  const [time, settime] = useState('')
  const [venue, setvenue] = useState('')
 


  const submit =(e)=>{
    e.preventDefault()
    console.log("ii",e.target.value)
  
    var data = {
      title:title,
      description:description,
      date:date,
      time:time,
      venue:venue,        
    }
    axios.post('http://localhost:2000/celebration',data).then(res=>{
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
      <h4 className="card-title">Add Celebrations</h4>
      <p className="card-description">
        
      </p>
      <form className="forms-sample" onSubmit={submit}>
        <div className="form-group row">
          <label htmlFor="exampleInputUsername2" name="title" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="title" onChange={(e)=>settitle(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" name="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="description" onChange={(e)=>setdescription(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" name="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" name="date" onChange={(e)=>setdate(e.target.value)} placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputPassword2" name="time" className="col-sm-2 col-form-label">Time</label>
          <div className="col-sm-9">
            <input type="time" className="form-control" name="time" onChange={(e)=>settime(e.target.value)} placeholder="12:12:pm" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" name="venue" className="col-sm-2 col-form-label">Venue</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="venue" onChange={(e)=>setvenue(e.target.value)} />
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
