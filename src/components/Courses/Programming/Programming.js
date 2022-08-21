import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProgramming from '../SingleProgramming/SingleProgramming';
const Programming = () => {
    const [Programmings, setProgrammings] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setProgrammings(data.slice(3, 6));
            })
    }, []);
    return (
        <div>
            <h1 style={{ fontSize: '60px' }} className='text-center my-5'>Programming</h1>
            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    Programmings.map(programming => <SingleProgramming key={programming.id} programming={programming}></SingleProgramming>)
                }
            </Row>
        </div>
    );
};

export default Programming;