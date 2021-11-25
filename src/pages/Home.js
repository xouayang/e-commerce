import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import Carousels from "../components/Carousel";
import TextRightCarousel from "../components/TextRightCarousel";
import ProductOverview from "../components/ProductOverview";
import MainProduct from "../components/MainProduct";
const Home = () => {
  return (
    <>
      <div>
        <Container className="mt-2">
          <Row className="mt-3">
            <Carousels />
            <TextRightCarousel/>
            <ProductOverview/>
            <MainProduct/>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
