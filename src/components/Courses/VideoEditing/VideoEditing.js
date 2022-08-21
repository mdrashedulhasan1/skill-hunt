import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleVideoEditing from '../SingleVideoEditing/SingleVideoEditing';
const VideoEditing = () => {
    const [editings, setEditings] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setEditings(data.slice(9,12));
            })
    }, []);
    return (
        <div>
            <h1 style={{ fontSize: '60px' }} className='text-center my-5'>Video Editing</h1>
            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    editings.map(editing => <SingleVideoEditing key={editing.id} editing={editing}></SingleVideoEditing>)
                }
            </Row>
        </div>
    );
};

export default VideoEditing;