import React from 'react';

const Blogs = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img style={{height: '300px'}} src="https://media.gettyimages.com/photos/hispanic-female-studying-on-laptop-picture-id1182745546?s=612x612" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Student Review</h5>
              <p className="card-text">World Best IT Institute.</p>
            </div>
            <div className="card-footer">
              <button className='btn btn-info'>More Info</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img style={{height: '300px'}} src="https://images.pexels.com/photos/3747147/pexels-photo-3747147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Student Review</h5>
              <p className="card-text">World Best IT Institute.</p>
            </div>
            <div className="card-footer">
            <button className='btn btn-info'>More Info</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img style={{height: '300px'}} src="https://www.thebalancecareers.com/thmb/07Rc0J9Mg8KmZL2ij90zHD7M19Q=/405x0/filters:max_bytes(150000):strip_icc()/enjoying-his-studies-484286872-735782e8d2144f7496bf9b947bcc1a56.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Student Review</h5>
              <p className="card-text">World Best IT Institute.</p>
            </div>
            <div className="card-footer">
            <button className='btn btn-info'>More Info</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;