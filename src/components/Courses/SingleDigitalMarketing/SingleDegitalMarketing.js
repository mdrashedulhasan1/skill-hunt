import React from 'react';
import { Col, Card } from 'react-bootstrap';
const SingleDegitalMarketing = (props) => {
    const {id, name, fee, img, describtion} = props.marketing;
    return (
        <Col>
        <Card>
          <Card.Img style={{height:'200px'}} variant="top" src={img} />
          <Card.Body>
          <h2>Fee:{fee}</h2>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {describtion}
            </Card.Text>
            <button className='btn btn-success'>Enroll Now</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default SingleDegitalMarketing;