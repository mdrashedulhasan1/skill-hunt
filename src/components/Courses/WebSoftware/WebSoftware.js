import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import SingleWebSoftware from '../SingleWebSoftware/SingleWebSoftware';
import './WebSoftware.css';
const WebSoftware = () => {
    const [WebSoftwares, setWebSoftwares] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setWebSoftwares(data.slice(0, 3));
            })
    }, []);
    return (
        <div>
            <h1 style={{ fontSize: '60px' }} className='text-center my-5'>Web & Software</h1>
            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    WebSoftwares.map(WebSoftwares => <SingleWebSoftware key={WebSoftwares.id} WebSoftwares={WebSoftwares}></SingleWebSoftware>)
                }
            </Row>
        </div>
    );
};

export default WebSoftware;