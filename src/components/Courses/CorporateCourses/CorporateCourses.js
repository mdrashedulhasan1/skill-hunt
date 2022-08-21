import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCorporateCourse from '../SingleCorporateCourse/SingleCorporateCourse';
const CorporateCourses = () => {
    const [corporateCourses, setCorporateCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setCorporateCourses(data.slice(15, 18));
            })
    }, []);
    return (
        <div>
        <h1 style={{ fontSize: '60px' }} className='text-center my-5'>Digital Marketing</h1>
        <Row xs={1} md={2} xl={3} className="g-4">
            {
                corporateCourses.map(corporateCourse => <SingleCorporateCourse key={corporateCourse.id} corporateCourse={corporateCourse}></SingleCorporateCourse>)
            }
        </Row>
    </div>
    );
};

export default CorporateCourses;