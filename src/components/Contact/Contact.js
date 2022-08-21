import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='registration bg-info'>
            <div className='w-75 mx-auto pb-3'>
                <div className=' mb-4'>
                <h1 style={{ fontSize: '60px' }} className='text-center my-5'>Contact</h1>
                </div>
                <form>
                    <div className='w-50 mx-auto'>
                        <div className='row mb-2'>
                            <div class="col-5">
                                <label for="" className="d-flex justify-content-end form-label required" >First name</label>
                            </div>
                            <div class="col-7">
                                <input type="text" className="form-control" id="" placeholder='write your first name' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div class="col-5">
                                <label for="" className="d-flex justify-content-end form-label required" >Last name</label>
                            </div>
                            <div class="col-7">
                                <input type="text" className="form-control" id="" placeholder='write your last name' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div class="col-5">
                                <label for="" className="d-flex justify-content-end form-label required">Student Id</label>
                            </div>
                            <div class="col-7">
                                <input type="password" className="d-flex justify-content-end form-control" id="" placeholder='write your last name' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div class="col-5">
                                <label for="" className="d-flex justify-content-end form-label required">Dath of Barth</label>
                            </div>
                            <div class="col-7">
                                <input type="date" className="form-control" id="" required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div class="col-5">
                                <label for="" className="d-flex justify-content-end form-label required">Mobile Number</label>
                            </div>
                            <div class="col-7">
                                <input type="number" className="form-control" id="" placeholder='enter your mobile number' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div class="col-5">
                            </div>
                            <div class="col-7">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;