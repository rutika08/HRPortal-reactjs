import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Header from '../Admin_Componant/Header';
// import Menu from '../Admin_Componant/Menu';

export const UpdateUser = () => {
    var id = useParams().id;
    console.log("Id--", id);

    const [data, setdata] = useState('')
    const [leaveReason, setleaveReason] = useState(data.leaveReason)
    const [leaveStartDate, setleaveStartDate] = useState(data.leaveStartDate)
    const [leaveEndDate, setleaveEndDate] = useState(data.leaveEndDate)
    Const [acceptOrReject, setacceptOrReject] = useState('')

    // console.log("firstName--> ",data.firstName)

    const getData = () => {
        axios.get(`http://localhost:3300/leave/${id}`).then((res) => {
            setdata(res.data.data);
            console.log("--", res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update = (e) => {
        var updatedData = {
            leaveReason: leaveReason,
            leaveStartDate: leaveStartDate,
            leaveEndDate: leaveEndDate,
            acceptOrReject: acceptOrReject
        };
        e.preventDefault();

        axios.put(`http://localhost:3300/leave/${id}`, updatedData).then((res) => {
            alert('Data Updated.....');
        });
    };

    return (
        <div className='content-wrapper'>
            <div className='row'>
                <div class="col-lg-12 stretch-card">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Update Leave Details</h4>
                                <p className="card-description">

                                </p>
                                <form className="forms-sample" onSubmit={submit}>
                                   
                                    <div className="form-group row">
                                        <label htmlFor="exampleInputMobile" name="leaveStartDate" className="col-sm-2 col-form-label">Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" name="leaveStartDate" defaultValue={data.leaveStartDate} onChange={(e) => setleaveStartDate(e.target.value)} placeholder="dd/mm/yy" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="exampleInputMobile" name="leaveEndDate" className="col-sm-2 col-form-label">Leave End Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" name="leaveEndDate" defaultValue={data.leaveEndDate} onChange={(e) => setleaveEndDate(e.target.value)} placeholder="dd/mm/yy" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="exampleInputEmail2" name="leaveReason" className="col-sm-2 col-form-label">Leave Reason</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="leaveReason" defaultValue={data.leaveReason} onChange={(e) => setleaveReason(e.target.value)} />
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