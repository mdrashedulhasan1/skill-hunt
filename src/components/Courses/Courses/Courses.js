import React from 'react';
import CorporateCourses from '../CorporateCourses/CorporateCourses';
import DigitalMarketing from '../DigitalMarketing/DigitalMarketing';
import GraphicsDesign from '../GraphicsDesign/GraphicsDesign';
import Programming from '../Programming/Programming';
import VideoEditing from '../VideoEditing/VideoEditing';
import WebSoftware from '../WebSoftware/WebSoftware';

const Courses = () => {
    return (
        <div>
           <WebSoftware></WebSoftware>
           <Programming></Programming>
           <GraphicsDesign></GraphicsDesign>
           <VideoEditing></VideoEditing>
           <DigitalMarketing></DigitalMarketing>
           <CorporateCourses></CorporateCourses>
        </div>
    );
};

export default Courses;