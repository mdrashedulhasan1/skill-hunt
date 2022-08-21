import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleDegitalMarketing from '../SingleDigitalMarketing/SingleDegitalMarketing';
const DigitalMarketing = () => {
    const [marketings, setMarketings] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setMarketings(data.slice(12, 15));
            })
    }, []);
    return (
        <div>
            <h1 style={{ fontSize: '60px' }} className='text-center my-5'>Digital Marketing</h1>
            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    marketings.map(marketing => <SingleDegitalMarketing key={marketing.id} marketing={marketing}></SingleDegitalMarketing>)
                }
            </Row>
        </div>
    );
};

export default DigitalMarketing;