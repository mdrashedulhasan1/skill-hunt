import React from 'react';
import { Col, Card } from 'react-bootstrap';
const SingleVideoEditing = (props) => {
    const {id, name, fee, img, describtion} = props.editing;
    return (
        <Col>
          <Card>
            <Card.Img style={{height:'200px'}} variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               {describtion}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default SingleVideoEditing;