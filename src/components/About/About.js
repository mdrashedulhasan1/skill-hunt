import React from 'react';

const About = () => {
    return (
        <div className="container overflow-hidden">
            <div className="row gx-5 gy-2">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="p-3 border bg-info text-center rounded-3 py-5">
                        <h3>Total Students</h3>
                        <h2>3000+</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="p-3 border bg-warning text-center rounded-3 py-5">
                    <h3>Successful Students</h3>
                    <h2>85%</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="p-3 border bg-success py-5 text-center rounded-3">
                        <h3>Satisfied Students</h3>
                        <h2>100%</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;