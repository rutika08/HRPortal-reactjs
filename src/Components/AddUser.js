import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const AddUser = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [UserName, setUserName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Gender, setGender] = useState('')
  const [MobileNumber, setMobileNumber] = useState('')
  const [dob, setdateofbirth] = useState('')
  const [Role, setRole] = useState('')
  const [Salary, setSalary] = useState('')
  const [Address, setAddress] = useState('')


  const submit =(e)=>{
    e.preventDefault()
    alert("Data saved")
    console.log("ii",e.target.value)
  
    var data = {
      firstName :FirstName,
      lastName:LastName,
      userName:UserName,
        email :Email,
        gender:Gender,
        mobileNo:MobileNumber,
        dateOfBirth:dob,
        address:Address,
        role:Role,
        salary:Salary,
        password:Password,        
    }
    axios.post('http://localhost:2000/users',data).then(res=>{
        console.log(res.data)
    })
}


  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div class="col-lg-12 stretch-card">
    <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Add User Details</h4>
      <form className="form-sample" onSubmit={submit}>
        <p className="card-description">
          Personal info
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">User Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="userName" onChange={(e)=>setUserName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mobile Number</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="mobileNo" onChange={(e)=>setMobileNumber(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" name="password" onChange={(e)=>setPassword(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">First Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="firstName" onChange={(e)=>setFirstName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="lastName" onChange={(e)=>setLastName(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" name="gender">Gender</label>
              <div className="col-sm-9">
                <select className="form-control" name="gender" onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" name="dob">Date of Birth</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="dob" onChange={(e)=>setdateofbirth(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Role</label>
              <div className="col-sm-9">
                <select className="form-control" name="role" onChange={(e)=>setRole(e.target.value)}>
                <option value="">Select</option>
                <option value="6217ca6875c14d52608b7675">HR Manager </option>
                <option value="6217cae875c14d52608b7677">Employee</option>
                  <option value="6217caf475c14d52608b7679">Admin</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Salary</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="salary" onChange={(e)=>setSalary(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
       
        <p className="card-description">
          Address
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Address 1</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="address" onChange={(e)=>setAddress(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">City</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">State</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Country</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>India</option>
                  <option>Italy</option>
                  <option>Russia</option>
                  <option>Britain</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
  <button className='button2'  type='submit'>Submit</button>
</div>
      </form>
    </div>
  </div>
  </div>
  </div>
  </div>
  
</div>

  )
}
