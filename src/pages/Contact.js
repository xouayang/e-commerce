import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Whatsapp from '../image/call.png'
const Contact = () => {
    return (
        <Container>
         <Row className="mt-5">
           <Col xs="auto" md={4} className="shadow-lg p-2" style={{background:'#1dd1a1'}}>
                 <h6 className="text-center mt-1 text-white">ສາມາດຕິດຕໍ່ເຮົາໄດ້ຫຼາຍຊ່ອງທາງ</h6>

                 <Col>
                    <img style={{width:'50px',color:'white'}} src={Whatsapp}  alt=""/>
                 </Col>
           </Col>
           <Col xs="auto" md={8}>

           </Col>
         </Row>   
        </Container>
    )
}

export default Contact
