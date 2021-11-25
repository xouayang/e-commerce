import React from 'react'
import {Col,Carousel} from 'react-bootstrap'
import Picture from '../image/shirts2.jpg'
import Picture1 from '../image/brand.jpg'
const Carousels = () => {
    return (
        <Col md={6} className="shadow">
        <Carousel>
          <Carousel.Item className="text-center">
            <img style={{ width: "300px" }} src={Picture1} alt="" />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img style={{ width: "300px" }} src={Picture1} alt="" />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img
              style={{ width: "300px" }}
              className=" text-center"
              src={Picture1}
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </Col>

    )
}

export default Carousels
