import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const MainPart = () => {
    return (
        <div className='home-container'>
        <h1 className='home-header-text'>Welcome to World Best Courses!</h1>
        <h3 className='home-header-sub-text'>Make Bright Your Future</h3>
        <div className="container overflow-hidden mt-4">
            <div className="row gx-5 gy-2">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="border bg-info text-center rounded-3 py-2">
                        <h2>Web & Software</h2>
                        <Link to="/courses"><button className='btn btn-success'>Purchase Now</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="p-1 border bg-warning text-center rounded-3 py-2">
                    <h2>Programming</h2>
                    <Link to="/courses"><button className='btn btn-success'>Purchase Now</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="border bg-primary py-2 text-center rounded-3">
                    <h2>Graphic Design</h2>
                    <Link to="/courses"><button className='btn btn-success'>Purchase Now</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="border bg-danger py-2 text-center rounded-3">
                    <h2>Video Editing</h2>
                    <Link to="/courses"><button className='btn btn-success'>Purchase Now</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="border bg-info py-2 text-center rounded-3">
                    <h2>Digital Marketing</h2>
                    <Link to="/courses"><button className='btn btn-success'>Purchase Now</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="border bg-warning py-2 text-center rounded-3">
                    <h2>Corporate Courses</h2>
                    <Link to="/courses"><button className='btn btn-success'>Purchase Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MainPart;