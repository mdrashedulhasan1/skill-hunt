import React, { useEffect, useState } from 'react';
import { Row  } from 'react-bootstrap';
import SingleGraphicsDesign from '../SingleGraphicsDesign/SingleGraphicsDesign';
const GraphicDesign = () => {
    const [graphics, setGraphics] = useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => {
            setGraphics(data.slice(6,9));   
        })
    },[]);
    return (
        <div>
        <h1 style={{fontSize:'60px'}} className='text-center my-5'>Graphic Design</h1>
        <Row xs={1} md={2} xl={3} className="g-4">
            { 
                graphics.map(graphic => <SingleGraphicsDesign key={graphic.id} graphic={graphic}></SingleGraphicsDesign>)
            }
        </Row>
    </div>
    );
};

export default GraphicDesign;