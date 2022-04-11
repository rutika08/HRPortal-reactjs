import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Header from '../Admin_Componant/Header';
// import Menu from '../Admin_Componant/Menu';

export const UpdateUser = () => {
    var id = useParams().id;
    console.log("Id--",id);

    const [data, setdata] = useState('')
    const [firstName, setfirstName] = useState(data.firstName)
    const [lastName, setlastName] = useState(data.lastName)
    const [userName, setuserName] = useState(data.userName)
    const [email, setemail] = useState(data.email)
    const [password, setpassword] = useState(data.password)
    const [gender, setgender] = useState(data.gender)
    const [userContact, setuserContact] = useState(data.userContact)
    const [dob, setdateofbirth] = useState(data.dateOfBirth)
    const [role, setrole] = useState(data.roleName)
    const [salary, setsalary] = useState(data.salary)
    const [address, setaddress] = useState(data.address)
    const [experienceYear, setexperienceYear] = useState(data.experienceYear)
    const [qualification, setqualification] = useState(data.qualification)

    // console.log("firstName--> ",data.firstName)

    const getData=()=>{
        axios.get(`http://localhost:3300/users/${id}`).then((res)=>{
          console.log("firstName--> ",res.data.firstName)
        setdata(res.data.data);
            console.log("--",res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update =(e)=>{
        var updatedData ={
            firstName :firstName,
            lastName:lastName,
            userName:userName,
            email :email,
            gender:gender,
            userContact:userContact,
            dateOfBirth:dob,
            address:address,
            role:role,
            salary:salary,
            password:password,
            experienceYear: experienceYear,
            qualification : qualification
        };
        e.preventDefault();

        axios.put(`http://localhost:3300/user/${id}`,updatedData).then((res)=>{
            alert('Data Updated.....');
        });
    };

  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div class="col-lg-12 stretch-card">
    <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Update User Details</h4>
      <form className="form-sample" onSubmit={update}>
        <p className="card-description">
          Personal info
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">User Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="userName" defaultValue={data.userName} onChange={(e)=>setuserName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" name="email" defaultValue={data.email} onChange={(e)=>setemail(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Contact Number</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="userContact" defaultValue={data.userContact} onChange={(e)=>setuserContact(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" name="password" defaultValue={data.password} onChange={(e)=>setpassword(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">First Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="firstName" defaultValue={data.firstName} onChange={(e)=>setfirstName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="lastName" defaultValue={data.lastName} onChange={(e)=>setlastName(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" name="gender">Gender</label>
              <div className="col-sm-9">
                <select className="form-control" name="gender" defaultValue={data.gender} onChange={(e)=>setgender(e.target.value)}>
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
                <input type="date" className="form-control" name="dob" defaultValue={data.dateOfBirth} onChange={(e)=>setdateofbirth(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Role</label>
              <div className="col-sm-9">
                <select className="form-control" name="role" defaultValue={data.roleName} onChange={(e)=>setrole(e.target.value)}>
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
                <input type="text" className="form-control" name="salary" defaultValue={data.salary} onChange={(e)=>setsalary(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Experience Year</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="experienceYear" defaultValue={data.experienceYear} onChange={(e)=>setexperienceYear(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Qualification</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="qualification" defaultValue={data.qualification} onChange={(e)=>setqualification(e.target.value)} />
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
              <label className="col-sm-3 col-form-label">Addres</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="address" defaultValue={data.address} onChange={(e)=>setaddress(e.target.value)}/>
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